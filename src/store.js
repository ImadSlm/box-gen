import {configureStore} from "@reduxjs/toolkit"
import shadows from "./features/shadows"
import boxproperties from "./features/boxproperties"

export const store = configureStore({
    reducer: {
        shadows,
        boxproperties,
    }
})