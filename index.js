const express = require('express');

const app = express();
const PORT = 3000;
const router = require('./routes')
const bp = require('body-parser')
const cors = require('cors')
require('./config/database').connect();
const whitelist = ["http://localhost:3001"]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(router)
app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running,and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);