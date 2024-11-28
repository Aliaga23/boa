import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    // Reflejar directamente la entrada en la página sin procesarla
    document.body.innerHTML += `<p>Email ingresado: ${state.email}</p>`;
    document.body.innerHTML += `<p>Password ingresado: ${state.password}</p>`;
    navigate("/usuario");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700">Login</h1>

        <form onSubmit={handleOnSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
