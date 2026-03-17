import React, { use, useEffect, useState } from "react";
import api from "../../utils/api";
function User() {
  const [users, setusers] = useState([]);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [phone, setPhone] = useState("");

  const fetchUser = async () => {
    const res = await api.get("admin/users");
    setusers(res.data);
  };

  const handleSubmit = async () => {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(role);
    console.log(phone);

    const res = await api.post("admin/users", {
      name,
      email,
      password,
      role,
      phone,
    });

    console.log(res);
    if (res.status == 201) {
      fetchUser();
      setName("");
      setPassword("");
      setEmail("");
      setPhone("");
      setRole("");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h1 className="text-emerald-700 font-bold text-2xl mb-4">Clinic User</h1>
      <div className="bg-gray-100 rounded-lg mb-2 p-2">
        <div className="m-1 text-lg font-bold">
          Add Receptionist, Patient or Doctor
        </div>
        <form className="grid grid-cols-3 gap-x-4">
          <div>
            <label>Name</label>
            <input
              placeholder="name"
              className="p-2 w-full mb-3 rounded-lg border-gray-400 border focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-md"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              placeholder="email"
              className="p-2 w-full mb-3 rounded-lg border-gray-400 border focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              placeholder="password"
              type="password"
              className="border p-2 w-full mb-3 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              className="p-2 w-full mb-3 rounded-lg border-gray-400 border focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-md bg-white"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select an role</option>
              <option value="receptionist">Receptionist</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <div>
            <label>Phone</label>
            <input
              placeholder="phone"
              className="p-2 w-full mb-3 rounded-lg border-gray-400 border focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-md"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </form>
        <button
          className="bg-emerald-700 rounded-lg text-md p-2 text-white font-semibold hover:bg-emerald-900"
          onClick={handleSubmit}
        >
          Add User
        </button>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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
    </>
  );
}

export default User;
