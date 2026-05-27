# ✈️ Flight Management System

A full-stack Flight Management System built using Spring Boot, React, PostgreSQL, and Docker.

This project provides flight management functionalities with a modern frontend and REST API backend architecture.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs

### Database
- PostgreSQL

### DevOps
- Docker
- Docker Compose

---

## 📂 Project Structure

```plaintext
test_flight/
│
├── frontend/          # React Frontend
├── flightservice/     # Spring Boot Backend
├── docker-compose.yml
└── .gitignore
```

---

## ⚙️ Features

- Flight data management
- REST API integration
- Frontend ↔ Backend communication
- PostgreSQL database connectivity
- Docker containerization
- Responsive UI

---

## 🐳 Docker Setup

### Build Containers

```bash
docker-compose build
```

### Run Containers

```bash
docker-compose up
```

---

## ▶️ Run Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```plaintext
http://localhost:3000
```

---

## ▶️ Run Backend

```bash
cd flightservice
mvn spring-boot:run
```

Backend runs on:

```plaintext
http://localhost:8080
```

---

## 🛠️ Database Configuration

PostgreSQL is used as the primary database.

Update your database credentials inside:

```plaintext
application.properties
```

Example:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5433/flightdb
spring.datasource.username=postgres
spring.datasource.password=yourpassword
```

---

## 📌 Future Improvements

- JWT Authentication
- Flight Booking Module
- Admin Dashboard
- Payment Integration
- Microservices Architecture
- Kubernetes Deployment

---

## 👨‍💻 Author

Ashutosh Singh

GitHub:
https://github.com/aeroksingh
