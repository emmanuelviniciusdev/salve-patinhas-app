import { createContext, useContext, useReducer } from "react"
import appAxios from "../abstractions/appAxios"

const initialState = {
  animalDetails: {
    loading: false,
    error: null,
    data: null,
  },
  lastPressedCoordinate: null,
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_LAST_PRESSED_COORDINATE":
      return { ...state, lastPressedCoordinate: action.payload }
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

  async function setAnimalDetails(coordinate) {
    dispatch({ type: "SET_LAST_PRESSED_COORDINATE", payload: coordinate })

    dispatch({ type: "SET_LOADING_ANIMAL_DETAILS", payload: true })

    try {
      const response = await appAxios.get("reported-animal-details", {
        params: {
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        },
      })
      dispatch({ type: "SET_ANIMAL_DETAILS", payload: response.data })
    } catch {
      dispatch({
        type: "SET_ERROR_ANIMAL_DETAILS",
        payload:
          "Ocorreu um erro ao tentar obter os detalhes do animal reportado",
      })
    } finally {
      dispatch({ type: "SET_LOADING_ANIMAL_DETAILS", payload: false })
    }
  }

  function unsetAnimalDetails() {
    dispatch({ type: "SET_LOADING_ANIMAL_DETAILS", payload: false })
    dispatch({ type: "SET_LAST_PRESSED_COORDINATE", payload: null })
    dispatch({ type: "SET_ANIMAL_DETAILS", payload: null })
  }

  return (
    <AnimalLocationContext.Provider
      value={{ ...state, setAnimalDetails, unsetAnimalDetails }}
    >
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
