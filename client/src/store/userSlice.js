import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserProfile = createAsyncThunk(
  "userProfile/get",
  async (userInfo, { dispatch, getState }) => {
    return axios.get("");
  }
)

const userSlice = createSlice({
  name: "budgets",
  initialState: {

    status: null,
    error: null
  },
  reducers: {

  },
  extraReducers: {
    [getUserProfile.pending]: (state, action) => {
      state.status = "loading"
      state.error = null;
    },
    [getUserProfile.fulfilled]: (state, action) => {
      state.status = "success";
      state.budgets = action.payload;
    },
    [getUserProfile.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    }
  }
})

export default userSlice.reducer;