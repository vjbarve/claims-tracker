import { Claim } from "../models/Claim";

export const claims: Claim[] = [
    {
    id: '1',
    type: 'Dental',
    amount: 120,
    status: 'Approved',
    submittedAt: '2024-01-12'
  },
  {
    id: '2',
    type: 'Vision',
    amount: 80,
    status: 'In Review',
    submittedAt: '2024-02-01'
  },
  {
    id: '3',
    type: 'Health',
    amount: 300,
    status: 'Submitted',
    submittedAt: '2024-02-10'
  }
];