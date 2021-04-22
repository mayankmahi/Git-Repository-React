import { configureStore } from '@reduxjs/toolkit'
import repoReducer from "../modules/repositories/repoSlice";
import issueReducer from "../modules/issues/issueSlice";
import commentReducer from "../modules/comments/commentsSlice";


export default configureStore({
  reducer: {
    repos: repoReducer,
    issues: issueReducer,
    comments: commentReducer,
  },
})