export interface PaymentRow {
  rowId: string;

  seatNo: string;
  studentName: string;

  joiningDate: string;   // yyyy-mm-dd
  dueDate: string;       // yyyy-mm-dd

  monthlyAmount: number;
  mobile: string;

  receivedPayment: number;
  receivedDate?: string;

  balanceAmount: number;
  remark?: string;

  email?: string; 
  status?: string;
  verificationDate?: string;       
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

