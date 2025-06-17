# 🌐 Language Exchange – Online Tutor Booking Platform LearnUp

An online platform for users to browse, book, and review language tutors. Users can also become tutors themselves by adding tutorial listings. Built with modern web technologies and includes secure authentication, protected routes, and dynamic user interactions.

---

## 🔗 Live Link

_([LearnUp](https://friendly-beignet-ea5754.netlify.app/)_

---

## 🧭 Features

### 🔝 Navbar

- **Website Name/Logo**: Reflects the platform’s purpose.
- **Navigation Links**:
  - Home
  - Find Tutors
  - Add Tutorials
  - My Tutorials
  - My Booked Tutors
- **Conditional Auth Buttons**:
  - **Login**: Shows when not authenticated.
  - **Logout** & **Profile Picture**: Visible when logged in.
  - **Tooltip on Hover**: Displays user’s name.

---

### 🏠 Home Page

- **Banner**: Carousel with relevant images.
- **Stats Section**:
  - Total Tutors
  - Total Reviews
  - Supported Languages
  - Total Users
- **Language Category Cards**:
  - 9+ categories
  - Each card contains:
    - Icon
    - Language Name
    - Arrow Icon
  - Clicking redirects to `/find-tutors/:category`
- **Additional Sections**:
  - At least two extra homepage sections related to tutoring/language learning.

---

### 🔍 Find Tutors Page

- Route: `/find-tutors`
- Displays all tutors added via the Add Tutorials page.
- Includes search/filter options.
- Clicking **Details** leads to: `/tutor/:details` (Private route)

---

### 🧑‍🏫 Tutor Details Page _(Private Route)_

- Route: `/tutor/:details`
- Shows:
  - Name
  - Image
  - Language
  - Description
  - Price
  - Reviews
  - **Book Button**
- On booking, saves a record in the database:
  - `tutorId`, `image`, `language`, `price`, `tutorEmail`, `email` (user)

---

### 📚 My Booked Tutors _(Private Route)_

- Lists all tutors the user has booked.
- Displays:
  - Name
  - Image
  - Language
  - Price
  - **Review Button** (Increases review count by 1 using `$inc`)

---

### ➕ Add Tutorials _(Private Route)_

- Form Fields:
  - User Name (auto-filled)
  - Email (auto-filled)
  - Tutorial Image
  - Language
  - Price
  - Description
  - Review (default 0)
- On submit: Saves tutorial to database.

---

### 📄 My Tutorials _(Private Route)_

- Lists tutorials added by the logged-in user in a table.
- Shows:
  - Image
  - Language
  - Price
  - Description
  - Review
  - **Update** and **Delete** buttons

---

## 🔐 Authentication System

### ✅ Login Page

- Email & Password login
- Google Sign-In
- Link to Registration page
- Displays errors for invalid input

### 📝 Registration Page

- Fields:
  - Name
  - Email
  - Password
  - Photo URL
- No email verification or reset password (can be added later)

---

## ⚙️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Express (if applicable)
- **Database**: MongoDB
- **Auth**: Firebase Authentication (Email/Password, Google)
- **Deployment**: Vercel / Render / Netlify

---

## 📁 Folder Structure (Suggested)

src/
├── components/ # Reusable UI components
├── pages/ # Route-based pages
├── routes/ # Route configuration
├── hooks/ # Custom hooks
├── services/ # API functions
├── utils/ # Helper utilities
├── App.jsx
├── main.jsx
└── index.css

---

## 🚧 To Do

- [ ] Add reset password feature (optional)
- [ ] Add email verification (optional)
- [ ] Improve UI/UX polish
- [ ] Add testing (unit/integration)

---

## 🧑‍💻 Author

**Naim Hossen**  
[Portfolio](https://naim-portfolio-delta.vercel.app/)  
_Passionate frontend developer with a goal to lead a SaaS company._

---

## 🛡️ License

This project is for educational/demo purposes only. Not intended for production without proper security review.
