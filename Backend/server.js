const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for Register Form
// Route for Register Form
app.post("/api/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  console.log(req.body); // Log the request body to debug

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into the users table with the hashed password
    const result = await pool.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id",
      [firstName, lastName, email, hashedPassword] // Use hashed password
    );

    res.status(201).json({
      message: "User registered successfully",
      userId: result.rows[0].id,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

// Route for Signup Form (Organization Registration)
app.post("/api/signup", async (req, res) => {
  const {
    organization_name,
    address,
    contact,
    established_date,
    registration_number,
    organization_email,
  } = req.body;

  try {
    // Insert into organizations table
    await pool.query(
      "INSERT INTO organizations (organization_name, address, contact, established_date, registration_number, organization_email) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        organization_name,
        address,
        contact,
        established_date,
        registration_number,
        organization_email,
      ]
    );

    res.status(201).json({ message: "Organization registered successfully!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error registering organization." });
  }
});

// Route for Login
// Route for Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    // Validate password by comparing the entered password with the hashed password
    const isPasswordValid = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error logging in." });
  }
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

app.post("/api/register-user", async (req, res) => {
  const {
    first_name,
    last_name,
    phone,
    email,
    location,
    interests,
    skills,
    qualifications,
    gender,
    year_of_birth,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !phone ||
    !email ||
    !location ||
    !year_of_birth
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO registerusers (first_name, last_name, phone, email, location, interests, skills, qualifications, gender, year_of_birth) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id",
      [
        first_name,
        last_name,
        phone,
        email,
        location,
        interests,
        skills,
        qualifications,
        gender,
        year_of_birth,
      ]
    );

    res.status(201).json({
      message: "User registered successfully",
      userId: result.rows[0].id,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});
