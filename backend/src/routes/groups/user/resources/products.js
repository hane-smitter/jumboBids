import express from "express";

import {
  getProducts,
  getBiddableProducts,
} from "../../../../controllers/user/products.js";
import paginator from "../../../../_helpers/paginate/paginate-handler.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/bids", paginator, getBiddableProducts);


export default router;