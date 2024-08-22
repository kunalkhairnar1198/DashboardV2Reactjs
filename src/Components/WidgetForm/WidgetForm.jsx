import React, { useState } from "react";
import {
  Input,
  Button,
  Dialog,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { DrawerActions } from "../../Store/ui-slice/UI-slice";
import { WidgetSliceActions } from "../../Store/widget-slice/Widget-slice";

function WidgetForm() {
  const dispatch = useDispatch();
  const isOpenWidget = useSelector((state) => state.Drawer.isOpenwid);
  const Data = useSelector((state) => state.Widget.widgets);
  console.log(Data);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });

  const toggleHandler = () => {
    dispatch(DrawerActions.toggleWidget());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form Data:", formData.category);

    dispatch(WidgetSliceActions.addWidget({
      category: formData.category, 
      formData
    }))
    toggleHandler(); // Close the dialog after submission
  };

  return (
    <>
      <Dialog size="sm" open={isOpenWidget} handler={toggleHandler} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Widget Form
          </Typography>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Widget Name
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Widget name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Widget Description
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Enter description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="w-72">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Select Widget
            </Typography>
            <Select
            label="Select Version"
            size="lg"
            value={formData.category}
            onChange={handleSelectChange}
            >
            <Option value="CSPM Executive Dashboard">CSPM Executive Dashboard</Option>
            <Option value="CWP Executive Dashboard">CWP Executive Dashboard</Option>
            <Option value="Registry Executive Dashboard">Registry Executive Dashboard</Option>
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default WidgetForm;



