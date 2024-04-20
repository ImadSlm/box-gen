import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        inputnumber: 1,
        name: "Border radius",
        value: 25,
        type: "range",
        minmax: [0, 250],
    },
    {
        inputnumber: 2,
        name: "Height",
        value: 250,
        type: "range",
        minmax: [0, 500],
    },
    {
        inputnumber: 3,
        name: "Width",
        value: 250,
        type: "range",
        minmax: [0, 500],
    },
    {
        inputnumber: 4,
        name: "Background color",
        value: "#fff",
        type: "color",
    },
];

export const boxslice = createSlice({
    name: "boxproperties",
    initialState,
    reducers: {
        updateboxvalue: (state, action) => {
            state.find(
                (el) => el.inputnumber === action.payload.inputnumber
            ).value = action.payload.value;
        },
    },
});

export const { updateboxvalue } = boxslice.actions;
export default boxslice.reducer;
