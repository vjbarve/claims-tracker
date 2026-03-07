import ClaimsList from './components/claimsList';
import ClaimForm from './components/ClaimForm';
import { useClaims } from './hooks/useClaims';

function App() {
  const { claims, loading, error, submitClaim } = useClaims();

  return (
    <div>
        <h1>Claims Tracker</h1>
        <ClaimForm submitClaim={submitClaim} />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        
        <ClaimsList claims={claims}/>
    </div>
  );
}

export default App;
