import express from "express";
import Amadeus from "amadeus";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

router.get(`/city-and-airport-search/:parameter`, (req, res) => {
  const parameter = req.params.parameter;
  amadeus.referenceData.locations
    .get({
      keyword: parameter,
      subType: Amadeus.location.any,
    })
    .then(function (response) {
      res.send(response.result);
    })
    .catch(function (response) {
      res.send(response);
    });
});


export default router;
