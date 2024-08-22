import {   PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Button, Card, CardBody, IconButton, Typography } from '@material-tailwind/react';
import React from 'react';
import ProgressBar from './ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { WidgetSliceActions } from '../../Store/widget-slice/Widget-slice';

const RegCard = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.Widget.widgets)  
  console.log(data)
  
  const filterData = data.categories.find(
    (item) => item.name === "Registry Executive Dashboard"
  )

  const onDeleteHandler =(id, item)=>{
    dispatch(WidgetSliceActions.removeWidget({
      categoryid: id, 
      item
    }))

    console.log('work',id,item)
  }

  const MapData = filterData.widgets.map((item)=>(
    <Card key={item.id} className="relative w-full sm:w-80 md:w-96 border" variant="filled">
    <Typography variant="h6" color="blue-gray" className="mt-2 ml-2">
      {item.name}
    </Typography>
    <div className="absolute top-2 right-2">
      <IconButton variant="text" onClick={()=>onDeleteHandler(filterData.id, item)}>
        <XMarkIcon className="h-6 w-6 text-red-500" />
      </IconButton>
    </div>
    <CardBody>
      <Typography>
        <h2>{item.name}</h2>
        <h3>{item.description}</h3>
      </Typography>
    </CardBody>
  </Card>
  ))
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
        <Card className="w-full sm:w-80 md:w-96 border" variant="filled">
        <Typography variant="h6" color="blue-gray" className="mt-2 ml-3">
          Image Risk Assesment
        </Typography>
        <CardBody className="flex flex-col"> 
          <div className="flex-grow"> 
            <ProgressBar />
          </div>
        </CardBody>
      </Card>

        <Card className="w-full sm:w-80 md:w-96 border" variant='filled'>
          <Typography variant="h6" color="blue-gray" className="mt-2 ml-3">
            Image security Issue
          </Typography>
          <CardBody>
              <ProgressBar/>
          </CardBody>
        </Card>

        {MapData}

      <Card className="flex mt-1 w-full sm:w-80 md:w-96 border" variant="filled">
        <CardBody className="flex justify-center items-center h-full">
          <Button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 flex items-center justify-center">
            Add widget
            <IconButton variant="text" color="black" className="h-5 ml-2">
              <PlusIcon className="h-4 w-4 text-black-500" />
            </IconButton>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegCard;
