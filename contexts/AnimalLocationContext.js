import { createContext, useContext, useReducer } from "react"

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

  /**
   * TODO: Implement backend.
   */
  async function setAnimalDetails(coordinate) {
    dispatch({ type: "SET_LAST_PRESSED_COORDINATE", payload: coordinate })

    let animalDetails = {}

    if (coordinate.latitude === 37.78825) {
      animalDetails = {
        description:
          "Visto em frente ao Extra Abolição, aparenta estar magro e possuía uma coleira preta",
        address: "R. da Abolição, 2013 - Pte. Preta, Campinas - SP",
        pictureUrl:
          "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg",
      }
    } else {
      animalDetails = {
        description: "Cão pequeno, aparenta ter dono, estava super cuidado",
        address:
          "Av. Cônego Antônio Roccato, 593 - Jardim Santa Monica, Campinas - SP",
        pictureUrl:
          "https://static8.depositphotos.com/1004915/814/i/450/depositphotos_8141343-stock-photo-sad-dog.jpg",
      }
    }

    dispatch({ type: "SET_LOADING_ANIMAL_DETAILS", payload: true })

    setTimeout(() => {
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
