import React, { createContext } from "react";



const UserContext = createContext();
const UserProvider = ({ children }) => {

  const courseName = "Udemig";
  const students = ["Yasin", "Sıla", "Meryem"];
  const adress = {
    city: "Malatya",
    country: "Türkiye",
    postCode: 44050,
  };
  const giveAlert = () => {
    alert("Dikaaatt");
  };
  return (

    <UserContext.Provider value={{ courseName, adress, students, giveAlert }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
