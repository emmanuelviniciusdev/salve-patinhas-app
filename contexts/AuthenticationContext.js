import { createContext, useContext, useReducer } from "react"

const initialState = {
  token: null,
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload }
    default:
      throw Error(`The action type '${action.type}' is not defined`)
  }
}

export const AuthenticationContext = createContext()

export function AuthenticationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function login() {
    dispatch({ type: "SET_TOKEN", payload: "my-token-123" })
  }

  function logout() {
    dispatch({ type: "SET_TOKEN", payload: null })
  }

  const isSignedIn = !!state.token

  return (
    <AuthenticationContext.Provider
      value={{ ...state, isSignedIn, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export function useAuthenticationContext() {
  const context = useContext(AuthenticationContext)

  if (!context) {
    throw Error("useAuthenticationContext must be under AuthenticationProvider")
  }

  return context
}
