import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    termsAccepted: false,
};

export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        acceptTerms: state => {
            state.termsAccepted = true;
        },
    },
});

export const { acceptTerms } = authSlice.actions;

export default authSlice.reducer;
