import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch } from "react-redux";
import { RouterPath } from "@shared/constants";
import { setUser } from "../store/authSlice";

export const useAuth = (addUser, loginUser) => {
  const [ searchParams ] = useSearchParams();
  const authParams = searchParams.get("mode");
  const navigate = useNavigate();
  const [ value, setValue ] = useState({
    username: "",
    password: "",
  });
  const [ commonError, setCommonError ] = useState("");
  const [ customError, setCustomError ] = useState({
    errorUsername: "",
    errorPassword: "",
  });
  const dispatch = useDispatch();

  const handelRegistrationSubmit = async (event) => {
    let hasError = false;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{3,}$/;
    event.preventDefault();
    setCommonError("");
    setCustomError({
      errorUsername: "",
      errorPassword: "",
    });
    if (!value.username && !value.password) {
      setCommonError("The fields must be filled");
      hasError = true;
    }
    if (value.username.length <= 2) {
      setCustomError((prev) => ({
        ...prev,
        errorUsername: "The username must be more than 2 characters long.",
      }));
      hasError = true;
    }
    if (!passwordRegex.test(value.password)) {
      setCustomError((prev) => ({
        ...prev,
        errorPassword:
          "The password must contain at least 3 characters, including one capital letter and one digit.",
      }));
      hasError = true;
    }
    if (!hasError) {
      try {
        const response = await addUser(value).unwrap();
        dispatch(setUser({ user: response }));
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/" + RouterPath.dashboards);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handelLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser(value).unwrap();
      dispatch(setUser({ user: response }));
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/" + RouterPath.dashboards);
    } catch (error) {
      console.error(error);
    }
  };
  const handelOnChange = (event) => {
    const { name, value: inputValue } = event.target;
    setValue((prev) => ({
      ...prev,
      [name === "username" ? "username" : "password"]: inputValue,
    }));
  };

  return [
    authParams,
    handelLoginSubmit,
    handelRegistrationSubmit,
    handelOnChange,
    value,
    commonError,
    customError,
  ];
};
