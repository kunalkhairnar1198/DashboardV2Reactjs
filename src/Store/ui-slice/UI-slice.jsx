import { createSlice } from "@reduxjs/toolkit";

const initialUiState ={
    isOpen :false,
    isOpenwid:false,
}

const Draweropenclose = createSlice({
    name:'Drawer',
    initialState:initialUiState,
    reducers:{
          openDrawer: (state) => {
            state.isOpen = true;
          },
          closeDrawer: (state) => {
            state.isOpen = false;
          },
          toggleDrawer: (state) => {
            state.isOpen = !state.isOpen;
          },
          toggleWidget:(state)=>{
            state.isOpenwid = !state.isOpenwid
          }
    }
})
export const DrawerActions = Draweropenclose.actions;
export default Draweropenclose.reducer;