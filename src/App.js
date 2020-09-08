import React,{useEffect, useState} from 'react';
import Portfolio from './components/Portfolio';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
     const timer = setTimeout(() => {
       setLoading(false);
     }, 2000);
     return () => clearTimeout(timer);
   }, [loading]);

  return (
    <Portfolio />
  );
}

export default App;
