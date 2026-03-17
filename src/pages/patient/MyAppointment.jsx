import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

function MyAppointment() {
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

  const handleDetail = (id) => {
    navigate(`${id}`);
  };

  console.log(appointments);

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <>
      <div className="text-2xl font-bold text-emerald-800">My Appointments</div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="w-full shadow-md bg-gray-100 rounded-lg p-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs border-b border-black text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Time
                </th>
                <th scope="col" className="py-3 px-6">
                  Token
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((ap) => {
                return (
                  <tr
                    key={ap.id}
                    className="bg-white border-b dark:bg-white dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-gray-500"
                    >
                      {ap.appointmentDate.split("T")[0]}
                    </th>
                    <td className="py-4 px-6">{ap.timeSlot}</td>
                    <td className="py-4 px-6">{ap.queueEntry.tokenNumber}</td>
                    <td className="py-4 px-6">{ap.status}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => {
                          handleDetail(ap.id);
                        }}
                        className="bg-emerald-800 rounded-lg p-1 text-white"
                      >
                        Medicine & Reports
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyAppointment;
