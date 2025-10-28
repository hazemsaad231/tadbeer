'use client';


import { createContext } from 'react'
import { useState } from 'react';


export const Context = createContext(null);

export const ContextProvider = (props) => {

     const [active, setActive] = useState('');


    return(
        <>
        <Context.Provider value={{active, setActive}}>{props.children}</Context.Provider>
        </>
    )
}
