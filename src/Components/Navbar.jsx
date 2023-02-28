import React , { useState, useEffect }  from "react";
import data from "../Data/Data";
const Navbar = () => {

    const [count,setCount] = useState(data.data.streak)

    useEffect(()=>{
        setCount(data.data.streak)
    },[data.data.streak])

    return(
        <div>
            <div className="flex content-center h-12 bg-white drop-shadow flex-wrap justify-between sm:justify-around font-sans text-slate-600">
              <div className=" justify-self-start ml-3 sm:ml-0 sm:hidden ">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>

              </div>
              <div className="nav-left-content flex space-x-5">
               <img className="w-6 h-6 object-contain" src="https://leetcode.com/_next/static/images/logo-ff2b712834cf26bf50a5de58ee27bcef.png" alt="logo" />
               <ul className="hidden sm:flex sm:flex-row sm:space-x-5">
                <li className="text-base hover:text-slate-900 cursor-pointer">Explore</li>
                <li className="text-base hover:text-slate-900 cursor-pointer">Problems</li>
                <li className="text-base hover:text-slate-900 cursor-pointer">Contest</li>
                <li className="text-base hover:text-slate-900 cursor-pointer">Discuss</li>
                <li className="text-base hover:text-slate-900 cursor-pointer">Interview</li>
                <li className="text-base hover:text-slate-900 cursor-pointer">Store</li>
               </ul>
              </div>
              <div className="nav-right-content flex space-x-5 flex-wrap content-center">
                <div className="flex space-x-5 ">
                 <div className="mr-3 sm:mr-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:bg-gray-100 rounded-md">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                 </div>
                 <div className="hidden sm:flex sm:content-center sm:space-x-0.5 sm:hover:bg-gray-100 sm:rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                  <span className=" text-lg">{count}</span>
                 </div>
                </div>
                    <div className="hidden sm:flex sm:icon sm:rounded-full sm:w-7 sm:h-7 ">
                        <img className="object-contain rounded-full" src="https://assets.leetcode.com/users/sawankarya2000/avatar_1627282737.png" alt="user" />
                    </div>

              </div>
            </div>
        </div>
    )
}

export default Navbar