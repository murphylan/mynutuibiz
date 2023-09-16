import { createContext } from 'react';

interface UserContextValue {
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const defaultContext: UserContextValue = {
  selectedTab: 0,
  setSelectedTab: () => { }
};

const UserContext = createContext(defaultContext);

export default UserContext;