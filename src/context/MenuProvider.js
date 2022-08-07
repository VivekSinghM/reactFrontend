import React, { createContext, useEffect, useState } from "react";

export const MenuCard = createContext();

const MenuProvider=props=>{
    const [menu,setMenu]=useState({}) 
    useEffect(_=>{
        fetch('/getMenu')
        .then(data=>data.json()).then(data=>{setMenu(data)})
        .catch(error=>console.log(error))
    },[]);
    return(
        <MenuCard.Provider value={{menu,setMenu}}>
            { props.children }
        </MenuCard.Provider>
    );
} 

export default MenuProvider;