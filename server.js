const express = require("express");
const connectDB = require("./config/db");

const app = express();
const cors = require("cors");
// Connect Database
connectDB();

app.use(cors());
//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to the Drobe Store" }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));

const PORT = (process.env.PORT = 5000);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
