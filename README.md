# 📦 Complaint Box – Full Stack Complaint Management System

A full-stack web application designed to streamline the process of registering, tracking, and resolving complaints in an organized and transparent manner.  
The system is built with a **React frontend** and a **Django REST backend**, following real-world backend architecture and API design practices.

---

## 🚀 Project Overview

Complaint Box provides a centralized digital platform where users can submit complaints with relevant details, and authorities/admins can efficiently view, manage, and resolve them.

The project simulates real institutional complaint systems used in **hostels, colleges, offices, and residential societies**, eliminating manual registers, lost complaints, and lack of accountability.

---

## 🎯 Problem Statement

In many organizations:

- Complaints are recorded manually  
- No tracking or status visibility exists  
- Complaints are often ignored or lost  
- No clear information about who raised the complaint or when  

### ❌ Traditional Issues

- Lack of transparency  
- No structured data  
- No audit trail  
- Delayed resolution  

---

## ✅ Solution Provided by Complaint Box

Complaint Box addresses these issues by:

- Digitally storing all complaints  
- Displaying the **complainant’s name**, **room number**, and **submission date**  
- Allowing **status updates** (Pending / Done)  
- Providing a clean and structured UI for monitoring and resolution  

---

## 🧩 Features

### 👤 User Side

- Submit a complaint with:
  - Name  
  - Room Number  
  - Title  
  - Description  
- Automatically records **date and time**
- View all submitted complaints

### 🛠 Admin / Authority Side

- View complaints in a structured list
- Access complete complaint details:
  - Name of complainant  
  - Room number  
  - Complaint date  
  - Current status  
- Update complaint status (**Pending ↔ Done**)  
- Centralized complaint tracking system

---

## 🧠 Key Highlight (Important for Recruiters)

Unlike basic complaint applications, this system **stores and displays the complainant’s name, room number, and date**, ensuring **accountability and traceability**.

This mirrors how **real-world backend systems** are designed and maintained in production environments.

---

## 🏗️ Tech Stack

### Frontend
- React.js  
- Material UI (MUI)  
- Axios for API communication  
- React Router  

### Backend
- Django  
- Django REST Framework  
- RESTful API architecture  
- SQLite (development)  
- PostgreSQL-ready (production)

### Deployment
- Backend: **Render**
- Frontend: *(Optional)* Vercel / Netlify  
- Gunicorn + WhiteNoise for production readiness

---

## 🔁 API Design (Backend-Oriented)

| Method | Endpoint                         | Description                   |
|------|----------------------------------|-------------------------------|
| GET  | `/api/complaints/`               | Fetch all complaints          |
| POST | `/api/complaints/`               | Create a new complaint        |
| PUT  | `/api/complaints/done/<id>/`     | Update complaint status       |

---
<div align="center">
  <img 
    src="https://github.com/user-attachments/assets/70597928-e141-4142-be8f-16dc37b7d0fe" 
    width="900" 
    style="margin-bottom:40px;" 
    alt="Analytics Dashboard"
  />
</div>

<div align="center">
  <img 
    src="https://github.com/user-attachments/assets/eef35194-2688-4081-a3d7-d2b9965ddefe" 
    width="900" 
    style="margin-bottom:40px;" 
    alt="Complaint List"
  />
</div>

<div align="center">
  <img 
    src="https://github.com/user-attachments/assets/be2484e7-ebb1-4646-bcfe-9448881a0576" 
    width="900" 
    alt="Submit Complaint Form"
  />
</div>


## 🧪 Error Handling & Reliability

- Proper HTTP status codes  
- Frontend loading and error states  
- Backend method restrictions (prevents invalid requests)  
- CORS handling for cross-origin frontend access  

---

## 📂 Project Architecture

Complaint_Box/
│
├── backend/
│ ├── backend/
│ │ ├── settings.py
│ │ ├── urls.py
│ │ └── wsgi.py
│ ├── complaints/
│ │ ├── models.py
│ │ ├── serializers.py
│ │ ├── views.py
│ │ └── urls.py
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── api/
│
└── README.md


---

## 🌱 Future Scope

This project is designed to scale. Planned enhancements include:

- 🔐 User Authentication (Login & Roles)  
- 👥 Role-based access (Student / Admin)  
- 🔍 Complaint filtering and search  
- 📊 Analytics dashboard (complaints per month)  
- 📩 Email notifications  
- 📱 Mobile-friendly UI  
- 🤖 AI-based complaint categorization  

---

## 🧠 Skills Demonstrated

### Backend Skills
- REST API design  
- Django REST Framework  
- HTTP methods and status codes  
- CORS configuration  
- Production settings (Gunicorn, WhiteNoise)  
- Debugging deployment and build issues  

### Frontend Skills
- React Hooks (`useState`, `useEffect`)  
- API integration using Axios  
- UI state handling (loading, error, disabled actions)  
- Component-based architecture  

### Professional & Engineering Skills
- Real-world problem solving  
- Clean project structuring  
- Debugging production-level issues  
- Writing professional technical documentation  

---

✅ **This project reflects practical, industry-aligned full-stack development with a strong backend focus.**
