import React, { useState, useEffect } from 'react';
import { Avatar, Input, IconButton, Navbar, Typography } from '@material-tailwind/react';
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useSelector } from 'react-redux';

const Mainnavigation = () => {
  const [searchData, setSearchData] = useState('');
  const [filteredWidgets, setFilteredWidgets] = useState([]);
  const datas = useSelector((state) => state.Widget.widgets);

  const allWidgets = datas.categories.reduce((acc, category) => {
    return [...acc, ...category.widgets];
  }, []);

  useEffect(() => {
    const filtered = allWidgets.filter(widget =>
      widget.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilteredWidgets(filtered);
  }, [searchData]);

  const searchHandler = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div >
    <Navbar className="sticky top-0 z-10 mx-auto rounded-none from-blue-gray-900 to-blue-gray-800 px-4 py-3 max-w-full">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          color='black'
          className="mr-2 ml-3 cursor-pointer font-bold "
        >
          <div className="text-lg font-semibold text-foreground">Home{' > '}Dashboard</div>
        </Typography>
        
        <div className="ml-auto flex gap-2 md:mr-4">
          <Input
            type="text"
            size='sm'
            placeholder="Search widgets..."
            value={searchData}
            onChange={searchHandler}
            className="min-w-fit p-0 border-t-blue-gray-200 focus:border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text">
            <Cog6ToothIcon className="h-6 w-6" />
          </IconButton>
          <IconButton variant="text">
            <BellIcon className="h-6 w-6" />
          </IconButton>
        </div>

        <Avatar
          variant="circular"
          size="sm"
          alt="User Avatar"
          className="border border-gray-900 p-0.5"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </div>
    </Navbar>
    {searchData && (
    <div className="absolute top-0 mt-14 w-80 left-1/2 transform -translate-x-1/2 p-4 bg-white shadow-md border border-gray-200 z-10">
      {filteredWidgets.length > 0 ? (
        <ul>
          {filteredWidgets.map(widget => (
            <li key={widget.id} className="p-2 border-b border-gray-200">
              {widget.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No widgets found.</p>
      )}
    </div>
  )}
    </div>
  );
};

export default Mainnavigation;
