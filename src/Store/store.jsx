import { configureStore } from "@reduxjs/toolkit";
import  DrawerActionsReducer  from "./ui-slice/UI-slice";
import WidgetActionsReducer from "./widget-slice/Widget-slice";

export const store = configureStore({
    reducer:{
        Drawer: DrawerActionsReducer,
        Widget: WidgetActionsReducer,
    }
})