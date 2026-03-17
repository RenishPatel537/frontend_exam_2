import React from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-2xl font-bold text-emerald-800">
        Patient DashBoard
      </div>

      <div className="rounded-lg w-full bg-white shadow-md p-4">
        <div className="text-black text-lg font-semibold ms-2 mb-0.5 p-2">
          Welcome
        </div>
        <div className="mb-2 ms-2 p-2 text-gray-500">
          use the menu book an appointment, view appointment, prescription or
          medical reports
        </div>
        <div className="flex items-center justify-around mt-2 ms-0">
          <div className="rounded-lg p-2 bg-gray-200 hover:bg-emerald-800 text-white">
            <button
              onClick={() => {
                navigate("/patient/book");
              }}
            >
              Book Appointment
            </button>
          </div>
          <div className="rounded-lg p-2 bg-gray-200 hover:bg-emerald-800 text-white">
            <button
              onClick={() => {
                navigate("/patient/appointments");
              }}
            >
              My Appointment
            </button>
          </div>
          <div className="rounded-lg p-2 bg-gray-200 hover:bg-emerald-800 text-white">
            <button
              onClick={() => {
                navigate("/patient/prescriptions");
              }}
            >
              My Prescription
            </button>
          </div>
          <div className="rounded-lg p-2 bg-gray-200 hover:bg-emerald-800 text-white">
            <button
              onClick={() => {
                navigate("/patient/reports");
              }}
            >
              My Reports
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
