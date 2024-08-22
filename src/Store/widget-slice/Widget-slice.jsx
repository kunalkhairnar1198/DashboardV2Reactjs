import { createSlice } from "@reduxjs/toolkit";

const DashbordWidgetData = {
  categories: [
    {
      id: "01",
      label:'CSPM',
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "01",
          name: "Widget A",
          description: "This is Widget A",
          category: "CSPM Executive Dashboard",
        },
        {
          id: "02",
          name: "Widget B",
          description: "This is Widget B",
          category: "CSPM Executive Dashboard",
        },
      ],
    },
    {
      id: "02",
      label:'CWP',
      name: "CWP Executive Dashboard",
      widgets: [
        {
          id: "01",
          name: "Widget cwp A",
          description: "This is Widget A",
        },
        {
          id: "02",
          name: "Widget cwp B",
          description: "This is Widget B",
        },
      ],
    },
    {
      id: "03",
      label:'Registry',
      name: "Registry Executive Dashboard",
      widgets: [
        {
          id: "01",
          name: "Widget Registery A",
          description: "This is Widget A",
        },
        {
          id: "02",
          name: "Widget Registery B",
          description: "This is Widget B",
        },
      ],
    },
  ],
};

const initialWidgetState = {
  widgets: DashbordWidgetData,
};

const WidgetSlice = createSlice({
  name: "widget",
  initialState: initialWidgetState,
  reducers: {
    addWidget(state, action) {
      const { formData, category } = action.payload;
      
      const categori = state.widgets.categories.find(cat => cat.name === category);
      if (categori) {
        categori.widgets.push(formData);
      }
      console.log(formData, categori, state.widgets.categories)
    },

    removeWidget(state, action) {
      const { categoryid, item } = action.payload;

      const category = state.widgets.categories.find(cat => cat.id === categoryid);
      console.log(category)
      
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== item.id);
      }
      console.log(categoryid, item)
    },
  },
});

export const WidgetSliceActions = WidgetSlice.actions;
export default WidgetSlice.reducer;
