import express from "express";

import {
  getProducts,
  getBiddableProducts,
} from "../../../../controllers/user/products.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/bids", getBiddableProducts);


export default router;