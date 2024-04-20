import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
            {
                inputnumber: 1,
                name: "Horizontal offset",
                value: 0,
                type: "range",
                minmax: [-250, 250],
            },
            {
                inputnumber: 2,
                name: "Vertical offset",
                value: 0,
                type: "range",
                minmax: [-250, 250],
            },
            {
                inputnumber: 3,
                name: "Blur radius",
                value: 15,
                type: "range",
                minmax: [0, 250],
            },
            {
                inputnumber: 4,
                name: "Spread radius",
                value: -3,
                type: "range",
                minmax: [-250, 250],
            },
            {
                inputnumber: 5,
                name: "Color",
                value: "#4f4f4f",
                type: "color",
            },
        ],
    },
]

export const shadowslice = createSlice({
    name: "shadow",
    initialState,
    reducers: {
        removeshadow: (state, action) => {
            const shadowindextoremove = state.findIndex(shadow => shadow.id === action.payload)
            state.splice(shadowindextoremove, 1)
        },

        addshadow: (state, action) => {state.push({
            id: nanoid(8),
            active: true,
            inset: false,
            inputs: [
                {
                    inputnumber: 1,
                    name: "Horizontal offset",
                    value: 0,
                    type: "range",
                    minmax: [-250, 250],
                },
                {
                    inputnumber: 2,
                    name: "Vertical offset",
                    value: 0,
                    type: "range",
                    minmax: [-250, 250],
                },
                {
                    inputnumber: 3,
                    name: "Blur radius",
                    value: 15,
                    type: "range",
                    minmax: [0, 250],
                },
                {
                    inputnumber: 4,
                    name: "Spread radius",
                    value: -3,
                    type: "range",
                    minmax: [-250, 250],
                },
                {
                    inputnumber: 5,
                    name: "Color",
                    value: "#4f4f4f",
                    type: "color",
                },
            ],
        })},

        updateshadowvalue: (state, action) => {
            const currentshadow = state.find(
                shadow => shadow.id === action.payload.shadowid
            )
            const currentinput = currentshadow.inputs.find(
                input => input.inputnumber === action.payload.inputnumber
            )

            currentinput.value = action.payload.value
        },
        
        updatecheckbox: (state, action) => {
            const currentshadow = state.find(
                shadow => shadow.id === action.payload.shadowid
            )
            currentshadow[action.payload.name] = !currentshadow[action.payload.name]
        },
    },
});

export const { updatecheckbox, updateshadowvalue, addshadow, removeshadow } =
    shadowslice.actions;
export default shadowslice.reducer;

