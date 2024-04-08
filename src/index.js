const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/server.config');
const apiRouter = require('./routes')
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',apiRouter);

app.get('/ping',(req,res)=>{
    res.json(
        {
            message: "Problem Service is alive."
        }
    )
})

app.use(errorHandler);

app.listen(PORT, async() => {
    console.log(`Server started @ PORT:${PORT} 🚀`);
    await connectToDB();
})

