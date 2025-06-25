#  User Feedback System

A sleek, secure, and production-ready full-stack application built to collect, manage, and analyze user feedback with ease. 

This project simulates a real-world feedback management tool, complete with a public-facing form and an admin dashboard. Built using **React**, **Node.js**, **Express**, **PostgreSQL**, and **Prisma**, it focuses on creating a seamless experience for both users and administrators.

Designed with scalability, performance, and user experience in mind, this system showcases best practices in **authentication, routing, client-server communication**, and **frontend-backend separation**.

Perfect for use cases like product feedback, customer suggestions, bug reporting systems, or even internal team retrospectives.



##  Features

###  Feedback Form
- Collects essential user input: **Name, Email, Message, Category**
- Categories include: **Suggestion**, **Bug Report**, **Feature Request**
- Real-time client-side validation for error-free submissions
- Toast notifications for seamless and instant feedback
- Fully responsive form design with smooth UX

###  Admin Dashboard
- Password-protected admin access (`admin123`)
- View all submitted feedbacks in a clean tabular format
- Easily **filter feedbacks by category** (e.g., Suggestions only)
- Built-in **search functionality** to find feedback by user name or email
- Sorted listing of feedbacks (most recent first)
- Secure session handled via `localStorage` for authentication
- Logout functionality with instant route redirection

###  Analytics & Insights *(Optional Enhancement Area)*
- Backend is ready for future enhancements like:
  - Feedback statistics (counts per category)
  - Charts or graphical dashboards
  - Sentiment analysis or tagging

###  UI/UX Highlights
-  **Dark mode support** (auto-adapts to user’s system theme)
-  Fully **responsive** design – optimized for both desktop and mobile
-  Toastify notifications for all user and admin interactions
-  Clean and modern layout powered by CSS-in-JS styling
- Intuitive navigation between feedback form and admin panel

##  Tech Stack

| Layer        | Technologies                          |
|--------------|---------------------------------------|
| **Frontend** | React.js, Toastify                    |
| **Backend**  | Node.js, Express.js, Prisma           |
| **Database** | PostgreSQL (via Supabase or pgAdmin)  |

##  Quick Start

### Prerequisites
- Node.js (v16+)
- PostgreSQL (Supabase or pgAdmin)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/User_Feedback_System.git
   cd User_Feedback_System

2. **Install Frontend**
    ```bash
   cd client
   npm install
   npm run dev
-
   Frontend runs on  http://localhost:5173

3. **Install Backend**
    ```bash
   cd ../server
   npm install

4. **Create a .env file in the server/ directory with the following content:**
    ```bash
   DATABASE_URL=your-postgres-connection-string

5. **Start the backend:**
    ```bash
   node index.js
-
   Backend runs on  http://localhost:5000


###  Access Admin Dashboard
- Navigate to: http://localhost:5173/login
- Enter password: admin123
- You’ll be redirected to a secure feedback dashboard


## Screenshots
- Feedback Form
[![Feedback Form](https://i.postimg.cc/gkLLDjFX/Screenshot-2025-06-25-051153.png)](https://postimg.cc/nCZLVHLp)
-  Admin Login Page
[![ Admin Login Page](https://i.postimg.cc/D0J0BjDk/Screenshot-2025-06-25-051224.png)](https://postimg.cc/zHNqfj80)
-  Admin Dashboard
[![Screenshot-2025-06-25-051300.png](https://i.postimg.cc/BZkXX3Lq/Screenshot-2025-06-25-051300.png)](https://postimg.cc/F1b9B2Vq)

###  Application Architecture

- Modular full-stack structure
-  Frontend (`/client`)
  - React SPA with React Router DOM
  - Routes: `/`, `/login`, `/dashboard`
  - Axios for API calls
  - React Hooks for state management
  - Toastify for notifications

###  Backend (`/server`)

- Express.js for routing
- Prisma ORM connected to PostgreSQL
- CORS-enabled for frontend-backend communication
-  REST Endpoints:
   - `POST /feedback`: Submit feedback
   - `GET /feedback`: Retrieve all feedback (admin only)

###  Data Flow

- User submits feedback via the form
- Frontend sends a `POST` request to backend
- Backend saves the data to PostgreSQL via Prisma
- Admin logs in and fetches feedbacks via `GET`
- Feedbacks are rendered in the dashboard

###  Scalability Considerations

- Stateless Express backend allows horizontal scaling
- Backend can be easily deployed on **Render** for reliable hosting
- PostgreSQL (via **Supabase**) handles concurrent requests effectively
- Prisma optimizes async database access
- Frontend is static → Deployable on **Vercel**, **Netlify**, etc.


###  Extra Features

-  Automatic dark mode based on system theme
-  Admin-only access using simple `localStorage` auth
-  Real-time form validation
-  Toast notifications for better UX feedback

###  Future Enhancements

-  JWT-based secure authentication
-  Timestamps for each feedback entry
-  Filtering & search in dashboard by category/date
-  Email alerts to admin on new submissions

###  License

- This project is licensed under the **MIT License**
- Feel free to use, contribute, and share it with proper attribution

---

❤️ Made with love by - **Karthik Suresh**




