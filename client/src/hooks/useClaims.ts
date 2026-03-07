import { useEffect, useState } from "react";
import { getClaims, createClaim, type Claim } from "../api/claimsApi";

export function useClaims() {
    const [claims, setClaims]= useState<Claim []>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchClaims = async () => {
        setLoading(true);

        try {
            const data = await getClaims();
            setClaims(data);
            setError(null);
        } catch {
            setError("Failed to load claims");
        } finally {
            setLoading(false);
        }
    };

    const submitClaim = async(claim: Omit<Claim, "id">) => {
        try {
            await createClaim(claim);
            await fetchClaims();
        } catch {
            setError("Failed to create claim");
        }
    };

    useEffect(() => {
        fetchClaims();
    }, []);

    return {
        claims,
        loading,
        error,
        submitClaim
    }
}