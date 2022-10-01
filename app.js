import dotenv from "dotenv";
import express from "express";
import minimist from "minimist";

const options = { alias: { p: "puerto", d: "debug" } };
const valueMinimist = minimist(process.argv.slice(2), options);
//console.log(minimist(process.argv.slice(2), options))

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/info", function (req, res) {
  res.send({
    Arguments: valueMinimist,
    OperatingSystem: process.platform,
    versionNode: process.version,
    routeFile: process.cwd(),
    processId : process.pid,
    executionPath : req.url,
    memory: process.memoryUsage().rss
  });
});

app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});

// import express from "express";
// import jwt from "jsonwebtoken";
// const app = express();
// const PRIVATE_KEY = "coderhouse";

// app.use(express.json());

// function auth(req, res, next) {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).json({
//       error: "not authenticated",
//     });
//   }
//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({
//         error: "not authorized",
//       });
//     }
//     req.user = decoded.data;
//     next();
//   });
// }
// app.get("/", (req, res) => {
//   res.send("Hola mundo");
// });

// app.get("/api/protected", auth, (req, res) => {
//   res.send("Estoy en /protected");
// });

// app.post("/api/login", (req, res) => {
//   const { username, password, direccion } = req.body; //LOGIN
//   const userForToken = { username, direccion };
//   const token = jwt.sign(userForToken, PRIVATE_KEY, { expiresIn: "60s" });
//   res.json({ token });
// });

// app.listen(4000, () => {
//   console.log("SERVER UP JWT");
// });
