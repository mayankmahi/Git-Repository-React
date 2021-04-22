import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getIssue = createAsyncThunk(
  'issue/getIssues',
  async ({repoFullName,limit,page }) => {
    return fetch(
      `https://api.github.com/repos/${repoFullName}/issues?per_page=${limit}&page=${page}`
    ).then((res) => res.json())
  }
)

export const getIssueByNumber = createAsyncThunk(
  'issue/getById',
  async({repoFullName, issueNumber}) =>{
    return fetch (
      `https://api.github.com/repos/${repoFullName}/issues/${issueNumber}`
    ).then((res) => res.json())
  }
)

const IssueSlice = createSlice({
  name: 'issue',
  initialState: {
    data: [],
    status: null,
    currentIssue:null
  },
  reducers: {
    setCurrentIssue : (state, {payload}) => {
     state.currentIssue = payload.issue
    }
  },
  extraReducers: {
    [getIssue.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getIssue.fulfilled]: (state, { payload }) => {
      state.data = payload
      state.status = 'success'
    },
    [getIssue.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [getIssueByNumber.pending]: (state,action) =>{
      state.status = 'loading'
    },
    [getIssueByNumber.fulfilled]: (state,{payload})=>{
      state.currentIssue = payload;
      state.status = 'success';
    },
    [getIssueByNumber.rejected]: (state,action)=>{
      state.status = 'failed'
    }
  },
})

export const {setCurrentIssue} = IssueSlice.actions

export default IssueSlice.reducer