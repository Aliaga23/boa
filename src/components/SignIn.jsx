import React from "react";
import { useNavigate } from 'react-router-dom';
import api from '../api';

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await api.post('/auth/login', state);
      localStorage.setItem('token', response.data.token);
      setState({ email: "", password: "" });
      navigate('/usuario');
    } catch (error) {
      setError(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700">Login</h1>
        
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <input
            type="email"
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
          {error && <p className="text-sm text-red-600">{error}</p>}
          
          <button type="submit" className="w-full py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
