import express from "express";
import { createBooking, getAllBooking, getBooking } from "../controllers/bookingController.js";
import { verifyUser,verifyAdmin} from "../utils/verifyToken.js";

const router=express.Router();

//nefunkcionalno
router.post('/',verifyUser,createBooking);
router.get('/',verifyUser,getBooking);
router.get('/',verifyAdmin,getAllBooking);

export default router;