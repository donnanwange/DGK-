const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', indexRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
