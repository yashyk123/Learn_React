 import React from "react";
 import UserContext from "./UserContext";

 /* {children} is like {outlet} we can show the component which we want*/
 const UserContextProvider = ({children}) =>{
    const [user, setUser]  = React.useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
 }

 export default UserContextProvider;