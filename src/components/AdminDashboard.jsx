import React, { useState } from "react";
import {
  useGetAdminUsersQuery,
  useAdminDepositMutation,
  useUpdateUserStatusMutation,
} from "../services/api";
import {
  Search,
  PlusCircle,
  ArrowUpRight,
  DollarSign,
  X,
  Loader2,
  ShieldCheck,
  FilterX,
  UserCheck,
  ShieldAlert,
} from "lucide-react";

const AdminDashboard = () => {
  // 1. RTK QUERY HOOK
  // The backend now sends a flat array: [{ firstName, balance, role, ... }]
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useGetAdminUsersQuery();

  const [performDeposit, { isLoading: isDepositing }] =
    useAdminDepositMutation();
  const [updateStatus] = useUpdateUserStatusMutation();

  // 2. LOCAL STATE
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [depositData, setDepositData] = useState({
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  // 3. FILTER LOGIC
  // Handles searching through both Users and Admins safely
  const filteredUsers = users.filter((u) => {
    const name = `${u.firstName || ""} ${u.lastName || ""}`.toLowerCase();
    const id = u.customerId?.toLowerCase() || "";
    const search = searchQuery.toLowerCase();
    return name.includes(search) || id.includes(search);
  });

  const handleDepositSubmit = async (e) => {
    e.preventDefault();
    try {
      await performDeposit({
        userId: selectedUser._id,
        amount: depositData.amount,
        description: depositData.description,
        createdAt: depositData.date,
      }).unwrap();

      setIsPanelOpen(false);
      setDepositData({
        amount: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
      });
    } catch (err) {
      alert(err?.data?.message || "Deposit Failed");
    }
  };

  const handleToggleStatus = async (user) => {
    const newStatus = user.status === "active" ? "blocked" : "active";
    if (window.confirm(`Set ${user.firstName} to ${newStatus}?`)) {
      try {
        await updateStatus({ id: user._id, status: newStatus }).unwrap();
      } catch (err) {
        alert("Failed to update status");
      }
    }
  };

  // LOADING STATE
  if (isLoading)
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
        <Loader2 className="animate-spin text-emerald-500" size={40} />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Syncing Ledger Data...
        </p>
      </div>
    );

  // ERROR STATE
  if (isError)
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
        <p className="text-red-500 font-bold">
          Error: {error?.data?.message || "Server Disconnected"}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="text-xs underline font-bold uppercase tracking-widest text-slate-400"
        >
          Retry Connection
        </button>
      </div>
    );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50 min-h-screen animate-in fade-in duration-700">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-slate-900 italic">
            Central Command
          </h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">
            Admin Access • {users.length} Total Accounts Managed
          </p>
        </div>
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 flex items-center px-4 gap-3 w-full md:w-auto">
          <Search size={18} className="text-slate-300" />
          <input
            type="text"
            placeholder="Search by ID or Name..."
            className="outline-none text-xs font-bold w-full md:w-64 bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* USER GRID */}
      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-[2.5rem] p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
            >
              {/* Top Row: Initials and Status */}
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-black ${user.role === "admin" ? "bg-indigo-600" : "bg-slate-900"}`}
                >
                  {user.firstName?.[0]}
                  {user.lastName?.[0]}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-[8px] font-black uppercase px-2 py-1 rounded-md border ${user.role === "admin" ? "border-indigo-200 text-indigo-600" : "border-slate-200 text-slate-500"}`}
                  >
                    {user.role}
                  </span>
                  <button
                    onClick={() => handleToggleStatus(user)}
                    className={`text-[9px] font-black uppercase px-4 py-1.5 rounded-full transition-colors ${
                      user.status === "active"
                        ? "bg-emerald-50 text-emerald-600 hover:bg-red-50 hover:text-red-600"
                        : "bg-red-50 text-red-600 hover:bg-emerald-50 hover:text-emerald-600"
                    }`}
                  >
                    {user.status}
                  </button>
                </div>
              </div>

              {/* User Info */}
              <h3 className="font-black text-slate-900 text-lg flex items-center gap-2">
                {user.firstName} {user.lastName}
                {user.role === "admin" && (
                  <ShieldAlert size={16} className="text-indigo-600" />
                )}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono tracking-widest">
                {user.customerId || "NO-CUSTOMER-ID"}
              </p>

              {/* Balance Section */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                    Available Balance
                  </p>
                  <p className="text-xl font-black text-slate-900">
                    $
                    {Number(user.balance || 0).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setIsPanelOpen(true);
                  }}
                  className="p-4 bg-emerald-500 text-white rounded-2xl hover:bg-slate-900 transition-all shadow-lg shadow-emerald-100 hover:shadow-slate-200 active:scale-95"
                >
                  <PlusCircle size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-64 flex flex-col items-center justify-center text-slate-300 bg-white rounded-[2.5rem] border border-dashed border-slate-200">
          <FilterX size={48} className="mb-4 opacity-20" />
          <p className="font-black uppercase text-[10px] tracking-widest">
            No matching records found
          </p>
        </div>
      )}

      {/* DEPOSIT SLIDE-OVER */}
      {isPanelOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsPanelOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-10 animate-in slide-in-from-right duration-500">
            <button
              onClick={() => setIsPanelOpen(false)}
              className="absolute top-8 right-8 text-slate-300 hover:text-slate-900"
            >
              <X />
            </button>

            <div className="mb-12">
              <ShieldCheck className="text-emerald-500 mb-6" size={48} />
              <h2 className="text-3xl font-black tracking-tighter text-slate-900">
                Capital Injection
              </h2>
              <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">
                Target Account:{" "}
                <span className="text-slate-900">
                  {selectedUser?.firstName} {selectedUser?.lastName}
                </span>
              </p>
            </div>

            <form onSubmit={handleDepositSubmit} className="space-y-8">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Amount to Credit (USD)
                </label>
                <div className="relative">
                  <DollarSign
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                    size={20}
                  />
                  <input
                    type="number"
                    required
                    className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-14 pr-6 font-black text-xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    placeholder="0.00"
                    value={depositData.amount}
                    onChange={(e) =>
                      setDepositData({ ...depositData, amount: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Narrative
                </label>
                <textarea
                  required
                  rows="3"
                  className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                  placeholder="Official reason for credit..."
                  value={depositData.description}
                  onChange={(e) =>
                    setDepositData({
                      ...depositData,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  Value Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500"
                  value={depositData.date}
                  onChange={(e) =>
                    setDepositData({ ...depositData, date: e.target.value })
                  }
                />
              </div>

              <button
                disabled={isDepositing}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-emerald-600 disabled:bg-slate-300 transition-all"
              >
                {isDepositing ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    Authorize Credit <ArrowUpRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
