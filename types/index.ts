export interface PaymentRow {
  rowId: number;
  studentName: string;
  mobile: string;
  email: string;
  course: string;
  paymentStatus: 'Paid' | 'Pending';
  lastPaymentDate: string;
}

export interface StudentDetail {
  name: string;
  email: string;
  mobile: string;
  month: string;
}

export interface ToastMessage {
  message: string;
  type: 'success' | 'error';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

