// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 3000;

// // CORS options
// const corsOptions = {
//   origin: "*",
//   credentials: true,
//   methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
// };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// const medicines = require('./medicines');

// // Redirect root to /api/medicines
// app.get("/", (req, res) => {
//   res.redirect("/api/medicines");
// });

// // Return all medicines
// app.get('/api/medicines', (req, res) => {
//   res.json(medicines);
// });

// // Search medicines
// app.get('/api/medicines/search', (req, res) => {
//   const q = req.query.q?.toLowerCase() || "";
//   const results = medicines.filter(name => name.toLowerCase().includes(q));
//   res.json(results);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const medicines = require('./medicines');
const cors = require('cors');
const app = express();
const PORT = 3000;

// CORS options
// const corsOptions = {
//   origin: "*",
//   credentials: true,
//   methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
// };

const corsOptions = {
  origin: "*", // allow any origin
  credentials: false, // no cookies or Authorization headers
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
};



// Apply CORS middleware
app.use(cors(corsOptions));

app.options("*", cors(corsOptions))

// Redirect root to /api/medicines
app.get("/", (req, res) => {
  res.redirect("/api/medicines");
});

// Return all medicines
app.get('/api/medicines', (req, res) => {
  res.json(medicines);
});

// Search medicines
app.get('/api/medicines/search', (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const results = medicines.filter(name => name.toLowerCase().includes(q));
  res.json(results);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});