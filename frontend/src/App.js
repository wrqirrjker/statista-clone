import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>Statista Clone Dashboard</h1>
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item.year}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
