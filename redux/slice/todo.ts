import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../services/auth';
import type { RootState } from '../store';

type TodoState = {
  list: any[];
};

const slice = createSlice({
  name: 'todo',
  initialState: { list: [] } as TodoState,
  reducers: {
    addTodo: (state, { payload: data }: PayloadAction<string>) => {
      state.list = [...state.list, { data, id: new Date().getTime().toString() }];
    },
    removeTodo: (state, { payload: id }: PayloadAction<{ id: string }>) => {
      console.log(id);
      state.list = state.list.filter((newItem) => newItem.id !== id);
    }
  }
});

export const { addTodo, removeTodo } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
