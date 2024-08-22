import React from 'react';
import { Card, CardBody, Typography, Button, IconButton } from "@material-tailwind/react";
import CnapChart from './CnapChart';
import RiskChart from './RiskChart';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { DrawerActions } from '../../../Store/ui-slice/UI-slice';
import WidgetForm from '../../WidgetForm/WidgetForm';
import { WidgetSliceActions } from '../../../Store/widget-slice/Widget-slice';

const CnapCard = () => {

  const dispatch =useDispatch()
  const isOpenWidget = useSelector(state => state.Drawer.isOpenwid)
  const data = useSelector(state => state.Widget.widgets)
  const toggeleHandler =()=>{
      dispatch(DrawerActions.toggleWidget())
  }

 
  const filterData = data.categories.find(
      (item) => item.name === "CSPM Executive Dashboard"
    )

  console.log(filterData.widgets)

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
    <>
      <h1 className='ml-11 font-bold text mb-3'>CSPM Executive Dashboard</h1>
      <div className='flex flex-wrap justify-center gap-4 p-4'>
        <Card className="w-full sm:w-80 md:w-96 border" variant='filled'>
          <Typography variant="h6" color="blue-gray" className="mt-2 ml-3">
            Cloud Account
          </Typography>
          <CardBody>
            <Typography>
              <CnapChart />
            </Typography>
          </CardBody>
        </Card>

        <Card className="w-full sm:w-80 md:w-96 border" variant='filled'>
          <Typography variant="h6" color="blue-gray" className="mt-2 ml-3">
            Cloud Account Risk Assessment
          </Typography>
          <CardBody>
            <Typography>
              <RiskChart />
            </Typography>
          </CardBody>
        </Card>
     
      {/* all data map */}
        {MapData}

        <Card className=" w-full sm:w-80 md:w-96 border" variant='filled'>
          <CardBody className="flex justify-center items-center h-full">
            <Button
            onClick={toggeleHandler}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 flex items-center justify-center">
              Add widget
              <IconButton variant="text" color="black" className="h-5 ml-2">
                <PlusIcon className="h-4 w-4 text-black-500" />
              </IconButton>
            </Button>
          </CardBody>
        </Card>
      </div>
      <div>
       {isOpenWidget && <WidgetForm/>}
      </div>
    </>
  )
}

export default CnapCard;
