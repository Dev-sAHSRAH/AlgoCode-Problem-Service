const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/server.config');
const apiRouter = require('./routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',apiRouter);

app.get('/ping',(req,res)=>{
    res.json(
        {
            messge: "Problem Service is alive."
        }
    )
})

app.listen(PORT, ()=>{
    console.log(`Server started @ PORT:${PORT} 🚀`);
})

