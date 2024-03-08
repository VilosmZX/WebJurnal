import { Router } from "express";
import { verifyToken } from "../middleware/VerifyToken";
import { isAdmin } from "../middleware/isAdmin";
import Banners from "../models/BannerModel";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.post('/banners', verifyToken, isAdmin, async (req, res) => {
    await Banners.create({
        image: req.body.image
    })
    res.sendStatus(StatusCodes.CREATED);
})

router.get('/banners', async (req, res) => {
    const banners = await Banners.findAll();
    res.status(StatusCodes.OK).json(banners);
})

export default router;