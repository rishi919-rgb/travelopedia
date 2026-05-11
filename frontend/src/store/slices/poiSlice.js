import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  pois: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Fetch POIs within a radius
export const getPOIsInRadius = createAsyncThunk(
  'poi/getInRadius',
  async ({ lat, lng, distance, category }, thunkAPI) => {
    try {
      let url = `/pois/radius/${lat}/${lng}/${distance}`;
      if (category) {
        url += `?category=${category}`;
      }
      const response = await api.get(url);
      return response.data.data; // The backend returns { count, data }
    } catch (error) {
      const message = error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Fetch all POIs
export const getAllPOIs = createAsyncThunk(
  'poi/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/pois');
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const poiSlice = createSlice({
  name: 'poi',
  initialState,
  reducers: {
    resetPOIState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
    },
    clearPOIs: (state) => {
      state.pois = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPOIsInRadius.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPOIsInRadius.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pois = action.payload;
      })
      .addCase(getPOIsInRadius.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllPOIs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPOIs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pois = action.payload;
      })
      .addCase(getAllPOIs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetPOIState, clearPOIs } = poiSlice.actions;
export default poiSlice.reducer;
