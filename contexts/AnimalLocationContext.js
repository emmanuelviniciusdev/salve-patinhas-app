import { createContext, useContext, useReducer } from "react"

const initialState = {
  animalDetails: {
    loading: false,
    error: null,
    data: null,
  },
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_ERROR_ANIMAL_DETAILS":
      return {
        ...state,
        animalDetails: { ...state.animalDetails, error: action.payload },
      }
    case "SET_LOADING_ANIMAL_DETAILS":
      return {
        ...state,
        animalDetails: { ...state.animalDetails, loading: action.payload },
      }
    case "SET_ANIMAL_DETAILS":
      return {
        ...state,
        animalDetails: { ...state.animalDetails, data: action.payload },
      }
    default:
      throw Error(`The action type '${action.type}' is not defined`)
  }
}

export const AnimalLocationContext = createContext()

export function AnimalLocationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  async function setAnimalDetails() {
    dispatch({ type: "SET_LOADING_ANIMAL_DETAILS", payload: true })

    setTimeout(() => {
      const animalDetails = {
        description: "description",
        address: "address",
        pictureUrl: "pictureUrl",
      }

      dispatch({ type: "SET_ANIMAL_DETAILS", payload: animalDetails })
      dispatch({ type: "SET_LOADING_ANIMAL_DETAILS", payload: false })
    }, 2000)
  }

  return (
    <AnimalLocationContext.Provider value={{ ...state, setAnimalDetails }}>
      {children}
    </AnimalLocationContext.Provider>
  )
}

export function useAnimalLocationContext() {
  const context = useContext(AnimalLocationContext)

  if (!context) {
    throw Error("useAnimalLocationContext must be under AnimalLocationProvider")
  }

  return context
}
