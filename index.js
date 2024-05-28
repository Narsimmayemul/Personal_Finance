const express = require("express");

const dotenv = require("dotenv");
const userRouter = require("./routes/user.route");
const transactionRouter = require("./routes/transction.route");
const categoryRouter = require("./routes/category.route");
const budgetRouter = require("./routes/budget.route");
const reportRouter = require("./routes/report.route");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", userRouter);
app.use("/", transactionRouter);
app.use("/", categoryRouter);
app.use("/", budgetRouter);
app.use("/report", reportRouter);

app.get("/", (req, res) => {
  res.send({ msg: "Personal Finance Management" });
});

app.listen(PORT || 3000, () => {
  console.log("server is running");
});
