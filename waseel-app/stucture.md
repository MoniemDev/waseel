waseel-app/
├── src/
│   ├── app/                    # Pages (Next.js App Router)
│   │   ├── page.tsx            # Welcome/Landing page
│   │   ├── auth/               # Login & Register
│   │   ├── dashboard/          # User dashboard
│   │   ├── requests/           # Blood requests list, new, detail
│   │   ├── notifications/      # Notifications center
│   │   ├── profile/            # Profile, edit, history, points
│   │   ├── donate/             # Donation page
│   │   ├── hospital/           # Hospital dashboard & donors
│   │   └── admin/              # Admin dashboard & users
│   │
│   └── components/
│       ├── ui/                 # 13 reusable UI components
│       ├── layout/             # Header, BottomNav, PageContainer
│       └── features/           # RequestCard, DonorCard, etc.



Key Features:

iOS-inspired clean design with RTL Arabic support
Mobile-first responsive layout
19 pages covering all 3 interfaces (User, Hospital, Admin)
13 reusable UI components (Button, Card, Input, Modal, Toast, etc.)
Blood type badges with color coding
Notification system UI
Points/rewards system
Donation history tracking
To run the app:

cd waseel-app
npm run dev
The app will be available at http://localhost:3000. All pages are static UI — ready for backend integration when Ahmed builds the API.