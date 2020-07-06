const express = require("express");
const app = express();
const port = process.env.PORT || 6500;
const CustomJsonBuilder = require("./dist/src/builder").default;
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);
	res.setHeader("Access-Control-Allow-Headers", "*");
	res.setHeader("Access-Control-Allow-Credentials", true);
	res.setHeader('Content-Type', 'application/json');
	next();
});
app.all("/:pattern?", (req, res) => {
	if (req.params.pattern) {
		console.log(req.params.pattern)
		const response = CustomJsonBuilder.build(req.params.pattern);
		res.json(response);
	} else {
		res.end("Try this example\n\nhttp://localhost:" + port + "/{user:number,posts:{id:uuid,title:string,$times:3}}");
	}
});
app.listen(port, () => console.log(`App running at http://localhost:${port}`));
