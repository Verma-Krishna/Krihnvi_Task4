import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button, ButtonGroup, Select } from "@mui/material";

export default function Header() {
    
  return (
    <>
      <header className=" mt-1 mx-10">
        <div className="row1 mx-4  flex justify-between"  >
          <h1  className="inline text-xl font-medium">Mambo</h1>
          <div className="head-content bg-white rounded-xl px-2 flex gap-1">
               <div className="flex items-center justify-center">
                  <button><img src="assets/Images/time.svg" className="w-5 " /></button>
                  <button  className="text-lg px-2"><span>|</span> Monday,5 Jul <span>|</span> </button>
                  <button className="text-lg pl-1">Breakfast </button>
               </div>
          </div>
          <button  className="text-white text-lg px-3 pb-2 rounded-lg	bg-blue-500"><span className=" text-white text-2xl ">+</span>New Reservation</button>
        </div>
        <div className="row2 flex justify-between items-center mt-2 mx-2" >
           <h3 className="font-medium text-lg text-gray-700  ">Guest list</h3>
          <div className=" flex gap-5">
            <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
           <input class="pl-8 pr-4 py-2 w-full text-sm text-gray-700" type="search" placeholder="Search..."/>
           </div>
            <img src="assets/Images/filter.png" alt=""  className="bg-gray-100 rounded mt-2 mr-6 w-6 h-6"/>
          </div>
        </div>
      </header>
      <hr  style={{border:"1px solid #cbd5e1"}}/>
    </>
  );
}
