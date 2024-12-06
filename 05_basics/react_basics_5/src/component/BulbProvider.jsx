import { useState } from "react";
import { createContext } from "react";

const BulbContext = createContext(); // createContext let you create a context
// console.log(BulbContext);

const BulbProvider = ({ children }) => {
  const [isBulbOn, setisBulbOn] = useState(false);
  return (
    <BulbContext.Provider
      value={{
        isBulbOn,
        setisBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
};

export {BulbProvider , BulbContext};
