import { createSlice } from "@reduxjs/toolkit";

type SecretWordState = {
  value: string
}

const initialState: SecretWordState = {
  value: "python",
}

const secretWordSlice = createSlice({
  name: "secretWord",
  initialState,
  reducers: {
    handleSelected: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { handleSelected } = secretWordSlice.actions;

export default secretWordSlice.reducer;