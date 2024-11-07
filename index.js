const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

function getReturns(boughtAt, marketPrice, quantity) {
  let returns = (marketPrice - boughtAt) * quantity;
  return returns;
}

function getReturnPercentage(boughtAt, returns) {
  let returnPercentage = (returns / boughtAt) * 100;
  return returnPercentage;
}

function checkProfitOrLoss(returnPercentage) {
  if (returnPercentage > 0) {
    return 'profit';
  } else {
    return 'loss';
  }
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  res.send(getReturns(boughtAt, marketPrice, quantity).toString());
});

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send((stock1 + stock2 + stock3 + stock4).toString());
});

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  res.send(getReturnPercentage(boughtAt, returns).toString());
});

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send((stock1 + stock2 + stock3 + stock4).toString());
});

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(checkProfitOrLoss(returnPercentage));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
