import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const searchRepo = createAsyncThunk(
  'repo/searchRepo',
  async ({ query,limit,page }) => {
    return fetch(
      `https://api.github.com/search/repositories?q=${query}&per_page=${limit}&page=${page}`
    ).then((res) => res.json())
  }
)

const repoSlice = createSlice({
  name: 'repo',
  initialState: {
    data: {},
    status: null,
    currentRepo: null
  },
  reducer: {
    setCurrentRepo: (state, {payload}) => {
      state.currentRepo = payload.repo
    }
  },
  extraReducers: {
    [searchRepo.pending]: (state, action) => {
      state.status = 'loading'
    },
    [searchRepo.fulfilled]: (state, { payload }) => {
      state.data = payload
      state.status = 'success'
    },
    [searchRepo.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default repoSlice.reducer