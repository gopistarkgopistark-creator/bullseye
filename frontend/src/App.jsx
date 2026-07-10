import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/status")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <h1>🎯 Bullseye</h1>

      {data ? (
        <>
          <p>Project: {data.project}</p>
          <p>Status: {data.status}</p>
          <p>Version: {data.version}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;