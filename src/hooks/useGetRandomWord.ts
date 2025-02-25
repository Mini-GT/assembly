import { useSelector } from "react-redux"
import { RootState } from "../Redux/store"

export const useRandomWord = () => {
  return useSelector((state: RootState) => state.secretWord.value)
}