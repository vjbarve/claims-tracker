import { useState } from "react";
import {type ClaimType } from "../api/claimsApi";

export default function ClaimForm({ submitClaim }: { submitClaim: any }) {
    const [type, setType] = useState<ClaimType>("Health");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        await submitClaim({
            type,
            amount: Number(amount),
            description,
            status: "Submitted",
            submittedAt: new Date().toISOString()
        });

        setAmount("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} aria-label="claim form">
            <h2>Submit claim</h2>
            <label>
                Claim Type
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value as ClaimType)}
                >
                    <option value="Health">Health</option>
                    <option value="Dental">Dental</option>
                    <option value="Vision">Vision</option>
                </select>
            </label>

            <label>
                Amount
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
            </label>

            <label>
                Description
                <input value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>

            <button type="submit">Submit claim</button>
        </form>
    )
}