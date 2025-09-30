import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
    alert('Sign-up submitted! Check console for form data.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center"
        style={{fontFamily: '"Dancing Script", cursive', color: "#e214a8ff",margin:"1.5rem",padding:"0.5rem"}}>
            Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 "
            style={{marginRight:"2.5rem"}}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1  p-2 border border-gray-300 rounded-md "
              placeholder="Enter your first name"
               style={{width:"400px", borderRadius:"5px", marginBottom:"1rem", height:"3rem"}}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700"
             style={{marginRight:"2.5rem"}}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your last name"
              style={{width:"400px",borderRadius:"5px", marginBottom:"1rem", height:"3rem"}}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"
            style={{marginRight:"1.0rem"}}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1  p-2 border border-gray-300 rounded-md focus:outline-none "
              placeholder="Enter your email"
               style={{width:"400px",borderRadius:"5px", marginBottom:"1rem", height:"3rem"}}
            />
          </div>
          <button
            type="submit"
            className="rounded-md"
            style={{backgroundColor: "#e214a8ff", borderRadius:"5px", color: "white", marginTop:"1.5rem",marginLeft:"3.5rem",padding: "0.5rem", fontSize: "1rem",width:"250px"}}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline" style={{textDecoration:"none"}}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;