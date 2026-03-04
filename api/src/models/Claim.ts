export type ClaimType = 'Dental' | 'Vision' | 'Health';

export type ClaimStatus = 
    | 'Submitted'
    | 'In Review'
    | 'Approved'
    | 'Rejected';

export interface Claim {
    id: string;
    type: ClaimType;
    amount: number;
    status: ClaimStatus;
    submittedAt: string;   // ISO date
}