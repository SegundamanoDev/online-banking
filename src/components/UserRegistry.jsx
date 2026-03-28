import React, { useState } from "react";
import {
  Search,
  Filter,
  MoreVertical,
  ShieldCheck,
  ShieldAlert,
  UserMinus,
  XCircle,
  Loader2,
} from "lucide-react";
import {
  useGetAdminUsersQuery,
  useUpdateUserStatusMutation,
  useAdminDepositMutation,
} from "../../src/services/api";
import { toast } from "react-hot-toast";

const UserRegistry = () => {
  const [mode, setMode] = useState(null);
  const [depositData, setDepositData] = useState({
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });
  const { data: users, isLoading } = useGetAdminUsersQuery();
  const [updateStatus] = useUpdateUserStatusMutation();
  const [adminDeposit, { isLoading: isProcessing }] = useAdminDepositMutation();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [adjustmentAmount, setAdjustmentAmount] = useState("");

  const filteredUsers = users?.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.customerId.includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleStatusToggle = async (id, newStatus) => {
    try {
      await updateStatus({ id, status: newStatus }).unwrap();
      toast.success(`Protocol Updated: User is now ${newStatus}`);
    } catch (err) {
      toast.error("Override Failed: System rejected the status change");
    }
  };

  const handleBalanceAdjustment = async (e) => {
    e.preventDefault();

    const amount = parseFloat(depositData.amount);
    // Negative if mode is debit
    const finalAmount = mode === "debit" ? -Math.abs(amount) : Math.abs(amount);

    try {
      await adminDeposit({
        userId: selectedUser._id,
        amount: finalAmount,
        description: depositData.description,
        date: depositData.date, // Make sure your backend saves this!
      }).unwrap();

      toast.success(`Ledger Synchronized: ${mode.toUpperCase()} Success`);

      // Clear state and close form
      setDepositData({
        amount: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
      });
      setMode(null);

      // Optional: manually update the balance in the side panel view
      setSelectedUser((prev) => ({
        ...prev,
        balance: prev.balance + finalAmount,
      }));
    } catch (err) {
      toast.error(err.data?.message || "Override rejected.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* MAIN TABLE SECTION */}
      <div
        className={`flex-1 transition-all duration-300 ${selectedUser ? "lg:mr-[400px]" : ""}`}
      >
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          {/* TABLE HEADER & FILTERS */}
          <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">
                Client Registry
              </h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">
                Total Managed Identities: {users?.length || 0}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="SEARCH UID / EMAIL / NAME..."
                  className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-[11px] font-bold uppercase tracking-tight focus:ring-2 focus:ring-emerald-500 w-64"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* THE DATA TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Client Identity
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Tier/Region
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Ledger Balance
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {isLoading ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="p-10 text-center font-mono text-[10px] animate-pulse"
                    >
                      QUERYING CENTRAL REGISTRY...
                    </td>
                  </tr>
                ) : (
                  filteredUsers?.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                      onClick={() => setSelectedUser(user)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 text-xs uppercase">
                            {user.firstName[0]}
                            {user.lastName[0]}
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-900 uppercase tracking-tight">
                              {user.firstName} {user.lastName}
                            </p>
                            <p className="text-[10px] font-medium text-slate-400">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={user.status} />
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-[10px] font-black text-slate-700 uppercase tracking-tighter">
                          Gold Tier
                        </p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase">
                          {user.country || "Global"}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-black text-slate-900">
                          ${user.balance?.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <MoreVertical
                          size={16}
                          className="text-slate-300 inline"
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* DRILL-DOWN SIDE PANEL */}
      {selectedUser && (
        <aside className="fixed right-0 top-0 bottom-0 w-full lg:w-[400px] bg-white border-l border-slate-100 shadow-2xl z-50 animate-in slide-in-from-right duration-300 flex flex-col">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-900 text-white">
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Client Profile
              </p>
              <h3 className="text-xl font-black italic uppercase tracking-tighter">
                {selectedUser.customerId}
              </h3>
            </div>
            <button
              onClick={() => setSelectedUser(null)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <XCircle size={24} />
            </button>
          </div>

          <div className="p-8 space-y-8 flex-1 overflow-y-auto">
            {/* LEDGER CONTROL SECTION */}
            <section className="space-y-3">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Ledger Control
              </h4>

              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                {!mode ? (
                  /* INITIAL VIEW: Balance and Choice Buttons */
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase">
                        Available Liquidity
                      </p>
                      <p className="text-3xl font-black text-slate-900 italic">
                        ${selectedUser.balance?.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setMode("credit")}
                        className="flex-1 py-3 bg-emerald-500 text-white text-[10px] font-black uppercase rounded-xl hover:bg-emerald-600 transition-all"
                      >
                        Manual Credit
                      </button>
                      <button
                        onClick={() => setMode("debit")}
                        className="flex-1 py-3 bg-slate-900 text-white text-[10px] font-black uppercase rounded-xl hover:bg-black transition-all"
                      >
                        Debit
                      </button>
                    </div>
                  </div>
                ) : (
                  /* FORM VIEW: Narrative, Amount, Date */
                  <form
                    onSubmit={handleBalanceAdjustment}
                    className="space-y-5 animate-in fade-in zoom-in-95 duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${mode === "credit" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}
                      >
                        System {mode}
                      </span>
                      <button
                        type="button"
                        onClick={() => setMode(null)}
                        className="text-[10px] font-bold text-slate-400 uppercase hover:text-slate-600"
                      >
                        Cancel
                      </button>
                    </div>

                    {/* Amount */}
                    <div>
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1.5 ml-1">
                        Value (USD)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 font-bold">
                          $
                        </span>
                        <input
                          type="number"
                          required
                          placeholder="0.00"
                          className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm font-black outline-none focus:ring-2 focus:ring-emerald-500"
                          value={depositData.amount}
                          onChange={(e) =>
                            setDepositData({
                              ...depositData,
                              amount: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Narrative */}
                    <div>
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1.5 ml-1">
                        Narrative
                      </label>
                      <textarea
                        required
                        rows="2"
                        placeholder="Official reason..."
                        className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                        value={depositData.description}
                        onChange={(e) =>
                          setDepositData({
                            ...depositData,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1.5 ml-1">
                        Effective Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-emerald-500"
                        value={depositData.date}
                        onChange={(e) =>
                          setDepositData({
                            ...depositData,
                            date: e.target.value,
                          })
                        }
                      />
                    </div>

                    <button
                      disabled={isProcessing}
                      className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest text-white transition-all flex items-center justify-center gap-2 ${mode === "credit" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-slate-900 hover:bg-black"}`}
                    >
                      {isProcessing ? (
                        <Loader2 className="animate-spin" size={14} />
                      ) : (
                        `Authorize ${mode}`
                      )}
                    </button>
                  </form>
                )}
              </div>
            </section>

            {/* STATUS OVERRIDES */}
            <section className="space-y-3">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Protocol Override
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleStatusToggle(selectedUser._id, "active")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${selectedUser.status === "active" ? "bg-emerald-50 border-emerald-200 text-emerald-600" : "bg-white border-slate-100 text-slate-400"}`}
                >
                  <ShieldCheck size={20} />
                  <span className="text-[9px] font-black uppercase">
                    Activate
                  </span>
                </button>
                <button
                  onClick={() =>
                    handleStatusToggle(selectedUser._id, "blocked")
                  }
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${selectedUser.status === "blocked" ? "bg-red-50 border-red-200 text-red-600" : "bg-white border-slate-100 text-slate-400"}`}
                >
                  <ShieldAlert size={20} />
                  <span className="text-[9px] font-black uppercase">
                    Suspend
                  </span>
                </button>
              </div>
            </section>

            {/* DATA ROWS */}
            <section className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Registry Data
              </h4>
              <InfoRow
                label="Registration Date"
                value={new Date(selectedUser.createdAt).toLocaleDateString()}
              />
              <InfoRow label="Email Address" value={selectedUser.email} />
              <InfoRow
                label="Identity Auth"
                value={selectedUser.idType || "Not Provided"}
              />
              <InfoRow
                label="Document ID"
                value={selectedUser.idNumber || "Unverified"}
              />
            </section>
          </div>
        </aside>
      )}
    </div>
  );
};

// ... StatusBadge and InfoRow helpers remain same ...
const StatusBadge = ({ status }) => {
  const styles = {
    active: "bg-emerald-50 text-emerald-600 border-emerald-100",
    pending: "bg-amber-50 text-amber-600 border-amber-100",
    blocked: "bg-red-50 text-red-600 border-red-100",
  };
  return (
    <span
      className={`px-2 py-1 rounded-md text-[9px] font-black uppercase border tracking-tighter ${styles[status]}`}
    >
      {status}
    </span>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-slate-50">
    <span className="text-[10px] font-bold text-slate-400 uppercase">
      {label}
    </span>
    <span className="text-[10px] font-black text-slate-700 uppercase">
      {value}
    </span>
  </div>
);

export default UserRegistry;
