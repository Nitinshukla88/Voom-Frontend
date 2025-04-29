import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 className="p-3 text-center top-0 absolute w-[93%]" onClick={()=> props.setconfirmRidePanel(false)}><i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
        <div className='flex flex-col gap-2 justify-between items-center'>
            <img src='https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg' className='h-20'/>
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-2 border-b-1'>
                    <i className="text-lg ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-2 border-b-1'>
                    <i className="ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-2'>
                    <i className="ri-money-rupee-circle-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>$193.39</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <button className='w-full bg-green-600 font-semibold text-white p-2 rounded-lg mt-5' onClick={()=> {
                props.setVehicleFound(true)
                props.setconfirmRidePanel(false)
            }}>Confirm</button>
        </div>
        
    </div>
  )
}

export default ConfirmRide