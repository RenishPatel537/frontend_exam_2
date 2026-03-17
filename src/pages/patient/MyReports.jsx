import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

function MyReports() {
  const [appointments, setAppointments] = useState([]);

  const navigate = useNavigate();

  const fetchAppointment = async () => {
    const res = await api("appointments/my");
    console.log(res);
    if (res.status == 200) {
      setAppointments(res.data);
    } else {
      console.log("error");
    }
  };

  console.log(appointments);

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <>
      <div className="rounded-lg w-full bg-white shadow-md p-4 mb-2">
        <div className="text-black text-lg font-semibold ms-2 mb-0.5 p-2">
          My Prescription
        </div>

        {appointments.length == 0 && (
          <div className="mb-2 ms-2 p-2 text-gray-500">No reports yet</div>
        )}
        {appointments?.map((ap) => {
          return (
            <>
              <div className="mb-2 ms-2 p-2 text-gray-500">
                <span className="font-bold">Date:</span>{" "}
                {ap?.appointmentDate.split("T")[0]}{" "}
                <span className="font-bold">Time:</span> {ap?.timeSlot}
              </div>
              <div className="mb-2 ms-2 p-2 text-gray-500">
                <span className="font-bold">report:</span>{" "}
                {ap?.report ? ap.report : "not added report"}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MyReports;
