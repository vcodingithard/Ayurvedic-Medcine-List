const express = require('express');
const app = express();
const PORT = 3000;

const medicines = require('./medicines');

app.get("/",(req,res)=>{
  res.redirect("/api/medicines")
})

app.get('/api/medicines', (req, res) => {
  res.json(medicines);
});

app.get('/api/medicines/search', (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const results = medicines.filter(name => name.toLowerCase().includes(q));
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
