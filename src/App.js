import React from 'react';
//import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard';

function App() {
  //const darkMode = useSelector((state) => state.theme.darkMode);

 // useEffect(() => {
  //  document.documentElement.classList.toggle('dark', darkMode);
 // }, [darkMode]);

  return (
    <div className={`min-h-screen }`}>
      <Dashboard />
    </div>
  );
}

export default App;