"use client"
import React, { useState } from 'react';
import { Download, LogOut, Lock, AlertCircle, Search, Filter, X } from 'lucide-react';

// Types
interface StudentData {
  'Student Name': string;
  "Father's Name": string;
  'Date of Birth': string;
  'Gender': string;
  'Nationality': string;
  'Address': string;
  'Mobile No': string;
  'Email ID': string;
  'Joining Date': string;
  'Advance Amount': string;
  'Payment Mode': string;
  'Time Duration': string;
  'Seat No': string;
  'Medical Condition': string;
  'Medical Details': string;
  'How Did You Hear About Us': string;
  'Photo': string;
  'ID Proof': string;
}

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY;


// Auth Gate Component
function AuthGate({ onAuthenticate }: { onAuthenticate: () => void }) {
  const [adminKey, setAdminKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    setLoading(true);
    setError(null);

    if (!adminKey.trim()) {
      setError("Please enter the Admin Access Key");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      if (adminKey === ADMIN_KEY) {
        onAuthenticate();
      } else {
        setError("Invalid Admin Key. Access Denied.");
      }
      setLoading(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 mt-20">
      <div className="w-full max-w-md">
        <div className="border border-slate-200 rounded-2xl shadow-2xl p-8 sm:p-12">

          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Lock className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
            Admin Access Only
          </h1>
          <p className="text-center text-white text-sm mb-8">
            Enter the Admin Key to unlock panel access
          </p>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Admin Access Key
              </label>
              <input
                type="password"
                placeholder="Enter Admin Key"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={loading}
                className="w-full h-12 px-4 text-base border border-slate-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                disabled:bg-slate-100 text-white"
                autoFocus
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !adminKey.trim()}
              className="w-full h-12 text-base font-medium bg-cyan-400 text-black rounded-lg 
              hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                "Access Panel"
              )}
            </button>
          </div>

        </div>

        <p className="text-center text-xs text-white mt-6">
          Secure • Encrypted • Protected
        </p>
      </div>
    </div>
  );
}



// Data Table Component
function DataTable({ data, onViewDetails }: { data: StudentData[]; onViewDetails: (student: StudentData) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterMedical, setFilterMedical] = useState('');

  const filteredData = data.filter(student => {
    const matchesSearch = 
      student['Student Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
      student['Mobile No'].includes(searchTerm) ||
      student['Email ID'].toLowerCase().includes(searchTerm.toLowerCase()) ||
      student['Seat No'].toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGender = !filterGender || student['Gender'] === filterGender;
    const matchesMedical = !filterMedical || student['Medical Condition'] === filterMedical;

    return matchesSearch && matchesGender && matchesMedical;
  });

  return (
    <div className="p-4 sm:p-6 ">
      {/* Filters */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, mobile, email, or seat number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Filters:</span>
          </div>

          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
          >
            <option value="" className='bg-black'>All Genders</option>
            <option value="Male" className='bg-black'>Male</option>
            <option value="Female" className='bg-black'>Female</option>
            <option value="Other" className='bg-black'>Other</option>
          </select>

          <select
            value={filterMedical}
            onChange={(e) => setFilterMedical(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
          >
            <option value="" className='bg-black'>All Medical Conditions</option>
            <option value="Yes" className='bg-black'>Has Medical Condition</option>
            <option value="No" className='bg-black'>No Medical Condition</option>
          </select>

          {(searchTerm || filterGender || filterMedical) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterGender('');
                setFilterMedical('');
              }}
              className="px-4 py-2 text-sm text-cyan-400 hover:bg-blue-50 hover:text-black rounded-lg transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          )}
        </div>

        <p className="text-sm text-white">
          Showing <strong>{filteredData.length}</strong> of <strong>{data.length}</strong> students
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-black border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-white">Seat No</th>
              <th className="px-4 py-3 text-left font-semibold text-white">Student Name</th>
              <th className="px-4 py-3 text-left font-semibold text-white">Father&apos;s</th>
              <th className="px-4 py-3 text-left font-semibold text-white">Gender</th>
              <th className="px-4 py-3 text-left font-semibold text-white">Mobile No</th>
              <th className="px-4 py-3 text-left font-semibold text-white">Email ID</th>
              <th className="px-4 py-3 text-left font-semibold text-white">Joining Date</th>
              <th className="px-4 py-3 text-left font-semibold text-white">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-white">
                  No students found matching your criteria
                </td>
              </tr>
            ) : (
              filteredData.map((student, index) => (
                <tr key={index} className="hover:bg-black transition-colors">
                  <td className="px-4 py-3 font-medium text-white">{student['Seat No']}</td>
                  <td className="px-4 py-3 text-white">{student['Student Name']}</td>
                  <td className="px-4 py-3 text-white">{student["Father's Name"]}</td>
                  <td className="px-4 py-3 text-white">{student['Gender']}</td>
                  <td className="px-4 py-3 text-white">{student['Mobile No']}</td>
                  <td className="px-4 py-3 text-white text-xs">{student['Email ID']}</td>
                  <td className="px-4 py-3 text-white">{student['Joining Date']}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => onViewDetails(student)}
                      className="px-3 py-1.5 text-xs font-medium text-cyan-400 hover:bg-white hover:text-black rounded-md transition-colors"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Student Details Modal
function StudentDetailsModal({ student, onClose }: { student: StudentData; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-black rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-black border-b border-slate-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Student Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-slate-200">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-white uppercase">Student Name</label>
                <p className="text-sm text-white mt-1">{student['Student Name']}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Father&apos;s Name</label>
                <p className="text-sm text-white mt-1">{student["Father's Name"]}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Date of Birth</label>
                <p className="text-sm text-white mt-1">{student['Date of Birth']}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Gender</label>
                <p className="text-sm text-white mt-1">{student['Gender']}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Nationality</label>
                <p className="text-sm text-white mt-1">{student['Nationality']}</p>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-white uppercase">Address</label>
                <p className="text-sm text-white mt-1">{student['Address']}</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-slate-200">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-white uppercase">Mobile No</label>
                <p className="text-sm text-white mt-1">{student['Mobile No']}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Email ID</label>
                <p className="text-sm text-white mt-1">{student['Email ID']}</p>
              </div>
            </div>
          </div>

          {/* Enrollment Details */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-slate-200">
              Enrollment Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-white uppercase">Joining Date</label>
                <p className="text-sm text-white mt-1">{student['Joining Date']}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Seat No</label>
                <p className="text-sm text-white mt-1">{student['Seat No']}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Time Duration</label>
                <p className="text-sm text-white mt-1">{student['Time Duration']}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Advance Amount</label>
                <p className="text-sm text-white mt-1">{student['Advance Amount']}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Payment Mode</label>
                <p className="text-sm text-white mt-1">{student['Payment Mode']}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">Referral Source</label>
                <p className="text-sm text-white mt-1">{student['How Did You Hear About Us']}</p>
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-slate-200">
              Medical Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-white uppercase">Medical Condition</label>
                <p className="text-sm text-white mt-1">{student['Medical Condition']}</p>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-white uppercase">Medical Details</label>
                <p className="text-sm text-white mt-1">{student['Medical Details'] || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 pb-2 border-b border-slate-200">
              Documents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-white uppercase">Photo</label>
                <p className="text-sm text-cyan-400 mt-1 hover:underline cursor-pointer">
                  {student['Photo'] ? 'View Photo' : 'Not uploaded'}
                </p>
              </div>
              <div>
                <label className="text-xs font-medium text-white uppercase">ID Proof</label>
                <p className="text-sm text-cyan-400 mt-1 hover:underline cursor-pointer">
                  {student['ID Proof'] ? 'View ID Proof' : 'Not uploaded'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function StudentDataViewer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<StudentData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentData | null>(null);


  const handleAuthenticate = async () => {
    setIsLoading(true);

    try {
      // In production, fetch from Google Sheets API:
      // URL: https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}
      
      const mockData: StudentData[] = [
        {
          'Student Name': 'Rahul Kumar',
          "Father's Name": 'Rajesh Kumar',
          'Date of Birth': '15/05/2000',
          'Gender': 'Male',
          'Nationality': 'Indian',
          'Address': '123, MG Road, Delhi',
          'Mobile No': '+91 9876543210',
          'Email ID': 'rahul.kumar@email.com',
          'Joining Date': '01/01/2024',
          'Advance Amount': '₹5,000',
          'Payment Mode': 'UPI',
          'Time Duration': '6 months',
          'Seat No': 'A-101',
          'Medical Condition': 'No',
          'Medical Details': '',
          'How Did You Hear About Us': 'Social Media',
          'Photo': 'photo_link',
          'ID Proof': 'id_link'
        },
        {
          'Student Name': 'Priya Sharma',
          "Father's Name": 'Suresh Sharma',
          'Date of Birth': '22/08/1999',
          'Gender': 'Female',
          'Nationality': 'Indian',
          'Address': '456, Park Street, Mumbai',
          'Mobile No': '+91 9876543211',
          'Email ID': 'priya.sharma@email.com',
          'Joining Date': '15/01/2024',
          'Advance Amount': '₹7,000',
          'Payment Mode': 'Card',
          'Time Duration': '12 months',
          'Seat No': 'B-205',
          'Medical Condition': 'Yes',
          'Medical Details': 'Asthma - requires inhaler',
          'How Did You Hear About Us': 'Friend Referral',
          'Photo': 'photo_link',
          'ID Proof': 'id_link'
        },
        {
          'Student Name': 'Amit Patel',
          "Father's Name": 'Ramesh Patel',
          'Date of Birth': '10/03/2001',
          'Gender': 'Male',
          'Nationality': 'Indian',
          'Address': '789, Gandhi Nagar, Ahmedabad',
          'Mobile No': '+91 9876543212',
          'Email ID': 'amit.patel@email.com',
          'Joining Date': '20/02/2024',
          'Advance Amount': '₹6,000',
          'Payment Mode': 'Cash',
          'Time Duration': '9 months',
          'Seat No': 'C-150',
          'Medical Condition': 'No',
          'Medical Details': '',
          'How Did You Hear About Us': 'Google Search',
          'Photo': 'photo_link',
          'ID Proof': 'id_link'
        },
        {
          'Student Name': 'Sneha Reddy',
          "Father's Name": 'Krishna Reddy',
          'Date of Birth': '05/12/1998',
          'Gender': 'Female',
          'Nationality': 'Indian',
          'Address': '321, Jubilee Hills, Hyderabad',
          'Mobile No': '+91 9876543213',
          'Email ID': 'sneha.reddy@email.com',
          'Joining Date': '10/03/2024',
          'Advance Amount': '₹8,000',
          'Payment Mode': 'Net Banking',
          'Time Duration': '12 months',
          'Seat No': 'A-102',
          'Medical Condition': 'Yes',
          'Medical Details': 'Diabetes - Type 1',
          'How Did You Hear About Us': 'Walk-in',
          'Photo': 'photo_link',
          'ID Proof': 'id_link'
        },
        {
          'Student Name': 'Vikram Singh',
          "Father's Name": 'Mahendra Singh',
          'Date of Birth': '18/07/2000',
          'Gender': 'Male',
          'Nationality': 'Indian',
          'Address': '654, Ashok Nagar, Jaipur',
          'Mobile No': '+91 9876543214',
          'Email ID': 'vikram.singh@email.com',
          'Joining Date': '05/04/2024',
          'Advance Amount': '₹5,500',
          'Payment Mode': 'UPI',
          'Time Duration': '6 months',
          'Seat No': 'D-301',
          'Medical Condition': 'No',
          'Medical Details': '',
          'How Did You Hear About Us': 'Instagram',
          'Photo': 'photo_link',
          'ID Proof': 'id_link'
        }
      ];

      setTimeout(() => {
        setData(mockData);
        setIsAuthenticated(true);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const downloadCSV = () => {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map((row) =>
        headers
          .map((header) => {
            const value = row[header as keyof StudentData] || '';
            return `"${String(value).replace(/"/g, '""')}"`;
          })
          .join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.href = url;
    link.download = `student_data_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setData([]);
  };

  if (!isAuthenticated) {
    return <AuthGate onAuthenticate={handleAuthenticate} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white">Loading student data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-black mt-20">
      {/* Header */}
      <header className="border-b border-slate-200 bg-black sticky top-0 z-10 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-l sm:text-xl font-bold text-white">
                Student Records
              </h1>
              <p className="text-sm text-white mt-1">
                {data.length} students enrolled
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={downloadCSV}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-cyan-400 border border-slate-300 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download CSV</span>
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white hover:bg-slate-100 hover:text-black rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Data Table */}
      <div className="flex-1 overflow-auto">
        <DataTable data={data} onViewDetails={setSelectedStudent} />
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <StudentDetailsModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}