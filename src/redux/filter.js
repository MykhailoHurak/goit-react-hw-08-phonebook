import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Hw-06 ================================================================================

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     value: '',
// };

// export const filterSlice = createSlice({
//     name: 'filter',
//     initialState,
//     reducers: {
//         setFilter: (state, action) => {
//             state.value = action.payload;
//         },
//     },
// });

// export const { setFilter } = filterSlice.actions;

// export default filterSlice.reducer;