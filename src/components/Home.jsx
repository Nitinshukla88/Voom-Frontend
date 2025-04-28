import React, { useContext, useEffect, useRef, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../utils/LocationSearchPanel";
import VehiclePanel from "../utils/VehiclePanel";
import ConfirmRide from "../utils/confirmRide";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const [confirmRidePanel, setconfirmRidePanel] = useState(false);

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

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform : "translateY(0%)",
      });
    }else{
      gsap.to(confirmRidePanelRef.current, {
        transform : "translateY(100%)",
      });
    }
  }, [confirmRidePanel])

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
      <div className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-12" ref={vehiclePanelRef}>
        <VehiclePanel  setconfirmRidePanel={setconfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-6 pt-12" ref={confirmRidePanelRef}>
        <ConfirmRide/>
      </div>
      <div className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        
      </div>
    </div>
  );
};

export default Home;
