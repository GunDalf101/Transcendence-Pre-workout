import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../../api';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const getUserName = async () => {
    try {
      const res = await api.get('/api/profile/');
      setUsername(res.data.username);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUsername('Guest');
    }
  };

  useEffect(() => {
    getUserName(); 
  }, []);

  return (
    <UserContext.Provider value={{ username }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

export const setUser = () => {
  return useContext(UserContext);
}