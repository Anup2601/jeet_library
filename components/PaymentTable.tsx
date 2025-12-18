'use client';

import { AlertCircle, Send, CheckCircle } from 'lucide-react';
import type { PaymentRow } from '@/types';

interface PaymentTableProps {
  payments: PaymentRow[];
  onSendReminder: (payment: PaymentRow) => void;
  onVerifyPayment: (payment: PaymentRow) => void;
}

export function PaymentTable({ 
  payments, 
  onSendReminder, 
  onVerifyPayment 
}: PaymentTableProps) {
  if (payments.length === 0) {
    return (
      <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-12 text-center">
        <AlertCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400 text-lg">No payment records found for this month</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800 border-b-2 border-cyan-400">
              <th className="px-4 py-4 text-left text-sm font-semibold text-cyan-400">
                Student Name
              </th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-cyan-400">
                Mobile No
              </th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-cyan-400">
                Email ID
              </th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-cyan-400">
                Course / Batch
              </th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-cyan-400">
                Payment Status
              </th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-cyan-400">
                Last Payment Date
              </th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-cyan-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {payments.map((payment) => (
              <tr 
                key={payment.rowId} 
                className="hover:bg-gray-800 transition-colors"
              >
                <td className="px-4 py-4 text-white font-medium">
                  {payment.studentName}
                </td>
                <td className="px-4 py-4 text-gray-300">
                  {payment.mobile}
                </td>
                <td className="px-4 py-4 text-gray-300 text-sm">
                  {payment.email}
                </td>
                <td className="px-4 py-4 text-gray-300">
                  {payment.course}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      payment.paymentStatus === 'Paid'
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {payment.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-300">
                  {payment.lastPaymentDate || 'N/A'}
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    {/* Send Reminder Button */}
                    <button
                      onClick={() => onSendReminder(payment)}
                      className="flex items-center gap-2 px-3 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors text-sm font-medium"
                      disabled={payment.paymentStatus === 'Paid'}
                    >
                      <Send className="w-4 h-4" />
                      <span className="hidden sm:inline">Remind</span>
                    </button>

                    {/* Verify Payment Button */}
                    {payment.paymentStatus === 'Pending' && (
                      <button
                        onClick={() => onVerifyPayment(payment)}
                        className="flex items-center gap-2 px-3 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors text-sm font-medium"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span className="hidden sm:inline">Verify</span>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="bg-gray-800 px-4 py-3 border-t-2 border-cyan-400">
        <p className="text-sm text-gray-400">
          Total Records: <span className="text-cyan-400 font-semibold">{payments.length}</span>
        </p>
      </div>
    </div>
  );
}