import { Router } from "express";
import { claims } from "../data/claims";

const router = Router();

/**
 * GET /api/claims
 * Returns all claims
 */
router.get('/', (_req, res) => {
    res.status(200).json(claims);
})

/**
 * GET /api/claims/:id
 * Returns a single claim by ID
 */
router.get('/:id', (req, res) => {
    const claim = claims.find(c => c.id === req.params.id);

    if(!claim){
        return res.status(404).json({ message: 'Claim not found'});
    }

    res.status(200).json(claim);
})

export default router;