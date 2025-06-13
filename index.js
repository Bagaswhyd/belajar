require("dotenv").config();
// Buat server di express
const express = require("express");
const app = express();

const usersRouter = require("./routes/users.js"); // import routes

const middlewareLogRequest = require("./middleware/logs.js"); // import middleware
const upload = require("./middleware/multer.js");
const e = require("express");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(middlewareLogRequest); // middleware untuk log request
app.use(express.json()); // izin untuk menerima request dalam bentuk json
app.use("/assets", express.static("public/images")); // izin untuk menerima file static berupa gambar agar bisa diakses oleh user

app.use("/users", usersRouter) // route untuk users
app.post("/upload",upload.single("photo"), (req, res) => {
    res.json({
        message: "POST upload success",
    })
});

app.use((err, req, res, next) => { // middleware untuk menangani error
    res.status(500).json({
        message: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`server berhasil di running di port ${PORT}`);
});
