import React, { useState } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'; // Import the required icons

const LoginDropdown = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login with:', email, password);
  };

  return (
    <li className="dropdown">
      <button className="dropdown-toggle" onClick={() => setShowDropdown(!showDropdown)}>
        <b>Login</b> <span className="caret"></span>
      </button>
      {showDropdown && (
        <ul id="login-dp" className="dropdown-menu">
          <li>
            <div className="row">
              <div className="col-md-12">
                Login via
                <div className="social-buttons">
                  <a href="#" className="btn btn-fb"><FaFacebook /> Facebook</a>
                  <a href="#" className="btn btn-tw"><FaTwitter /> Twitter</a>
                </div>
                or
                <form className="form" role="form" onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> keep me logged-in
                    </label>
                  </div>
                </form>
              </div>
              <div className="bottom text-center">
                New here ? <a href="#"><b>Join Us</b></a>
              </div>
            </div>
          </li>
        </ul>
      )}
    </li>
  );
};

export default LoginDropdown;
