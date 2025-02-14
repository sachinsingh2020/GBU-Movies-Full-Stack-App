
# 🎬 GBU Movies - MERN Stack Movie App  


![AuthGuard Screenshot](https://res.cloudinary.com/dls2tnwrx/image/upload/v1739529789/Screenshot_2025-02-14_161248_kyphka.png)  

A **MERN stack** application where users can search, filter, and download movies. The app includes **user authentication, pagination, RESTful API, and more!**  

---

## 🚀 Features  

✅ **Search Movies** – Find your favorite movies easily.  
✅ **Download Movies** – Users can download available movies.  
✅ **Filtering & Pagination** – Browse movies efficiently.  
✅ **User Authentication** – Secure login and registration system.  
✅ **RESTful API** – Backend powered by Node.js and Express.  

---

## 📂 Project Structure  

```
/GBUMovies
│── /gbumoviesfrontend   # React Frontend
│── /gbumoviesbackend    # Node.js Backend
│── /assets              # (Optional) Store screenshots/images
```

---

## 🛠 Installation Guide  

### 🔹 Step 1: Clone the Repository  

```sh
git clone https://github.com/your-username/gbumovies.git
cd gbumovies
```

### 🔹 Step 2: Setup Backend  

```sh
cd gbumoviesbackend
npm install      # Install dependencies
npm run dev      # Start backend server on PORT 4000
```

Make sure to create a `.env` file inside `gbumoviesbackend` and add the required environment variables:  

```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 🔹 Step 3: Setup Frontend  

```sh
cd ../gbumoviesfrontend
npm install      # Install dependencies
npm start       # Start frontend server on PORT 3000
```

---

## ⚡ Running the Application  

After running both frontend and backend, visit:  

👉 **Frontend:** `http://localhost:3000`  
👉 **Backend API:** `http://localhost:4000/api`  

---

## 📌 Technologies Used  

- **Frontend:** React.js, Redux, Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB  
- **Authentication:** JWT (JSON Web Token)  
- **Other:** REST API, Pagination, Filtering  

---


