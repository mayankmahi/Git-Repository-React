import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const getComments = createAsyncThunk(
  'comment/getComments',
  async({repoFullName,issueNumber}) =>{
    return fetch (
      `https://api.github.com/repos/${repoFullName}/issues/${issueNumber}/comments`
    ).then((res) => res.json())
  }
)

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    data: "hello",
    status: null,
  },
  extraReducers: {
    [getComments.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getComments.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.data = payload
      state.status = 'success'
    },
    [getComments.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default commentSlice.reducer