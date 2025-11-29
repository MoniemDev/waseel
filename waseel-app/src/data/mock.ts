// ============================================
// WASEEL - Demo/Mock Data for UI Testing
// ============================================

// ============================================
// DEMO ACCOUNTS
// ============================================

export const demoAccounts = {
  // Regular User (Donor)
  donor: {
    phone: "0912345678",
    password: "donor123",
    role: "donor" as const,
  },
  // Regular User (Recipient)
  recipient: {
    phone: "0987654321",
    password: "recipient123",
    role: "recipient" as const,
  },
  // Hospital Account
  hospital: {
    phone: "0911111111",
    password: "hospital123",
    role: "hospital" as const,
  },
  // Admin Account
  admin: {
    phone: "0900000000",
    password: "admin123",
    role: "admin" as const,
  },
};

// ============================================
// BLOOD TYPES
// ============================================

export type BloodType = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

export const bloodTypes: BloodType[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodCompatibility: Record<BloodType, BloodType[]> = {
  "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
  "O+": ["O+", "A+", "B+", "AB+"],
  "A-": ["A-", "A+", "AB-", "AB+"],
  "A+": ["A+", "AB+"],
  "B-": ["B-", "B+", "AB-", "AB+"],
  "B+": ["B+", "AB+"],
  "AB-": ["AB-", "AB+"],
  "AB+": ["AB+"],
};

// ============================================
// CITIES
// ============================================

export const cities = [
  { id: "khartoum", name: "الخرطوم", nameEn: "Khartoum" },
  { id: "omdurman", name: "أم درمان", nameEn: "Omdurman" },
  { id: "bahri", name: "بحري", nameEn: "Bahri" },
  { id: "portsudan", name: "بورتسودان", nameEn: "Port Sudan" },
  { id: "kassala", name: "كسلا", nameEn: "Kassala" },
  { id: "madani", name: "ود مدني", nameEn: "Wad Madani" },
  { id: "nyala", name: "نيالا", nameEn: "Nyala" },
  { id: "elfasher", name: "الفاشر", nameEn: "El Fasher" },
  { id: "atbara", name: "عطبرة", nameEn: "Atbara" },
  { id: "gedaref", name: "القضارف", nameEn: "Gedaref" },
];

// ============================================
// USERS
// ============================================

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  bloodType: BloodType;
  city: string;
  role: "donor" | "recipient" | "hospital" | "admin";
  status: "active" | "inactive" | "suspended";
  isAvailable: boolean;
  lastDonation?: string;
  totalDonations: number;
  points: number;
  joinDate: string;
  avatar?: string;
}

export const users: User[] = [
  {
    id: "u1",
    name: "أحمد محمد علي",
    phone: "0912345678",
    email: "ahmed@example.com",
    bloodType: "A+",
    city: "khartoum",
    role: "donor",
    status: "active",
    isAvailable: true,
    lastDonation: "2024-08-15",
    totalDonations: 5,
    points: 150,
    joinDate: "2024-01-15",
  },
  {
    id: "u2",
    name: "فاطمة أحمد حسن",
    phone: "0987654321",
    bloodType: "O+",
    city: "khartoum",
    role: "recipient",
    status: "active",
    isAvailable: false,
    totalDonations: 0,
    points: 20,
    joinDate: "2024-02-20",
  },
  {
    id: "u3",
    name: "محمد إبراهيم عمر",
    phone: "0923456789",
    bloodType: "B+",
    city: "omdurman",
    role: "donor",
    status: "active",
    isAvailable: true,
    lastDonation: "2024-09-01",
    totalDonations: 3,
    points: 90,
    joinDate: "2024-03-10",
  },
  {
    id: "u4",
    name: "سارة عبدالله محمد",
    phone: "0934567890",
    bloodType: "AB+",
    city: "bahri",
    role: "donor",
    status: "active",
    isAvailable: true,
    lastDonation: "2024-07-20",
    totalDonations: 7,
    points: 210,
    joinDate: "2023-11-05",
  },
  {
    id: "u5",
    name: "عمر حسن أحمد",
    phone: "0945678901",
    bloodType: "O-",
    city: "portsudan",
    role: "donor",
    status: "inactive",
    isAvailable: false,
    lastDonation: "2024-03-15",
    totalDonations: 2,
    points: 60,
    joinDate: "2024-01-20",
  },
  {
    id: "u6",
    name: "نورا محمد علي",
    phone: "0956789012",
    bloodType: "A-",
    city: "khartoum",
    role: "donor",
    status: "active",
    isAvailable: false,
    lastDonation: "2024-10-01",
    totalDonations: 4,
    points: 120,
    joinDate: "2024-02-15",
  },
  {
    id: "u7",
    name: "خالد عثمان محمد",
    phone: "0967890123",
    bloodType: "B-",
    city: "kassala",
    role: "donor",
    status: "suspended",
    isAvailable: false,
    totalDonations: 1,
    points: 30,
    joinDate: "2024-04-01",
  },
  {
    id: "u8",
    name: "آمنة يوسف إبراهيم",
    phone: "0978901234",
    bloodType: "AB-",
    city: "madani",
    role: "recipient",
    status: "active",
    isAvailable: false,
    totalDonations: 0,
    points: 10,
    joinDate: "2024-05-12",
  },
];

// ============================================
// HOSPITALS
// ============================================

export interface Hospital {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email?: string;
  status: "active" | "inactive" | "pending";
  totalRequests: number;
  fulfilledRequests: number;
  joinDate: string;
}

export const hospitals: Hospital[] = [
  {
    id: "h1",
    name: "مستشفى الخرطوم التعليمي",
    city: "khartoum",
    address: "شارع النيل، الخرطوم",
    phone: "0911111111",
    email: "khartoum.hospital@example.com",
    status: "active",
    totalRequests: 156,
    fulfilledRequests: 132,
    joinDate: "2023-06-01",
  },
  {
    id: "h2",
    name: "مستشفى سوبا الجامعي",
    city: "khartoum",
    address: "سوبا، الخرطوم",
    phone: "0911111112",
    status: "active",
    totalRequests: 89,
    fulfilledRequests: 78,
    joinDate: "2023-07-15",
  },
  {
    id: "h3",
    name: "مستشفى أم درمان",
    city: "omdurman",
    address: "وسط أم درمان",
    phone: "0911111113",
    status: "active",
    totalRequests: 67,
    fulfilledRequests: 54,
    joinDate: "2023-08-20",
  },
  {
    id: "h4",
    name: "مستشفى بحري",
    city: "bahri",
    address: "شارع المك نمر، بحري",
    phone: "0911111114",
    status: "active",
    totalRequests: 45,
    fulfilledRequests: 38,
    joinDate: "2023-09-10",
  },
  {
    id: "h5",
    name: "مستشفى بورتسودان",
    city: "portsudan",
    address: "وسط بورتسودان",
    phone: "0911111115",
    status: "active",
    totalRequests: 34,
    fulfilledRequests: 28,
    joinDate: "2023-10-05",
  },
  {
    id: "h6",
    name: "مستشفى الشرطة",
    city: "khartoum",
    address: "الرياض، الخرطوم",
    phone: "0911111116",
    status: "pending",
    totalRequests: 0,
    fulfilledRequests: 0,
    joinDate: "2024-11-01",
  },
];

// ============================================
// BLOOD REQUESTS
// ============================================

export type UrgencyLevel = "عاجل" | "متوسط" | "عادي";
export type RequestStatus = "open" | "in_progress" | "fulfilled" | "cancelled";

export interface BloodRequest {
  id: string;
  bloodType: BloodType;
  unitsNeeded: number;
  unitsFulfilled: number;
  urgency: UrgencyLevel;
  status: RequestStatus;
  hospitalId: string;
  hospitalName: string;
  city: string;
  requesterId: string;
  requesterName: string;
  requesterPhone: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export const bloodRequests: BloodRequest[] = [
  {
    id: "r1",
    bloodType: "O+",
    unitsNeeded: 3,
    unitsFulfilled: 1,
    urgency: "عاجل",
    status: "open",
    hospitalId: "h1",
    hospitalName: "مستشفى الخرطوم التعليمي",
    city: "khartoum",
    requesterId: "u2",
    requesterName: "فاطمة أحمد",
    requesterPhone: "0987654321",
    notes: "الحالة حرجة وتحتاج نقل دم عاجل",
    createdAt: "2024-11-29T10:30:00Z",
    updatedAt: "2024-11-29T10:30:00Z",
  },
  {
    id: "r2",
    bloodType: "A-",
    unitsNeeded: 2,
    unitsFulfilled: 0,
    urgency: "متوسط",
    status: "open",
    hospitalId: "h3",
    hospitalName: "مستشفى أم درمان",
    city: "omdurman",
    requesterId: "u8",
    requesterName: "آمنة يوسف",
    requesterPhone: "0978901234",
    createdAt: "2024-11-29T09:15:00Z",
    updatedAt: "2024-11-29T09:15:00Z",
  },
  {
    id: "r3",
    bloodType: "B+",
    unitsNeeded: 1,
    unitsFulfilled: 0,
    urgency: "عادي",
    status: "open",
    hospitalId: "h4",
    hospitalName: "مستشفى بحري",
    city: "bahri",
    requesterId: "u2",
    requesterName: "فاطمة أحمد",
    requesterPhone: "0987654321",
    createdAt: "2024-11-29T08:00:00Z",
    updatedAt: "2024-11-29T08:00:00Z",
  },
  {
    id: "r4",
    bloodType: "AB+",
    unitsNeeded: 4,
    unitsFulfilled: 2,
    urgency: "عاجل",
    status: "in_progress",
    hospitalId: "h2",
    hospitalName: "مستشفى سوبا الجامعي",
    city: "khartoum",
    requesterId: "u8",
    requesterName: "آمنة يوسف",
    requesterPhone: "0978901234",
    notes: "عملية جراحية مجدولة",
    createdAt: "2024-11-28T14:00:00Z",
    updatedAt: "2024-11-29T06:00:00Z",
  },
  {
    id: "r5",
    bloodType: "O-",
    unitsNeeded: 2,
    unitsFulfilled: 2,
    urgency: "عاجل",
    status: "fulfilled",
    hospitalId: "h5",
    hospitalName: "مستشفى بورتسودان",
    city: "portsudan",
    requesterId: "u2",
    requesterName: "فاطمة أحمد",
    requesterPhone: "0987654321",
    createdAt: "2024-11-27T10:00:00Z",
    updatedAt: "2024-11-27T18:00:00Z",
  },
];

// ============================================
// NOTIFICATIONS
// ============================================

export type NotificationType = "request" | "match" | "donation" | "system";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  bloodType?: BloodType;
  relatedId?: string;
  isRead: boolean;
  createdAt: string;
}

export const notifications: Notification[] = [
  {
    id: "n1",
    type: "request",
    title: "طلب دم عاجل",
    message: "مطلوب 3 وحدات O+ في مستشفى الخرطوم التعليمي",
    bloodType: "O+",
    relatedId: "r1",
    isRead: false,
    createdAt: "2024-11-29T10:30:00Z",
  },
  {
    id: "n2",
    type: "match",
    title: "تم قبول تبرعك",
    message: "شكراً لك! تم تأكيد تبرعك لفاطمة أحمد",
    relatedId: "r1",
    isRead: false,
    createdAt: "2024-11-29T09:00:00Z",
  },
  {
    id: "n3",
    type: "request",
    title: "طلب دم جديد",
    message: "مطلوب وحدتين A- في مستشفى أم درمان",
    bloodType: "A-",
    relatedId: "r2",
    isRead: true,
    createdAt: "2024-11-29T06:00:00Z",
  },
  {
    id: "n4",
    type: "system",
    title: "تحديث الملف الشخصي",
    message: "يرجى تحديث معلومات التواصل الخاصة بك",
    isRead: true,
    createdAt: "2024-11-28T12:00:00Z",
  },
  {
    id: "n5",
    type: "donation",
    title: "شكراً لتبرعك",
    message: "لقد ساعدت في إنقاذ حياة! حصلت على 50 نقطة",
    isRead: true,
    createdAt: "2024-11-26T15:00:00Z",
  },
];

// ============================================
// DONATION HISTORY
// ============================================

export interface Donation {
  id: string;
  donorId: string;
  donorName: string;
  recipientId: string;
  recipientName: string;
  bloodType: BloodType;
  hospitalId: string;
  hospitalName: string;
  requestId: string;
  status: "completed" | "cancelled" | "pending";
  points: number;
  date: string;
}

export const donations: Donation[] = [
  {
    id: "d1",
    donorId: "u1",
    donorName: "أحمد محمد علي",
    recipientId: "u2",
    recipientName: "فاطمة أحمد",
    bloodType: "A+",
    hospitalId: "h1",
    hospitalName: "مستشفى الخرطوم التعليمي",
    requestId: "r5",
    status: "completed",
    points: 50,
    date: "2024-11-15",
  },
  {
    id: "d2",
    donorId: "u1",
    donorName: "أحمد محمد علي",
    recipientId: "u8",
    recipientName: "آمنة يوسف",
    bloodType: "A+",
    hospitalId: "h2",
    hospitalName: "مستشفى سوبا الجامعي",
    requestId: "r4",
    status: "completed",
    points: 50,
    date: "2024-10-20",
  },
  {
    id: "d3",
    donorId: "u1",
    donorName: "أحمد محمد علي",
    recipientId: "u2",
    recipientName: "فاطمة أحمد",
    bloodType: "A+",
    hospitalId: "h3",
    hospitalName: "مستشفى أم درمان",
    requestId: "r3",
    status: "completed",
    points: 50,
    date: "2024-09-05",
  },
  {
    id: "d4",
    donorId: "u1",
    donorName: "أحمد محمد علي",
    recipientId: "u8",
    recipientName: "آمنة يوسف",
    bloodType: "A+",
    hospitalId: "h4",
    hospitalName: "مستشفى بحري",
    requestId: "r2",
    status: "cancelled",
    points: 0,
    date: "2024-08-10",
  },
];

// ============================================
// REWARDS
// ============================================

export interface Reward {
  id: string;
  name: string;
  description: string;
  points: number;
  icon: string;
  category: "health" | "food" | "telecom" | "other";
  isAvailable: boolean;
}

export const rewards: Reward[] = [
  {
    id: "rw1",
    name: "خصم 10% في صيدلية الشفاء",
    description: "خصم على جميع الأدوية والمستلزمات الطبية",
    points: 100,
    icon: "💊",
    category: "health",
    isAvailable: true,
  },
  {
    id: "rw2",
    name: "فحص طبي مجاني",
    description: "فحص طبي شامل في أي مستشفى شريك",
    points: 200,
    icon: "🩺",
    category: "health",
    isAvailable: true,
  },
  {
    id: "rw3",
    name: "قسيمة مطعم",
    description: "وجبة مجانية في مطاعم مختارة",
    points: 150,
    icon: "🍽️",
    category: "food",
    isAvailable: true,
  },
  {
    id: "rw4",
    name: "شحن رصيد 50 جنيه",
    description: "رصيد هاتف لأي شبكة",
    points: 250,
    icon: "📱",
    category: "telecom",
    isAvailable: true,
  },
  {
    id: "rw5",
    name: "تذكرة سينما",
    description: "تذكرة مجانية لأي فيلم",
    points: 120,
    icon: "🎬",
    category: "other",
    isAvailable: false,
  },
];

// ============================================
// BLOOD CENTERS
// ============================================

export interface BloodCenter {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  workingHours: string;
  distance?: string;
}

export const bloodCenters: BloodCenter[] = [
  {
    id: "bc1",
    name: "بنك الدم المركزي",
    address: "شارع النيل، الخرطوم",
    city: "khartoum",
    phone: "0183123456",
    workingHours: "8:00 ص - 8:00 م",
    distance: "1.2 كم",
  },
  {
    id: "bc2",
    name: "مركز التبرع بالدم - المقرن",
    address: "المقرن، الخرطوم",
    city: "khartoum",
    phone: "0183234567",
    workingHours: "9:00 ص - 5:00 م",
    distance: "3.5 كم",
  },
  {
    id: "bc3",
    name: "بنك الدم - أم درمان",
    address: "وسط أم درمان",
    city: "omdurman",
    phone: "0183345678",
    workingHours: "8:00 ص - 6:00 م",
    distance: "5.8 كم",
  },
];

// ============================================
// STATS (for dashboards)
// ============================================

export const appStats = {
  totalUsers: 1250,
  totalDonors: 890,
  totalRecipients: 360,
  totalHospitals: 45,
  totalDonations: 456,
  activeRequests: 89,
  citiesCovered: 15,
  successRate: 85,
};

export const userStats = {
  totalDonations: 5,
  livesHelped: 12,
  points: 150,
  rank: "متبرع نشط",
};

// ============================================
// CURRENT USER (for testing)
// ============================================

export const currentUser: User = users[0]; // أحمد محمد علي
