import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm"

/**Routes for browser
 *
 * props=functions to be called in parent: login, signup, logout
 * state=none 
 * 
 * App --> RouterList --> { Homepage, CompanyList, CompanyDetail, JobList, LoginForm,
 * SignupForm, ProfileForm, Logout}
 */
 function RouteList({ login, signup, logout }) {
    console.log("RouteList")
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginForm login={login}/>} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="/logout" element={<Logout logout={logout} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;