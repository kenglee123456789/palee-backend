
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoute');
const genderRoutes = require('./routes/genderRoute');
const districtRoutes = require('./routes/districtRoute');
const stayRoutes = require('./routes/stayRoute');
const subjectRoutes = require('./routes/subjectRoute');
const billRoutes = require('./routes/billRoute')
const registrationRoutes = require('./routes/registrationRoute')
const regisdetailRoutes = require('./routes/regisdetailRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const allow = [];
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(
  {origin: 'https://palee-center.netlify.app'}
));

app.use('/api', studentRoutes);
app.use('/api', genderRoutes);
app.use('/api', districtRoutes);
app.use('/api', stayRoutes);
app.use('/api',subjectRoutes);
app.use('/api',billRoutes)
app.use('/api',registrationRoutes);
app.use('/api',regisdetailRoutes);
app.use('/api',paymentRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
