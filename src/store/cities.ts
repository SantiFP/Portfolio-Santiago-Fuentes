import { createSlice } from "@reduxjs/toolkit";
import CityModel from "../models/CityModel";

interface Cities {
  cities: CityModel[];
}

const initialState: Cities = {
  cities: [],
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    newCity(state,action){
      state.cities = action.payload
    },
    removeCity(state,action){
      state.cities = state.cities.filter(city => city.id !== action.payload)
    },
    fromFav(state, action) {
      state.cities = action.payload;
    },
    newFav(state, action) {
      state.cities = state.cities.map((el) => {
        if (el.cityName === action.payload) {
          return { ...el, fav: true };
        } else {
          return el;
        }
      });
    },
    deleteFav(state,action){
      state.cities = state.cities.map((el) => {
        if (el.cityName === action.payload) {
          return { ...el, fav: false };
        } else {
          return el;
        }
      });
    }
  },
});

export const citiesActions = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;
