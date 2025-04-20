# Planorama 🧳🌍

**Planorama** is a full-stack travel planning app built with a modern tech stack, helping users plan trips, book flights, and stay informed with ease.

---

## 📁 Project Structure

```
Planorama/
├── planorama/            # Frontend (NEXTJS + TypeScript)
├── planorama_backend/    # Backend (Node.js + Express)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ARRY7686/Planorama.git
cd Planorama
```

---

## 🧩 Backend Setup

### Navigate to the backend directory:

```bash
cd planorama_backend
```

### Create your environment file:

```bash
cp .env.example .env
```

> Update `.env` with the correct values (e.g., PORT, API keys, DB URI).

### Install dependencies:

```bash
npm install
```

### Start the backend server:

```bash
npm run dev
```

> 🟢 By default, the backend will run on **http://localhost:5000**

---

## 🖼️ Frontend Setup

### Navigate to the frontend directory:

```bash
cd ../planorama
```

### Create your environment file:

```bash
cp .env.example .env
```

> Ensure `VITE_BACKEND_URL=http://localhost:5000` is set in the `.env` file.

### Install dependencies:

```bash
npm install
```

### Start the frontend development server:

```bash
npm run dev
```

> 🟢 By default, the frontend will run on **http://localhost:3000**

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express
- **Styling**: CSS
- **Environment Config**: `.env` for both client and server

---

## 📄 License

No license has been added yet. You may want to include one (e.g., MIT) to clarify usage rights.

---

## 🤝 Contributing

We welcome contributions! Feel free to fork the repo, submit PRs, or open issues to make Planorama better.

---

## 🔗 Repository

[GitHub – ARRY7686/Planorama](https://github.com/ARRY7686/Planorama)
