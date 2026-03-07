import { useState } from 'react';
import ClaimsList from './components/claimsList';
import ClaimForm from './components/ClaimForm';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const reloadClaims = () => {
    setRefreshKey((k) => k + 1);
  }

  return (
    <div>
        <h1>Claims Tracker</h1>
        <ClaimForm onClaimCreated={reloadClaims} />
        <ClaimsList refreshKey={refreshKey}/>
    </div>
  );
}

export default App;
