import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, FilePlus, Gauge, Zap } from "lucide-react";

const ConnectionNavbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="bg-blue-600 p-2.5 rounded-lg">
              <Zap className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-none">
                CIS
              </h1>

              <p className="text-xs text-gray-500 mt-1">
                Customer Information System
              </p>
            </div>
          </NavLink>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => toggleMenu("new")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <FilePlus size={17} />
                <span>New Connection</span>
                <ChevronDown size={15} className={`transition-transform ${openMenu==="new"?"rotate-180":""}`}/>
              </button>
              {openMenu === "new" && (
                <div>
                  <NavLink
                  to="/connection/new/lt"
                  onClick={()=>setOpenMenu(null)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    <Gauge size={16} />

                    <span>LT Connection</span>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ConnectionNavbar;
