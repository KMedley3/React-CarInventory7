import Modal from "./Modal"
import React, { useState } from 'react'
import { server_calls } from "../api/server";

function DataTable()  {
    let [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const getData = () => {
        const result = console.log(server_calls.get())
        console.log(result)
    }

  return (
    <>
        <Modal
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button 
                    className='p-3 bg-slate-300 m-3 rounded hover:bg-rose-950 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    New Car
                </button>
            </div>
            <button className='p-3 bg-slate-300 m-3 rounded hover:bg-rose-950 hover:text-white'>Update Car</button>
            <button className='p-3 bg-slate-300 m-3 rounded hover:bg-rose-950 hover:text-white'>Delete Car</button>
            
        </div>
        <button onClick={getData}>get Data</button>
    </>
  )
}

export default DataTable
