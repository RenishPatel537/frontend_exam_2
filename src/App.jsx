import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/user/About";
import User from "./pages/admin/User";
import MyClinic from "./pages/admin/MyClinic";
import PatientLayout from "./layouts/PatientLayout";
import DashBoard from "./pages/patient/DashBoard";
import Book from "./pages/patient/Book";
import MyAppointment from "./pages/patient/MyAppointment";
import MyPrescriptions from "./pages/patient/MyPrescriptions";
import AppointmentDetail from "./pages/patient/AppointmentDetail";
import MyReports from "./pages/patient/MyReports";
import ReceptionistLayout from "./layouts/ReceptionistLayout";
import Queue from "./pages/receptionist/Queue";
import TvDisplay from "./pages/receptionist/TvDisplay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role={"admin"}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="users" element={<User />} />
            <Route index path="" element={<MyClinic />} />
          </Route>

          {/* receptionist */}
          <Route
            path="/receptionist"
            element={
              <ProtectedRoute role={"receptionist"}>
                <ReceptionistLayout />
              </ProtectedRoute>
            }
          >
            <Route index path="" element={<Queue />} />
            <Route path="display" element={<TvDisplay />} />
          </Route>

          {/* Patient */}
          <Route
            path="/patient"
            element={
              <ProtectedRoute role={"patient"}>
                <PatientLayout />
              </ProtectedRoute>
            }
          >
            <Route index path="" element={<DashBoard />} />
            <Route path="book" element={<Book />} />
            <Route path="appointments" element={<MyAppointment />} />
            <Route path="prescriptions" element={<MyPrescriptions />} />
            <Route path="reports" element={<MyReports />} />
            <Route path="appointments/:id" element={<AppointmentDetail />} />
          </Route>

          {/*  USer */}
          <Route
            path="/user"
            element={
              <ProtectedRoute role={"user"}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
