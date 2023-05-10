import { createAsyncThunk } from '@reduxjs/toolkit';

export function fetchCount(amount = 1) {
  return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500));
}

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount) => {
  const response = await fetchCount(amount);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const addTodo = (data) => {
  return {
    type: Add_Todo,
    payload: {
      data: data,
      id: new Date().getTime().toString()
    }
  };
};

export const removeTodo = (id) => {
  return {
    type: Delete_Todo,
    id
  };
};

export const Add_Todo = 'Add_Todo';
export const Delete_Todo = 'Delete_Todo';
