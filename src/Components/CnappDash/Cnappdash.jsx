import { Button, IconButton, Option, Select } from '@material-tailwind/react'
import React from 'react'
import SelectDropdown from './SelectDropdown'
import { ArrowPathIcon, PlusIcon } from '@heroicons/react/24/solid'
import { DrawerPlacement } from '../DrawerAddWidget/Drawerplacement'
import { useDispatch, useSelector } from 'react-redux'
import { DrawerActions } from '../../Store/ui-slice/UI-slice'

const Cnappdash = () => {
  
  const isDrawer = useSelector(state => state.Drawer.isOpen)
  const dispatch = useDispatch()

  console.log(isDrawer)

  const openHandler =()=>{
    dispatch(DrawerActions.openDrawer())
  }

  return (
    <div className="flex justify-between items-center p-4 ">
    <h1 className="text-xl ml-4 font-bold text-foreground">CNAPP Dashboard</h1>
    <div className="flex items-center space-x-4">
      <Button 
      onClick={openHandler}
      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80">
        Add widget
            <IconButton variant="text" color='black' className='h-5' >
                 <PlusIcon className="h-4 w-4 text-black -500" />
            </IconButton>
       </Button>
       
       <div>
       {isDrawer && <DrawerPlacement/>}
       </div>
      <div className='flex gap-3'>
        <IconButton variant='text' color='black' className='bg-white'>
          <ArrowPathIcon className="h-6 w-6 text-black-500" />
        </IconButton>
        <SelectDropdown/>
      </div>
    </div>
  </div>
  )
}

export default Cnappdash
