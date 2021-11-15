import express from "express";

import {
  register,
  login,
  logout,
  forgotPassword,
  resetpassword,
} from "../controllers/user/auth.js";
import { authCheck } from "../middlewares/auth.js";
import adminRoutes from './admin/auth.js';

const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);
router.post("/forgotpassword", forgotPassword);
router.patch("/resetpassword/:resetToken", resetpassword);
router.post("/logout", authCheck, logout);
router.use('/admin', adminRoutes);

export default router;
