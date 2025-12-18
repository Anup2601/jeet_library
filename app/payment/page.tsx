'use client';

import { useState, useEffect } from 'react';
import { MonthSelector } from '@/components/MonthSelector';
import { PaymentTable } from '@/components/PaymentTable';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Toast } from '@/components/Toast';
import type { PaymentRow, ToastMessage } from '@/types';

export default function PaymentAdminPage() {
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [payments, setPayments] = useState<PaymentRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Set default month to current month on mount
  useEffect(() => {
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
    setSelectedMonth(currentMonth);
  }, []);

  // Fetch payments when month changes
  useEffect(() => {
    if (selectedMonth) {
      fetchPayments(selectedMonth);
    }
  }, [selectedMonth]);

  // Fetch payments from API
  const fetchPayments = async (month: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/getPayments?month=${month}`);
      const data = await response.json();
      
      if (data.success) {
        setPayments(data.payments);
      } else {
        showToast('Failed to fetch payments', 'error');
      }
    } catch (error) {
      showToast('Error loading payments', 'error');
      console.error('Fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Send reminder to student
  const handleSendReminder = async (payment: PaymentRow) => {
    try {
      const response = await fetch('/api/sendReminder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payment.studentName,
          email: payment.email,
          mobile: payment.mobile,
          month: selectedMonth,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        showToast(`Reminder sent to ${payment.studentName}`, 'success');
      } else {
        showToast('Failed to send reminder', 'error');
      }
    } catch (error) {
      showToast('Error sending reminder', 'error');
      console.error('Reminder error:', error);
    }
  };

  // Verify payment for student
  const handleVerifyPayment = async (payment: PaymentRow) => {
    try {
      const response = await fetch('/api/verifyPayment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          month: selectedMonth,
          rowId: payment.rowId,
          studentName: payment.studentName,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        showToast(`Payment verified for ${payment.studentName}`, 'success');
        // Refresh data
        fetchPayments(selectedMonth);
      } else {
        showToast('Failed to verify payment', 'error');
      }
    } catch (error) {
      showToast('Error verifying payment', 'error');
      console.error('Verify error:', error);
    }
  };

  // Show toast notification
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-cyan-400">
          Payment Management System
        </h1>
        <p className="text-gray-400">Manage student payments across all months</p>
      </div>

      {/* Month Selector */}
      <div className="max-w-7xl mx-auto mb-6">
        <MonthSelector
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
        />
      </div>

      {/* Loading State */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        /* Payment Table */
        <div className="max-w-7xl mx-auto">
          <PaymentTable
            payments={payments}
            onSendReminder={handleSendReminder}
            onVerifyPayment={handleVerifyPayment}
          />
        </div>
      )}

      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}