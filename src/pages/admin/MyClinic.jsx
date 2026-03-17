import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function MyClinic() {
  const [users, setusers] = useState([]);

  const fetchUser = async () => {
    const res = await api.get("admin/users");
    setusers(res.data);
  };

  useEffect(() => {
    fetchUser();
  });

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <h1 className="text-2xl font-bold text-emerald-800 mb-2 p-4">
        My Clinic
      </h1>
      <div className="w-full shadow-md bg-gray-100 rounded-lg p-4">
        <h1 className="text-lg font-bold">Users In the clinic</h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs border-b border-black text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Role
              </th>
              <th scope="col" className="py-3 px-6">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-white dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-gray-500"
                  >
                    {user.name}
                  </th>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6">{user.role}</td>
                  <td className="py-4 px-6">
                    {user.phone ? user.phone : "--"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 transition duration-300 hover:shadow-xl ">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{user.name}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{user.role}</p>
      <p className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
        <a href={`mailto:${user.email}`} className="text-sm font-medium">
          {user.email}
        </a>
      </p>
    </div>
  );
};

export default MyClinic;
