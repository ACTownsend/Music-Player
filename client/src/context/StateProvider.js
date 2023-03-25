import React, {createContext, useContext, useReducer} from "react";

/**
 * Context object that provides the state and dispatch function to the components.
 * @type {React.Context}
 */
export const StateContext = createContext();

/**
 * A Higher Order Component (HOC) that wraps the app and provides the state and dispatch to the components.
 * @param {Object} param - An object containing the reducer, initial state, and child components.
 * @param {Function} param.reducer - A function that specifies how the state is updated in response to an action.
 * @param {Object} param.initialState - The initial state of the app.
 * @param {React.Component[]} param.children - The child components to render.
 * @returns {React.Component} - The app with state and dispatch provided to the components.
 */
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

/**
 * A hook that retrieves the current state and dispatch function from the context.
 * @returns An array containing the current state and dispatch function.
 */
export const useStateValue = () => useContext(StateContext);