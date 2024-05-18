
//  import React from 'react';
// import { Route } from 'react-router-dom';
// import LearnPage from './learnpage';

// const Example = () => {
//   return (
//     <Route path="/learn" element={<LearnPage />} />
//   );
// }

// export default Example;

import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ path, ...props }) => {
  const token = Cookies.get("jwt_token");
  return token ? <Route {...props} /> : <Navigate to="/compete" />;
};

export default ProtectedRoute;
