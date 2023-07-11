import express from "express";

import {
    login,
    logout,
    register,
    getMyProfile
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router
    .post('/new', register)
    .post('/login', login)
    .get('/logout', logout)
    .get('/me',isAuthenticated ,getMyProfile);


export default router;
