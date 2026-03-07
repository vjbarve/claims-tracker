import { useEffect, useState } from "react";
import { getClaims, type Claim } from "../api/claimsApi";

export default function ClaimsList({ refreshKey } : { refreshKey: number}) {
    const [claims, setClaims] = useState<Claim[]>([]);

    useEffect(() => {
        getClaims().then(setClaims);
    }, [refreshKey]);

    return(
        <div>
            <h2>Claims</h2>
            <ul>
                {claims.map((claim) => (
                    <li key={claim.id}>
                        {claim.claimType} - ${claim.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}