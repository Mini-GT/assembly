import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomWord } from "../utils/getRandomWords";
import { words } from "../words";

const secretWord = getRandomWord(words)

const secretWordObj = secretWord.split("").map(letter => ({
  letter: letter, 
  isHidden: true
}))

type SecretWordState = {
  value: Array<{
    letter: string,
    isHidden: boolean
  }>
}

const initialState: SecretWordState = {
  value: secretWordObj
}

const secretWordSlice = createSlice({
  name: "secretWord",
  initialState,
  reducers: {
    handleSelected: (state, action: PayloadAction<string>) => {
      state.value = state.value.map(obj => {
        if(obj.letter.toLocaleLowerCase() === action.payload.toLocaleLowerCase()) {
          return {...obj, isHidden: !obj.isHidden}
        }
        return obj
      })
    }
  },
})

export const { handleSelected } = secretWordSlice.actions;

export default secretWordSlice.reducer;