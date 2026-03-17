import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Home,
  Settings,
  User,
  LogOut,
  LayoutDashboard,
  Menu,
  Hospital,
  Book,
  Monitor,
  List,
  ListStart,
} from "lucide-react";
import { AuthContext } from "../context/LoginContext";

const ReceptionistLayout = () => {
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const { user } = useContext(AuthContext);

  const menuItems = [
    { name: "Queue (manage)", path: "", icon: <ListStart size={10} /> },
    { name: "Display", path: "display", icon: <Monitor size={10} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-slate-900 font-sans">
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-emerald-800 border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-white">Clinic Queue</h2>
            <p className="text-white text-sm">{user?.clinicName}</p>
            <span className="text-sm text-white rounded-xl bg-gray-100/50 p-1">
              Receptionist
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition-colors">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 text-white shadow-md rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-50/25 font-medium"
                        : "text-gray-500 hover:bg-gray-100/50"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors text-sm font-medium"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            <Outlet /> {/* This is where child routes will render */}
          </div>
        </main>

        {/* Footer */}
        <footer className="h-12 bg-white border-t border-gray-200 flex items-center justify-center text-sm text-gray-400">
          &copy; 2026 Your Brand Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default ReceptionistLayout;
