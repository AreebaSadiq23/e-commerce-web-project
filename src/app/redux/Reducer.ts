import { createSlice} from '@reduxjs/toolkit';

interface YourState {
  value: number;
}

const initialState: YourState = {
  value: 0,
};

const yourSlice = createSlice({
  name: 'yourReducer',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = yourSlice.actions;
export default yourSlice.reducer;
