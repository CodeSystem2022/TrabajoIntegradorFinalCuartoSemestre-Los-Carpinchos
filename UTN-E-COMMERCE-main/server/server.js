const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");

// Reemplaza "<ACCESS_TOKEN>" con tu token de acceso de MercadoPago
mercadopago.configure({
  access_token:
    "TEST-3353669592673353-102508-de9376e17a76ea6cba5bf35a31d24ca7-184939325",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client")));
app.use(cors());

app.get("/", function () {

  path.resolve(__dirname,"..","client","index.html");


});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: parseInt(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:8080/feedback",
      failure: "http://localhost:8080/feedback",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json({ error: "Error al crear la preferencia de pago" });
    });
});

app.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

app.listen(8080, () => {
  console.log("El servidor está funcionando en el puerto 8080");
});
