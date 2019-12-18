const express = require("express");

const router = express.Router();

const Prefecture = require("../Seeds/Prefecture.json");
const PrefecturePopulation = require("../Seeds/PrefecturePopulation.json");
const PrefecturePopulationAll = require("../Seeds/PrefecturePopulationAll.json");

// eslint-disable-next-line new-cap
// const proxy = new HttpProxy.createProxyServer();

// router.use("/prefecture", (req, res) => {
//   logger.info(`Redirecting request to ${config.prefectureApi.host}`);
//   return proxy.web(req, res, { target: `${config.prefectureApi.host}` });
// });

router.get("/prefecture", (req, res) => {
  return res.status(200).json({ result: Prefecture });
});

router.get("/prefecture/all", (req, res) => {
  return res.status(200).json({ result: PrefecturePopulationAll });
});

router.get("/prefecture/:iso", (req, res) => {
  const { iso } = req.params;

  const result = PrefecturePopulation.filter(
    elem => elem.prefectureIso === iso
  );

  return res.status(200).json({ result });
});

module.exports = router;
