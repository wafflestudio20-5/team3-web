import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SliceState = {
  num: number;
};

const initialState: SliceState = {
  // DESC: 초기값 지정, 객체 형태
  num: 0,
};

const counterSlice = createSlice({
  name: 'counter', // DESC: 직접 사용할 reducer 이름을 정의
  initialState,
  reducers: {
    // DESC: state 변경해주는 함수 등록, 여러 개 가능
    increment: state => {
      state.num += 1;
    },
    decrement: state => {
      state.num -= 1;
    },
    // DESC: payload가 있는 경우
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.num += action.payload;
    },
  },
  /*
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.entities[payload.id] = payload
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error
      }
    })
  },
  */
});

/*
// DESC: 🚀비동기 처리를 위한 createAsyncThunk 예시

interface MyKnownError {
  errorMessage: string
  // ...
}

interface UserAttributes {
  id: string
  first_name: string
  last_name: string
  email: string
}

const updateUser = createAsyncThunk<
  // Return type of the payload creator
  MyData,
  // First argument to the payload creator
  UserAttributes,
  // Types for ThunkAPI
  {
    extra: {
      jwt: string
    }
    rejectValue: MyKnownError
  }
>('users/update', async (user, thunkApi) => {
  const { id, ...userData } = user
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${thunkApi.extra.jwt}`,
    },
    body: JSON.stringify(userData),
  })
  if (response.status === 400) {
    // Return the known error for future handling
    return thunkApi.rejectWithValue((await response.json()) as MyKnownError)
  }
  return (await response.json()) as MyData
})

*/

// DESC: Action creators are generated for each case reducer function
// DESC: 작성한 기능 사용, counterSlice안에 actions에 담겨 있음
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
