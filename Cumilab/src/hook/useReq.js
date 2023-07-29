import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { UsersContext } from "../context/usersContext";

const useReq = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [response, setResponse] = useState(null);

  const history = useNavigate();
  const ctx = useContext(UsersContext);

  const startFetching = () => {
    setResponse(null);
    setLoading(true);
    setError(null);
  };

  const clear = () => {
    setResponse(null);
    setError(null);
  };

  const fetchedData = () => {
    setLoading(false);
    setError(null);
  };

  const requestData = (method, url, data, token) => {
    let config;
    if (ctx.token || token) {
      config = {
        method,
        url: `${process.env.REACT_APP_BACKEND_URL}${url}`,
        // url: `http://localhost:8080/api${url}`,
        headers: {
          Authorization: `Bearer ${ctx.token || token}`,
        },
        data,
      };
    } else {
      config = {
        method,
        url: `${process.env.REACT_APP_BACKEND_URL}${url}`,
        // url: `http://localhost:8080/api${url}`,
        data,
      };
    }

    startFetching();

    axios(config)
      .then((res) => {
        fetchedData();
        console.log(res);
        if (res.data.error) {
          const err = res.data.error;
          history(err.split("/")[1]);
        } else if (res.data.redirect) {
          const { redirect } = res.data;
          console.log(redirect.split("/")[1]+"---"+redirect.split("/")[2]);
          history(`/${redirect.split("/")[1]}`);
        } else {
          setResponse(res.data);
        }
      })
      .catch((err) => {
        fetchedData();
        if (err.response) {
          if (err.response.status === 401) {
            // dispatch(logoutAsync());
            localStorage.removeItem("token");
            window.location.reload(false);
          } else if (err.response.status === 404) {
            history("/404");
          } else {
            setError(err.response.data.message);
            ctx &&
              typeof ctx.showAlert === "function" &&
              ctx.showAlert(err.response.data.message);
          }
        } else if (err.request) {
          setError("Slow Network Speed. Try Again later.");
          ctx &&
            typeof ctx.showAlert === "function" &&
            ctx.showAlert("Slow Network Speed. Try Again later.");
        } else {
          setError("Oops!! Unusual error occurred");
          ctx &&
            typeof ctx.showAlert === "function" &&
            ctx.showAlert("Oops!! Unusual error occurred");
        }
      });
  };

  return {
    loading,
    error,
    requestData,
    clear,
    response,
    setError,
  };
};

export default useReq;
