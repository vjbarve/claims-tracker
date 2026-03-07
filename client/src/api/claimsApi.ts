import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:4000/api"
});

export type ClaimType = "Health" | "Dental" | "Vision";

export interface Claim {
    id: string;
    type: ClaimType;
    status: "Submitted" | "In Review" | "Approved" | "Rejected";
    amount: number;
    description: string;
    submittedAt: string;
};

export const getClaims = async(): Promise<Claim[]> => {
    const res = await API.get("/claims");
    return res.data;
};

export const createClaim = async(claim: Omit<Claim, "id">) => {
    const res = await API.post("/claims", claim);
    return res.data;
};