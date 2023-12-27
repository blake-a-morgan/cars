import { configureStore } from "@reduxjs/toolkit";
import { carsReducer,addCar,removeCar,changeSearchTerm } from "./Slices/carsSlice";
import { formReducer, changeName, changeCost } from "./Slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
};