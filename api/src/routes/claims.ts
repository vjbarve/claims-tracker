import { Router } from "express";
import { claims } from "../data/claims";
import { claimSchema, ClaimInput } from "../schemas/claimSchema";
import { v4 as uuidv4 } from 'uuid';
import {ZodError} from 'zod';

const router = Router();

/**
 * GET /api/claims
 * Returns all claims
 */
router.get('/', (_req, res) => {
    res.status(200).json(claims);
});

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
});

/**
 * POST /api/claims
 * Add a new claim
 */
router.post('/', (req, res) => {
    try {
        // validate request body
        const validated: ClaimInput = claimSchema.parse(req.body);

        const newClaim = {
            id: uuidv4(),
            ...validated
        };

        claims.push(newClaim);

        res.status(201).json(newClaim);
    } catch (err) {
        if (err instanceof ZodError) {
            return res.status(400).json({ message: 'Invalid input', details: err.issues });
            }
            console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

export default router;