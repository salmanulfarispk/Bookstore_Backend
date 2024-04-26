const express=require("expres") 
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);

export default router;