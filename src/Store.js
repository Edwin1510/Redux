import { configureStore } from "@reduxjs/toolkit";
import Countreducer from "./Reducer/Countreducer"
const Store = configureStore({
    reducer: {
        Countreducer
    },
    devTools: true,
})

export default Store
