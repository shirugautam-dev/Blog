const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Store emails (temporary)
let subscribers = [];

// Setup email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shiru.gautam@gmail.com",       // 🔁 replace this
    pass: "nizsosusqmdmwbec"           // 🔁 replace this (NOT your real password)
  }
});

// Subscribe route
app.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({ message: "Email required" });
  }

  // Prevent duplicate emails
  if (subscribers.includes(email)) {
    return res.json({ message: "Already subscribed!" });
  }

  subscribers.push(email);

  console.log("Subscribers:", subscribers);

  res.json({ message: "Subscribed successfully!" });
});

// Function to send email to all subscribers
function sendNewPost(postLink) {
  subscribers.forEach(email => {
    transporter.sendMail({
    from: "shiru.gautam@gmail.com",
    to: email,
    subject: "🚀 New Post is Live!",
    html: `
 <div style="max-width:700px; margin:auto; font-family:Arial, sans-serif; padding-top:20px;">

  <!-- Header -->
  <div style="display:flex; align-items:center; gap:25px; margin-bottom:20px;">
    
    <img src="https://raw.githubusercontent.com/shirugautam-dev/Blog/main/Images/Self.png"
         style="width:80px; height:80px; object-fit:cover; border-radius:10px;">
    
    <div style="margin-left:25px;">
    <h1 style="margin:0; font-size:24px;">Srijana’s Blog ✨</h1>
    <p style="margin:8px 0 0;">A new post is live 🚀</p>
  </div>

  </div>

  <!-- Body -->
  <p style="margin:0 0 15px;">Hi there,</p>

  <p style="margin:0 0 20px;">
    I just published something close to my heart — honest thoughts, reflections, and stories I wanted to share with you.
  </p>

  <!-- Button -->
  <div style="text-align:center; margin:25px 0;">
    <a href="https://shirugautam-dev.github.io/Blog/"
   target="_blank"
   style="background:black; color:white; padding:12px 18px; text-decoration:none; border-radius:8px; display:inline-block;">
   Read the Post
</a>
  </div>
  

  <!-- Footer text -->
  <p style="margin:0 0 10px;">
    Thank you for being here 💛
  </p>

  <p style="margin:0;">
    — Srijana
  </p>

</div>

  </div>
`
}, (err, info) => {
  if (err) {
    console.log("Error sending to", email, err);
  } else {
    console.log("Email sent to", email);
  }
});

  });  // closes forEach
}      // closes function

// Test route to trigger email sending
app.get("/send", (req, res) => {
    console.log("Subscribers before sending:", subscribers);  // 👈 ADD THIS
  const testLink = "http://127.0.0.1:5500"; // 🔁 change this
  sendNewPost(testLink);
  res.send("Emails sent!");
});
app.get("/", (req, res) => {
  res.send("Server is working!");
});
// Start server
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});