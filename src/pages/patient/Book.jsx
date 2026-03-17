import React, { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

function Book() {
  const navigate = useNavigate();

  const [appointmentDate, setDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [timeSlot, setTimeSlot] = useState();

  const handleBook = async () => {
    console.log(appointmentDate);
    console.log(timeSlot);
    const res = await api.post("appointments", { appointmentDate, timeSlot });
    console.log(res);
    navigate("/patient/book");
  };

  return (
    <>
      <div className="rounded-lg w-full bg-white shadow-md p-4">
        <form className="space-y-4 px-3 pb-2 md:space-y-6" action="#">
          <div>
            <label>Date</label>
            <input
              type="date"
              placeholder="date"
              value={appointmentDate}
              className="p-2 w-full mb-3 rounded-lg border-gray-400 border focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-md"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Time Slot
            </label>
            <select
              className="p-2 w-full mb-3 rounded-lg border-gray-400 border focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-md bg-white"
              onChange={(e) => setTimeSlot(e.target.value)}
            >
              <option value="">Select an time slot</option>
              <option value="10:00-10:15">10:00-10:15</option>
              <option value="10:15-10:30">10:15-10:30"</option>
              <option value="10:30-10:45">10:30-10:45</option>
              <option value="10:45-11:00">10:45-11:00</option>
            </select>
          </div>
          <button
            className="bg-emerald-800 text-white p-2 w-full rounded-lg mb-2"
            onClick={handleBook}
          >
            Book
          </button>
        </form>
      </div>
    </>
  );
}

export default Book;
