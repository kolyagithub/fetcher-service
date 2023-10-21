const http = require("http")
    , express = require("express")
    , bodyParser = require("body-parser")
    , cookieParser = require("cookie-parser")
    , routeAuth = require("./routes/auth")
    , routeBalance = require("./routes/balance");

let app = express();

// parse body, cookie
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/auth", routeAuth);
app.use("/balance", routeBalance);

let server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.info("Server listening on port: ", port);
});

