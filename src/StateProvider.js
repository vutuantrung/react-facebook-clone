/**
 * Preparing data layer
 */

import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// Using this variable to wrap the app inside
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Using this variable to pull the data
export const useStateValue = () => useContext(StateContext);
