import cors from "cors";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";

import app from "./app";
import db from "./src/database/db";
import errorHandler from "./src/utility/errorHandler";
import passportFn from "./src/config/passport";

import publicRouter from "./src/router/publicRouter";
import cartRouter from "./src/router/cartRouter";
import addressRouter from "./src/router/addressRouter";
import retailerRouter from "./src/router/retailerRouter";
import wholesalerRouter from "./src/router/wholesalerRouter";
import fileMasterProductsRouter from "./src/router/fileMasterProductsRouter";
import wholesalerInventoryRouter from "./src/router/wholesalerInventoryRouter";
import backOrderRouter from "./src/router/backOrderRouter";
import orderRouter from "./src/router/ordersRouter";
import returnRouter from "./src/router/returnRouter";
import termsAndConditionsRouter from "./src/router/termsAndConditionsRouter";
import reportsRouter from "./src/router/reportsRouter"
import contactRouter from "./src/router/contactRouter"

dotenv.config();
const port = process.env.SERVER_PORT || 3000;

passportFn(passport);

const corsOption = {
  origin: "*",
};
app.use(cors(corsOption));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "Us-b2bSecretKey",
  })
);
app.use(passport.initialize());
app.use(passport.session());

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(`Database & tables generated!`);
  })
  .catch((err) => {
    console.log(err);
  });

// middleware start
require("./src/middleware/serverMiddleWare");
// middleware end
app.get("/info", (req, res) => {
  res.json({ version: "1.0.0" });
});
global.__basedir = __dirname;

// Registering routes here
const routePaths = [
  publicRouter,
  cartRouter,
  retailerRouter,
  wholesalerRouter,
  addressRouter,
  fileMasterProductsRouter,
  wholesalerInventoryRouter,
  backOrderRouter,
  orderRouter,
  returnRouter,
  termsAndConditionsRouter,
  reportsRouter,
  contactRouter
];
routePaths.forEach((router) => {
  app.use("/api", router);
});


//Error handler
app.use(errorHandler);
 

app.listen(port, () => console.log(`server running on ${port}!`));
