const express = require("express");
const HOST = "0.0.0.0";
const app = express();
const port = process.env.PORT || 6500;
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);
	res.setHeader("Access-Control-Allow-Headers", "*");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});
app.get("/", (req, res) => {
	res.end("Try this example http://localhost:" + port + "/{name:string}");
});
app.listen(port, () => console.log(`App running at http://localhost:${port}`));
