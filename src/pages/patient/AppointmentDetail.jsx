import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../../utils/api";

function AppointmentDetail() {
  const { id } = useParams();
  const [app, setApp] = useState();

  const getApp = async () => {
    const res = await api.get(`appointments/${id}`);
    setApp(res.data);
    console.log(res.data);
  };

  console.log(app);
  useEffect(() => {
    getApp();
  }, []);

  return (
    <>
      <div className="rounded-lg w-full bg-white shadow-md p-4 mb-2">
        <div className="text-black text-lg font-semibold ms-2 mb-0.5 p-2">
          Appointment
        </div>
        <div className="mb-2 ms-2 p-2 text-gray-500">
          <span className="font-bold">Date:</span>{" "}
          {app?.appointmentDate.split("T")[0]}{" "}
          <span className="font-bold">Time:</span> {app?.timeSlot}
        </div>
        <div className="mb-2 ms-2 p-2 text-gray-500">
          <span className="font-bold">Token:</span>{" "}
          {app?.queueEntry.tokenNumber}{" "}
          <span className="font-bold">Status:</span> {app?.status}
        </div>
      </div>

      <div className="rounded-lg w-full bg-white shadow-md p-4 mb-2">
        <div className="text-black text-lg font-semibold ms-2 mb-0.5 p-2">
          Medicine (Prescription)
        </div>
        <div className="mb-2 ms-2 p-2 text-gray-500">
          {app?.prescription ? app.prescription : "not prscription added yet"}
        </div>
      </div>
      <div className="rounded-lg w-full bg-white shadow-md p-4">
        <div className="text-black text-lg font-semibold ms-2 mb-0.5 p-2">
          Medical Report
        </div>
        <div className="mb-2 ms-2 p-2 text-gray-500">
          {app?.report ? app.report : "not report added yet"}
        </div>
      </div>
    </>
  );
}

export default AppointmentDetail;
