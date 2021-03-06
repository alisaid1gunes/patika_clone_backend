const express = require('express');

const app = express();

const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const dotenv = require('dotenv');

const cors = require('cors');

const helmet = require('helmet');

const compression = require('compression');

const auth = require('./routes/auth');

const token = require('./routes/token');

const course = require('./routes/course');

const lesson = require('./routes/lesson');

const courseEnrollment = require('./routes/courseEnrollment');

const score = require('./routes/score');

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
    console.log('db connected');
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(compression({ threshold: 6 }));

app.use('/api/auth', auth);

app.use('/api/', token);

app.use('/api/course', course);

app.use('/api/lesson', lesson);

app.use('/api/courseEnrollment', courseEnrollment);

app.use('/api/score', score);
