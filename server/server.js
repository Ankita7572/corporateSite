// Import necessary libraries
const express = require("express");
const transporter = require("./emailConfig");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql");

const app = express();
const port = 3004;

app.use(cors()); // Use cors middleware to enable CORS
app.use(bodyParser.json());

// Middleware to parse JSON data
app.use(bodyParser.json());

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

// Set up MySQL connection
const db = mysql.createConnection({
  host: "localhost", // Your MySQL host
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "mydb", // Your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.post("/api/posts", upload.single("image"), async (req, res) => {
  try {
    const { title, description, username } = req.body;
    const created_at = new Date();
    console.log(req.file);

    const imagePath = req.file.path; // Path to the uploaded image

    // Store the image in your chosen file storage system (e.g., Amazon S3)

    // Construct the image URL (replace with your actual image URL)
    const imageUrl = `https://your-image-storage-url.com/${req.file.originalname}`;

    // Insert the new blog post into the MySQL database
    const insertQuery = `
      INSERT INTO blog_posts (title, description, picture, username, category, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(
      insertQuery,
      [title, description, imageUrl, username, created_at],
      (err, result) => {
        if (err) {
          console.error("Error inserting blog post:", err);
          res.status(500).json({ error: "An error occurred" });
        } else {
          console.log("New blog post inserted:", result);
          res
            .status(201)
            .json({ message: "Blog post created successfully", imageUrl });
        }
      }
    );
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Endpoint to handle form submission
app.post("/submit-form", upload.single("resume"), async (req, res) => {
  try {
    const formData = req.body;
    const resumeFile = req.file; // The uploaded resume file

    const mailOptions = {
      from: "jameswatson01010@gmail.com",
      to: "jameswatson01010@gmail.com",
      subject: "New Form Submission",
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
        <p><strong>Cover Letter:</strong> ${formData.coverLetter}</p>
      `,
      attachments: [
        {
          filename: "resume.pdf", // Set the filename for the attachment
          content: resumeFile.buffer, // Use the buffer of the uploaded file
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
});

app.post("/contact-form", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Use the transporter to send an email
    await transporter.sendMail({
      to: "jameswatson01010@gmail.com", // Your email address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting the form" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
