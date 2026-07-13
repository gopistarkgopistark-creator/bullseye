import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/status")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  function handleScan() {
  console.log(url);
}

  return (
    <div>
      <h1>🎯 Bullseye</h1>
      <input
         type="text"
         placeholder="Enter URL..."
         value={url}
         onChange={(e) => setUrl(e.target.value)}
       />

       <button  onClick={handleScan}>
        Scan
       </button>

       <p>{url}</p>

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