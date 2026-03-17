import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

function Queue() {
  const [appointmentDate, setDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const nav = useNavigate();

  const [appointments, setCapp] = useState([]);

  const fetchCapp = async () => {
    const res = await api.get(`queue?date=${appointmentDate}`);
    console.log(res.data);
    setCapp(res.data);
  };

  const handleInprogress = async (id) => {
    const res = await api.patch(`queue/${id}`, {
      status: "in-progress",
    });
    fetchCapp();
  };

  const handleSkip = async (id) => {
    const res = await api.patch(`queue/${id}`, {
      status: "skipped",
    });
    fetchCapp();
  };

  const handleDone = async (id) => {
    const res = await api.patch(`queue/${id}`, {
      status: "done",
    });
    fetchCapp();
  };

  console.log(appointments);
  useEffect(() => {
    fetchCapp();
  }, [appointmentDate]);

  return (
    <>
      <div className="text-2xl font-bold text-emerald-800">Quesu (Manage)</div>

      <div className="rounded-lg w-full bg-white shadow-md p-4">
        <div className="text-black text-lg font-semibold ms-2 mb-0.5 p-2">
          Date
        </div>
        <div>
          <input
            type="date"
            value={appointmentDate}
            className="border-2 rounded-lg"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="w-full shadow-md bg-gray-100 rounded-lg p-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs border-b border-black text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Token
                </th>
                <th scope="col" className="py-3 px-6">
                  Patient
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone
                </th>
                <th scope="col" className="py-3 px-6">
                  TimeSlot
                </th>
                <th scope="col" className="py-3 px-6">
                  Stauts
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
                    key={ap?.id}
                    className="bg-white border-b dark:bg-white dark:border-gray-700"
                  >
                    <td className="py-4 px-6">{ap?.tokenNumber}</td>
                    <td className="py-4 px-6">
                      {ap?.appointment?.patient.name}
                    </td>
                    <td className="py-4 px-6">
                      {ap?.appointment?.patient.phone}
                    </td>
                    <td className="py-4 px-6">{ap?.appointment?.timeSlot}</td>
                    <td className="py-4 px-6">{ap?.status}</td>
                    <td className="py-4 px-6">
                      {ap?.status == "waiting" && (
                        <>
                          <button
                            onClick={() => {
                              handleInprogress(ap?.id);
                            }}
                            className="bg-emerald-800 rounded-lg p-0.5 text-white"
                          >
                            In Progress
                          </button>
                          <button
                            onClick={() => {
                              handleSkip(ap?.id);
                            }}
                            className="bg-gray-500 rounded-lg p-0.5 text-white"
                          >
                            Skip
                          </button>
                        </>
                      )}
                      {ap?.status == "in_progress" && (
                        <>
                          <button
                            onClick={() => {
                              handleDone(ap?.id);
                            }}
                            className="bg-emerald-800 rounded-lg p-0.5 text-white"
                          >
                            done
                          </button>
                        </>
                      )}
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

export default Queue;
