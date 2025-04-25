import React from 'react'

const LocationSearchPanel = (props) => {

    const { setPanelOpen, setVehiclePanel } = props;

    const locations = [
        "S.F 512, sundar nagar, panki, kanpur, Uttar Pradesh",
        "S.F 510, sundar nagar, panki, kanpur, Uttar Pradesh",
        "S.F 445, sundar nagar, panki, kanpur, Uttar Pradesh",
        "S.F 489, sundar nagar, panki, kanpur, Uttar Pradesh",
    ]
  return (
    <div>
        {locations.map((location, index)=> {
            return (<div className='flex gap-3 items-center border-2 p-3 border-gray-100 active:border-black rounded-xl justify-start my-2' key={index} onClick={() => {
                setVehiclePanel(true)
                setPanelOpen(false)}}>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{location}</h4>
        </div>)
        })}
 
        {/* <div className='flex gap-3 items-center border-2 p-3 border-gray-100 active:border-black rounded-xl justify-start my-2'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>S.F 512, sundar nagar, panki, kanpur, Uttar Pradesh</h4>
        </div>
        <div className='flex gap-3 items-center border-2 p-3 border-gray-100 active:border-black rounded-xl justify-start my-2'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>S.F 512, sundar nagar, panki, kanpur, Uttar Pradesh</h4>
        </div>
        <div className='flex gap-3 items-center border-2 p-3 border-gray-100 active:border-black rounded-xl justify-start my-2'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>S.F 512, sundar nagar, panki, kanpur, Uttar Pradesh</h4>
        </div> */}
    </div>
  )
}

export default LocationSearchPanel