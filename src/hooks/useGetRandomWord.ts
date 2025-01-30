import { useSelector } from "react-redux"
import { RootState } from "../ReduxStore/store"

export const useRandomWord = () => {
  return useSelector((state: RootState) => state.secretWord.value)
}