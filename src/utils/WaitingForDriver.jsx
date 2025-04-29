import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
        <h5 className="p-3 text-center top-0 absolute w-[93%]" onClick={()=> props.setWaitingForDriver(false)}><i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>
        <div className='flex items-center justify-between'>
          <img src='https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg' className='h-14'/>
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Nitin</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP78 GK2388</h4>
            <p className='text-sm text-gray-600'>Morris Garages FantomG3</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 justify-between items-center'>
            
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-2 border-b-1 border-gray-400'>
                    <i className="text-lg ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-2 border-b-1 border-gray-400'>
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
        </div>
        
    </div>
  )
}

export default WaitingForDriver