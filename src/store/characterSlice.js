import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};
//const url = `https://rickandmortyapi.com/api/character?page=4`;

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (count) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${count}`);
    if (!response.ok) return;

    return response.json();
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    //        addCharacters: (state, { payload }) => {
    //            return payload;
    //        }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addCharacters } = characterSlice.actions;

export default characterSlice.reducer;
