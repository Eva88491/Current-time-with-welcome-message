import { useState, useEffect } from 'react';/// userState - it is used for managing state in fuctional components.
                                            /// useEffect - it is used for handling side effects like times and api calls

import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date()); /// it is set current time and date to currentTime variable and used setCurrent time function to update it.

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      // Log in the format: [clock] 15 September 2025 9:14:07 pm
      const options = { year: 'numeric', month: 'long', day: '2-digit' };
      const dateStr = now.toLocaleDateString('en-GB', options);
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;
      console.log(`[clock] ${dateStr} ${timeStr}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>Welcome to CHARUSAT!!!!</h1>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>
          It is {currentTime.toLocaleDateString()}
        </h2>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>
          It is {currentTime.toLocaleTimeString()}
        </h2>
      </div>
    </>
  );
}

export default App;