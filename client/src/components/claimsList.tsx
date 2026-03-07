import { type Claim } from "../api/claimsApi";

export default function ClaimsList({ claims } : {claims: Claim[]}) {
    return(
        <div>
            <h2>Claims</h2>
            <ul>
                {claims.map((claim) => (
                    <li key={claim.id}>
                        {claim.type} - ${claim.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}