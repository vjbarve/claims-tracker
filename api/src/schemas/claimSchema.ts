import { z } from "zod";

export const claimSchema = z.object({
    type: z.enum(['Dental', 'Vision', 'Health']),
    amount: z.number().positive(),
    status: z.enum(['Submitted', 'In Review', 'Approved', 'Rejected']),
    submittedAt: z.iso.datetime()
});

export type ClaimInput = z.infer<typeof claimSchema>;
