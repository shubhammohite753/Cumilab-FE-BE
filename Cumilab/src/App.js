import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterNow } from "./Components/RegisterNow";
import SignIn from "./Components/SignIn";
import { useEffect } from "react";
import TwoStepVerification from "./Components/TwoStepVerification";
import Dashboard from "./Components/Dashboard";
import ForgotPassword from "./Components/ForgotPassword";
import TermsAndConditions from "./Components/TermsAndConditions";
import Project from "./Components/Project";
import Help from "./Components/Help";
import Projects from "./Components/Projects";
// import Header from "./Components/Header";
function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/plugins/global/plugins.bundle.js';
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = '/assets/js/scripts.bundle.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);
  
  return (
    <div>
      {/* <Header/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<RegisterNow />}/>
        <Route path="/" element={<SignIn />}/>
        <Route path="/otp-verification" element={<TwoStepVerification/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/help" element={<Help/>}/>
        <Route path="/project" element={<Project/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
