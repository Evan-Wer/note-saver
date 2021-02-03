const express = require('express');
const uniqid = require('uniqid');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`Server now listening on port ${PORT}!`);
});