import React, { useContext, useEffect, useRef, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../utils/LocationSearchPanel";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const handleLogout = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/logout`,
      {},
      { withCredentials: true }
    );
    if (response.status === 200) {
      setUser(null);
      localStorage.removeItem("voom-user");
      console.log("voom-user removed by logout route");
      navigate("/user/login");
    }
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform : "translateY(0%)",
      });
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform : "translateY(100%)",
      });
    }
  }, [vehiclePanel])

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <p className="ml-8 text-5xl font-bold absolute">Voom</p>
      <div className="w-screen h-screen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUia_MZ68vuezI9kMgNBLfKqWbKlQU9U2Zbg&s"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-end absolute h-screen top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            className="absolute opacity-0 top-6 right-6 text-2xl"
            onClick={() => setPanelOpen(false)}
            ref={panelCloseRef}
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              type="text"
              placeholder="Enter a pick-up location"
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              onClick={() => setPanelOpen(true)}
            ></input>
            <input
              type="text"
              placeholder="Enter your destination"
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
            ></input>
          </form>
        </div>
        <div className=" bg-white h-0 p-5" ref={panelRef}>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14" ref={vehiclePanelRef}>
        <h5 className="p-3 text-center top-0 absolute w-[93%]"><i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div className="flex w-full items-center p-3 mb-2 justify-between border-2 border-gray-300 focus:border-black rounded-xl" tabIndex={0}>
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
        <div className="flex w-full items-center p-3 mb-2 justify-between border-2 border-gray-300 focus:border-black rounded-xl" tabIndex={0}>
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
        <div className="flex w-full items-center p-3 mb-2 justify-between border-2 border-gray-300 focus:border-black rounded-xl" tabIndex={0}>
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
    </div>
  );
};

export default Home;
