import { useState } from "react";
import { createClaim, type ClaimType } from "../api/claimsApi";

export default function ClaimForm({ onClaimCreated }: { onClaimCreated: () => void }) {
    const [claimType, setClaimType] = useState<ClaimType>("Health");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        if(!amount || Number(amount) <= 0) {
            setError("Amount must be greated than 0");
            return;
        }

        try {
            await createClaim({
                type: claimType,
                amount: Number(amount),
                description,
                status: "Submitted",
                submittedAt: new Date().toISOString()
            });

            setAmount("");
            setDescription("");
            setError("");

            onClaimCreated();
        } catch {
            setError("Failed to create claim");
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-label="claim form">
            <h2>Submit claim</h2>
            <label>
                Claim Type
                <select
                    value={claimType}
                    onChange={(e) => setClaimType(e.target.value)}
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

            {error && <p role="alert">{error}</p> }

            <button type="submit">Submit claim</button>
        </form>
    )
}