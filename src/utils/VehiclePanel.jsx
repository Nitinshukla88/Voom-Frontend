import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className="p-3 text-center top-0 absolute w-[93%]" onClick={()=> props.setVehiclePanel(false)}><i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div className="flex w-full items-center p-3 mb-2 justify-between border-2 border-gray-300 focus:border-black rounded-xl" tabIndex={0} onClick={()=> props.setconfirmRidePanel(true)}>
          <img src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" className="h-10" alt="img"/>
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">$192.30</h2>
        </div>
        <div className="flex w-full items-center p-3 mb-2 justify-between border-2 border-gray-300 focus:border-black rounded-xl" tabIndex={0} onClick={()=> props.setconfirmRidePanel(true)}>
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" className="h-10" alt="img"/>
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberAuto
              <span>
                <i className="ri-user-3-fill">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">5 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable Auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">$118.68</h2>
        </div>
        <div className="flex w-full items-center p-3 mb-2 justify-between border-2 border-gray-300 focus:border-black rounded-xl" tabIndex={0} onClick={()=> props.setconfirmRidePanel(true)}>
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" className="h-10" alt="img"/>
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto
              <span>
                <i className="ri-user-3-fill">2</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable Motorcycle rides</p>
          </div>
          <h2 className="text-lg font-semibold">$65.70</h2>
        </div>
    </div>
  )
}

export default VehiclePanel