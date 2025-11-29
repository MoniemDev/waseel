Arabic below 👇
# **Waseel – Sudanese Blood Donation Connector**

**Waseel** is a Sudanese digital platform built to solve one of the most critical challenges in the healthcare system:
**the shortage of available blood units at hospitals and blood centers.**

The mission is simple:
**Connect donors with recipients instantly — inside the same city — and reduce the dependency on overwhelmed blood centers.**

---

## **🎯 Purpose**

Waseel helps people in urgent need of blood by creating a fast, direct link between them and willing donors, making the donation process quicker, easier, and more reliable.

---

## **🧩 System Structure**

The system consists of **3 main interfaces + 1 central server**:

### **1) User Interface (Donors & Recipients)**

* Register as a **donor** or **recipient**.
* Receive **real-time notifications** for blood requests in the same city.
* View contact information to coordinate directly outside the app.
* Update profile details, blood type, and location.

---

### **2) Hospital Interface**

A separate web interface designed for medical institutions:

* Access donor and recipient data.
* View and track requests.
* Confirm donation status and manage cases.

---

### **3) Admin / Developer Interface**

A private dashboard for the Waseel team:

* Manage all users and requests.
* Control and monitor notifications.
* Review system performance.
* Handle backend operations and issues.

---

### **4) Server (Backend)**

Handles all data processing and communication:

* Stores all user and request data.
* Sends notifications based on city matching.
* Exposes the required APIs.
* Built using **Django or Laravel** depending on the backend architecture.

---

## **🛠️ Technologies**

### **Frontend**

* **Next.js**
* Later deployed to **Android** and **iOS** via **WebView** wrappers.

### **Backend**

* **Django** or **Laravel**
* Relational database (PostgreSQL or MySQL)

### **Other**

* Notification system
* Authentication & role management
* Server hosting and deployment pipeline

---

## **👥 Team Members**

We are four developers and designers working under one company to deliver Waseel:

### **1) Munim – Front-End Developer**

* Builds the main user-facing interface in Next.js.
* Implements pages for signup, requests, notifications, and dashboards.
* Works closely with the designer to apply the visual identity.
* Optimizes performance and user experience.

### **2) Altayeb – Full-Stack Developer**

* Works across front-end and back-end.
* Connects the UI with APIs.
* Helps design the database structure.
* Supports backend development with Ahmed.
* Assists with deployment and server configuration.

### **3) Moayad – Graphic Designer**

* Creates the full visual identity for Waseel.
* Designs the logo and branding system.
* Produces UI/UX layouts and design components.
* Prepares graphics for Android/iOS store listings.

### **4) Ahmed – Backend Developer**

* Builds and maintains the API.
* Implements authentication and user roles (donor, recipient, hospital).
* Creates the notification engine based on city/location.
* Manages and secures the database.
* Ensures stable backend performance.

---

## **📦 Key Features**

* Fast and simple sign-up.
* City-based blood request notifications.
* Direct communication between donor and recipient.
* Dedicated interface for hospitals.
* Admin dashboard for full control.
* Secure and reliable backend architecture.

---

## **📈 Future Enhancements**

* Donation tracking for each user.
* Gamified rewards/points for active donors.
* Map view for nearby hospitals and blood banks.
* Multi-language support.
* Advanced analytics for hospitals.


---

# **وصيل – منصة سودانية لربط المتبرعين بالدم مع المحتاجين**

**وصيل** هو تطبيق سوداني مصمَّم لمعالجة واحدة من أكبر مشاكل النظام الصحي: **عجز مراكز الدم في توفير وحدات كافية للمحتاجين في الوقت المناسب**.
الفكرة بسيطة وواضحة:
**نوصل المتبرع بالمستقبل مباشرة… بأسرع طريقة… وبداخل نفس المدينة.**

---

## **🎯 الهدف الأساسي**

تسهيل عملية إيجاد المتبرعين بالدم عبر ربطهم فورياً مع الحالات الطارئة، مع تقليل الضغط على مراكز الدم، وتوفير قناة مباشرة وآمنة للتواصل.

---

## **🧩 مكوّنات النظام**

النظام مكوّن من **٣ واجهات + سيرفر رئيسي** يدير كل شيء:

### **1) واجهة المستخدم العادي**

* التسجيل كـ **متبرع** أو **مستقبل**.
* استلام **إشعارات فورية** عند وجود طلب دم جديد داخل نفس المدينة.
* عرض **بيانات التواصل** بين الطرفين للتنسيق خارج التطبيق.
* إمكانية تحديث البيانات الشخصية وفصيلة الدم والموقع.

---

### **2) واجهة المستشفيات**

واجهة مستقلة للمؤسسات الطبية، تسمح بـ:

* مشاهدة الحالات والطلبات.
* الوصول لقاعدة بيانات المتبرعين والمستقبلين.
* تتبع الطلبات وتأكيد التبرعات.

---

### **3) واجهة المطورين / فريق الإدارة**

واجهة خاصة لفريق وصيل لإدارة المنصة:

* إدارة المستخدمين والمتبرعين.
* مراجعة الطلبات.
* إدارة الإشعارات.
* مراقبة أداء النظام والاستجابة للأخطاء.

---

### **4) السيرفر (Back-End)**

* تخزين البيانات بالكامل.
* معالجة الإشعارات حسب المدينة.
* واجهات API لكل المنصات.
* سيتم تطويره باستخدام **Django أو Laravel** حسب تقسيم العمل.

---

## **🛠️ التقنيات المستخدمة**

### **Frontend**

* **Next.js**
* سيتم تحويل الواجهة إلى **Android** و **iOS** باستخدام **WebView** بعد اكتمال النسخة الويب.

### **Backend**

* **Django** أو **Laravel** (يُحدده أحمد وفق البنية الأنسب).

### **Other Tools**

* نظام إشعارات
* نظام إدارة هوية (Auth)
* قواعد بيانات Postgres أو MySQL
* Hosting و CI/CD (لاحقاً)

---

## **👥 فريق العمل**

نحن ٤ أشخاص نشتغل عبر شركتنا لبناء المشروع من الصفر:

### **1) منعم – مطور Front-End**

* تطوير واجهة المستخدم الأساسية.
* تصميم وتنفيذ صفحات التسجيل، لوحة المستخدم، صفحة الطلبات، والإشعارات.
* التعاون مع المصمم لتطبيق الهوية البصرية.
* تحسين الأداء وتجربة المستخدم في Next.js.

---

### **2) الطيب – مطور Full-Stack**

* بناء بعض واجهات المستخدم المعقدة.
* ربط الواجهة مع الـ API.
* المساهمة في تصميم قواعد البيانات.
* دعم أحمد في بناء الـ Backend.
* العمل على الرفع (deployment) وضبط السيرفر.

---

### **3) مؤيّد – مصمم جرافيك**

* تصميم الهوية البصرية لتطبيق وصيل.
* تصميم شعار التطبيق (Logo).
* واجهات UI/UX كاملة.
* إعداد العناصر الرسومية لنسخ Android و iOS.

---

### **4) أحمد – Backend Developer**

* بناء الـ API الأساسية.
* نظام التسجيل وتحديد الدور (متبرع / مستقبل / مستشفى).
* نظام الإشعارات حسب المدينة.
* إدارة قواعد البيانات.
* حماية النظام والـ Data Validation.

---

## **📦 الميزات الأساسية**

* تسجيل بسيط وسريع.
* تخصيص الحساب حسب الفصيلة والمدينة.
* طلب الدم في أقل من دقيقة.
* إرسال إشعارات فورية للمتبرعين القريبين.
* تواصل مباشر بين الطرفين.
* واجهة خاصة للمستشفيات.
* فريق إدارة يتحكم في البيانات والعمليات.

---

## **📈 مستقبل المشروع**

* إضافة تتتبع التبرعات.
* نظام Points للمتبرعين لتحفيز التبرع.
* إضافة خريطة للمستشفيات ومراكز الدم.
* دعم لغات متعددة.

---
