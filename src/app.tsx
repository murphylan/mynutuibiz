import { useState } from 'react';
import './app.scss';
import UserContext from './UserContext';

function App({ children }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <UserContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </UserContext.Provider>
  );
}

export default App;