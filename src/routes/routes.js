// const ghasaraRoutes = require("./ghasara-rate.routes");
// const namuna8ARoutes = require("./namuna8A.routes");
// const TaxRoutes = require("./taxRate.routes");
const userRoutes = require("./user.routes"); 
// const masterDataRoutes = require("./masterData.routes");
// const documentRoutes = require("./document-upload.routes");


const routes = require("express").Router();


routes.use("/user", userRoutes);
// routes.use("/namuna8a", namuna8ARoutes);
// routes.use("/taxrate", TaxRoutes);
// routes.use("/ghasara-rate", ghasaraRoutes);
// routes.use("/master-data", masterDataRoutes);
// routes.use("/document-upload", documentRoutes);


module.exports = routes;