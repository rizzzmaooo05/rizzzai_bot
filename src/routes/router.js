import { Router } from "express";

import handleRoot from "../controllers/handleRoot.js";
import handleChat from "../controllers/handleChat.js";

const router = Router()

router.get('/', handleRoot)
router.post('/chat', handleChat)

export default router