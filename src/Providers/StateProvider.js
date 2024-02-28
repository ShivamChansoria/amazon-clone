import React, { createContext, useContext, useReducer } from "react";

//Datalayer: 
export const StateContext = createContext();

//Wrapping the App and provider with Data Layer.

export const StateProvider = ({reducer, initialState, children}) => (
     //Here StateContext initialised by using "CreateContext()" which makes React context that works as global store.
    <StateContext.Provider value= {useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
); //Will provide the all instances of the State to the root component!!

export const useStataValue = () => useContext(StateContext); //Function used to get the current state of the Context(Basket).
