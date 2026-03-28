import React from "react";
import { useGetAdminTransactionsQuery } from "../../src/services/api";
import {
  FileDown,
  Hash,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCcw,
} from "lucide-react";
import { utils, writeFile } from "xlsx";

const Ledger = () => {
  const {
    data: transactions,
    isLoading,
    refetch,
  } = useGetAdminTransactionsQuery();

  const exportToExcel = () => {
    const worksheet = utils.json_to_sheet(transactions);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "SystemLedger");
    writeFile(workbook, `UC_Audit_Log_${Date.now()}.xlsx`);
  };

  if (isLoading)
    return (
      <div className="p-20 text-center animate-pulse font-mono text-slate-400">
        LOADING_SYSTEM_LEDGER...
      </div>
    );

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-1">
            Audit & Compliance
          </h2>
          <h1 className="text-3xl font-black text-slate-900 italic">
            Global System Ledger
          </h1>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => refetch()}
            className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <RefreshCcw size={18} className="text-slate-600" />
          </button>
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all"
          >
            <FileDown size={16} /> Export CSV/XLSX
          </button>
        </div>
      </header>

      <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="p-6 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                Txn Hash
              </th>
              <th className="p-6 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                Timestamp
              </th>
              <th className="p-6 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                Entity / Description
              </th>
              <th className="p-6 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">
                Debit (-)
              </th>
              <th className="p-6 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">
                Credit (+)
              </th>
              <th className="p-6 text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 font-mono text-[11px]">
            {transactions?.map((tx) => (
              <tr
                key={tx._id}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                <td className="p-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Hash size={12} />
                    <span className="text-slate-900 font-bold">{tx.hash}</span>
                  </div>
                </td>
                <td className="p-6 text-slate-500 uppercase">
                  {new Date(tx.createdAt).toLocaleString()}
                </td>
                <td className="p-6">
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-bold uppercase tracking-tighter">
                      {tx.sender?.firstName} {tx.sender?.lastName} ⮕{" "}
                      {tx.recipientName || "INTERNAL"}
                    </span>
                    <span className="text-[9px] text-slate-400 font-sans">
                      {tx.description}
                    </span>
                  </div>
                </td>
                <td className="p-6 text-right">
                  {tx.type === "transfer" || tx.type === "withdrawal" ? (
                    <span className="text-rose-600 font-bold">
                      -${tx.amount.toLocaleString()}
                    </span>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="p-6 text-right">
                  {tx.type === "deposit" || tx.type === "loan_disbursement" ? (
                    <span className="text-emerald-600 font-bold">
                      +${tx.amount.toLocaleString()}
                    </span>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="p-6">
                  <div className="flex justify-center">
                    <StatusTag status={tx.status} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatusTag = ({ status }) => {
  const config = {
    completed: "bg-emerald-50 text-emerald-600 border-emerald-100",
    pending: "bg-amber-50 text-amber-600 border-amber-100",
    failed: "bg-rose-50 text-rose-600 border-rose-100",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full border text-[8px] font-black uppercase tracking-widest ${config[status] || config.pending}`}
    >
      {status}
    </span>
  );
};

export default Ledger;
