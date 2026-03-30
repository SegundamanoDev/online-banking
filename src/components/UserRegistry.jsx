import React, { useState, useEffect } from "react";
import {
  Search,
  MoreVertical,
  ShieldCheck,
  ShieldAlert,
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
  // --- API HOOKS ---
  const { data: users, isLoading } = useGetAdminUsersQuery();
  const [updateStatus] = useUpdateUserStatusMutation();
  const [adminDeposit, { isLoading: isProcessing }] = useAdminDepositMutation();

  // --- STATE ---
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState(null); // 'credit' | 'debit' | null

  // Ledger Form State
  const [depositData, setDepositData] = useState({
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  // Security Protocol State
  const [freezeReason, setFreezeReason] = useState("administrative_hold");
  const [restrictions, setRestrictions] = useState({
    canTransfer: true,
    canRequestLoan: true,
    canChangeSecurity: true,
  });

  // Sync restrictions when a user is selected
  useEffect(() => {
    if (selectedUser?.restrictions) {
      setRestrictions(selectedUser.restrictions);
      setFreezeReason(selectedUser.freezeReason || "administrative_hold");
    }
  }, [selectedUser]);

  // --- HANDLERS ---
  const filteredUsers = users?.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.customerId.includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleStatusUpdate = async (newStatus) => {
    try {
      const payload = {
        status: newStatus,
        freezeReason: newStatus === "active" ? "none" : freezeReason,
        restrictions:
          newStatus === "active"
            ? {
                canTransfer: true,
                canRequestLoan: true,
                canChangeSecurity: true,
              }
            : restrictions,
      };

      await updateStatus({ id: selectedUser._id, ...payload }).unwrap();

      setSelectedUser((prev) => ({
        ...prev,
        status: newStatus,
        restrictions: payload.restrictions,
        freezeReason: payload.freezeReason,
      }));

      toast.success(`Protocol ${newStatus.toUpperCase()} Deployed`);
    } catch (err) {
      toast.error(err.data?.message || "Override Failed");
    }
  };

  const handleBalanceAdjustment = async (e) => {
    e.preventDefault();
    const amount = parseFloat(depositData.amount);
    const finalAmount = mode === "debit" ? -Math.abs(amount) : Math.abs(amount);

    try {
      await adminDeposit({
        userId: selectedUser._id,
        amount: finalAmount,
        description: depositData.description,
        date: depositData.date,
      }).unwrap();

      toast.success(`Ledger Synchronized: ${mode.toUpperCase()} Success`);
      setDepositData({
        amount: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
      });
      setMode(null);

      setSelectedUser((prev) => ({
        ...prev,
        balance: (prev.balance || 0) + finalAmount,
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
          {/* HEADER */}
          <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">
                Client Registry
              </h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">
                Managed Identities: {users?.length || 0}
              </p>
            </div>

            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                placeholder="SEARCH UID / EMAIL / NAME..."
                className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-[11px] font-bold uppercase focus:ring-2 focus:ring-emerald-500 w-64"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* TABLE */}
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
                            <p className="text-xs font-black text-slate-900 uppercase">
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
                        <p className="text-[10px] font-black text-slate-700 uppercase">
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
            {/* LEDGER CONTROL */}
            <section className="space-y-3">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Ledger Control
              </h4>
              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                {!mode ? (
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
                    <input
                      type="number"
                      required
                      placeholder="0.00"
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm font-black outline-none focus:ring-2 focus:ring-emerald-500"
                      value={depositData.amount}
                      onChange={(e) =>
                        setDepositData({
                          ...depositData,
                          amount: e.target.value,
                        })
                      }
                    />
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
                    <button
                      disabled={isProcessing}
                      className={`w-full py-4 rounded-xl font-black text-[10px] uppercase text-white transition-all flex items-center justify-center gap-2 ${mode === "credit" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-slate-900 hover:bg-black"}`}
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

            {/* SECURITY PROTOCOLS */}
            <section className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Security Protocol Override
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {["active", "frozen", "suspended", "restricted"].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStatusUpdate(s)}
                    className={`py-2 px-1 rounded-xl border text-[9px] font-black uppercase transition-all ${
                      selectedUser.status === s
                        ? "bg-slate-900 text-white border-slate-900 shadow-md"
                        : "bg-white text-slate-400 border-slate-100 hover:border-slate-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {selectedUser.status !== "active" && (
                <div className="bg-slate-50 p-4 rounded-2xl space-y-3 border border-slate-100 animate-in fade-in slide-in-from-top-2">
                  <p className="text-[9px] font-black text-slate-500 uppercase mb-2">
                    Block Specific Actions
                  </p>
                  {Object.keys(restrictions).map((key) => (
                    <label
                      key={key}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <span className="text-[10px] font-bold text-slate-600 uppercase group-hover:text-slate-900">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500"
                        checked={restrictions[key]}
                        onChange={(e) =>
                          setRestrictions({
                            ...restrictions,
                            [key]: e.target.checked,
                          })
                        }
                      />
                    </label>
                  ))}
                  <div className="pt-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase block mb-1">
                      Freeze Reason
                    </label>
                    <select
                      value={freezeReason}
                      onChange={(e) => setFreezeReason(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2 px-2 text-[10px] font-bold outline-none"
                    >
                      <option value="suspicious_activity">
                        Suspicious Activity
                      </option>
                      <option value="failed_pin_attempts">
                        Failed PIN Attempts
                      </option>
                      <option value="administrative_hold">
                        Administrative Hold
                      </option>
                      <option value="verification_required">
                        Verification Required
                      </option>
                    </select>
                  </div>
                  <button
                    onClick={() => handleStatusUpdate(selectedUser.status)}
                    className="w-full py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-[9px] font-black uppercase rounded-lg transition-colors"
                  >
                    Update Restrictions
                  </button>
                </div>
              )}
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

// --- HELPERS ---
const StatusBadge = ({ status }) => {
  const styles = {
    active: "bg-emerald-50 text-emerald-600 border-emerald-100",
    frozen: "bg-blue-50 text-blue-600 border-blue-100",
    suspended: "bg-red-50 text-red-600 border-red-100",
    restricted: "bg-amber-50 text-amber-600 border-amber-100",
  };
  return (
    <span
      className={`px-2 py-1 rounded-md text-[9px] font-black uppercase border tracking-tighter ${styles[status] || styles.active}`}
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
