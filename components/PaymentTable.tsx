import { PaymentRow } from "@/types";

interface Props {
  payments: PaymentRow[];
  onSendReminder: (payment: PaymentRow) => void;
  onVerifyPayment: (payment: PaymentRow) => void;
}

export function PaymentTable({
  payments,
  onSendReminder,
  onVerifyPayment,
}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700 text-sm rounded-lg shadow-sm">
        <thead className="bg-gray-900 text-cyan-400 sticky top-0">
          <tr>
            <th className="p-3 text-left">Seat No</th>
            <th className="p-3 text-left">Student Name</th>
            <th className="p-3 text-left">Joining Date</th>
            <th className="p-3 text-left">Due Date</th>
            <th className="p-3 text-right">P/M Amount</th>
            <th className="p-3 text-left">Mobile No</th>
            <th className="p-3 text-right">Received Payment</th>
            <th className="p-3 text-left">Received Date</th>
            <th className="p-3 text-right text-red-400">Balance Amt</th>
            <th className="p-3 text-left">Remark</th>
            <th className="p-3 text-center">Actions</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Verification Date</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((p, idx) => (
            <tr
              key={p.rowId}
              className={`border-t border-gray-700 ${
                idx % 2 === 0
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-900 hover:bg-gray-800"
              } transition-colors`}
            >
              <td className="p-3">{p.seatNo}</td>
              <td className="p-3">{p.studentName}</td>
              <td className="p-3">{p.joiningDate}</td>
              <td className="p-3">{p.dueDate}</td>
              <td className="p-3 text-right">₹{p.monthlyAmount}</td>
              <td className="p-3">{p.mobile}</td>
              <td className="p-3 text-right">₹{p.receivedPayment}</td>
              <td className="p-3">{p.receivedDate ?? "-"}</td>
              <td className="p-3 text-right text-red-400">
                ₹{p.balanceAmount}
              </td>
              <td className="p-3">{p.remark ?? "-"}</td>
              <td className="p-3 flex gap-2 justify-center">
                <button
                  onClick={() => onSendReminder(p)}
                  className="px-3 py-1 bg-yellow-600 rounded hover:bg-yellow-500 transition"
                >
                  Reminder
                </button>
                <button
                  onClick={() => onVerifyPayment(p)}
                  disabled={p.status === "Paid"} 
                  className={`px-3 py-1 rounded transition ${p.status === "Paid"? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-500" }`}
                >
                  Verify
                </button>
              </td>
              <td className="p-3">{p.status}</td>
              <td className="p-3">{p.verificationDate ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
