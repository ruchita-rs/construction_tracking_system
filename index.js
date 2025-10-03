const express = require('express');
const { connectDatabase, disconnectDatabase } = require('./src/db/db');
const dotenv = require('dotenv');
const cors = require("cors");
const morgan = require("morgan");
const routes = require('./src/routes/routes');
const fs = require('fs');
dotenv.config();
const path = require("path");

const app = express();

// create folder in public directory if it doesn't exist
const publicDir = path.join(__dirname, "/public");

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const imageDir = path.join(__dirname, "/public/images");
if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir);
}

// Middleware
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/getFiles", express.static(path.join(__dirname, "")));
app.use('/', routes);
app.get("/", (request, response) => {
    response.status(200).json({
        message: "Construction tracking system backend running successfully",
    });
});

// Middleware for unmatched routes
app.use(async (req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Handle shutdown gracefully by disconnecting from the database
process.on('SIGINT', async () => {
    await disconnectDatabase();
    process.exit(0);
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port' + ' ' + process.env.PORT);
    connectDatabase()
}
);