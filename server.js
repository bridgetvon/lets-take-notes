const express = require('express');
const app = express();

//create an empty array for notes

const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));
// set up a path name look for an api route
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});