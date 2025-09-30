import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login submission logic (e.g., API call)
    console.log('Login submitted:', formData);
    alert('Login submitted! Check console for form data.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
           
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              style={{width:"400px",borderRadius:"5px", marginBottom:"1rem", height:"3rem"}}
            />
          </div>
          <div>
           
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              style={{width:"400px",borderRadius:"5px", marginBottom:"1rem", height:"3rem"}}
            />
          </div>
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm " style={{textDecoration:"none", color:"black"}}>
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className=" text-white "
            style={{borderRadius:"5px", marginTop:"1.5rem", padding: "0.5rem", fontSize: "1rem",width:"400px", backgroundColor: "#e214a8ff"}}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline" style={{textDecoration:"none"}}>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;