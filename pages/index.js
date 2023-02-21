import { useState } from "react";

export default function Home() {
  const [couter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello {couter}</h1>
      <button onClick={() => setCounter(prev => prev +1)}>+</button>
    </div>
  );
}