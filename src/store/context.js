const { createContext, useContext, useState } = require("react");

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <userContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  return useContext(userContext);
};
