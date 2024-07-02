import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const backgroundImageStyle = {
  background: '#221a42',
  backgroundImage: 'url("../assets/images/footer-img copy.png")',
  postion: "relative",
  backgroundPosition:"center center", 
  height:"100vh",
  backgroundSize:"100%",
  backgroundRepeat: "no-repeat"


};

const LoginModal = () => {
  return (
    <>
    <div className='img-bg d-flex align-items-center' style={backgroundImageStyle}>
     <div  className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card-in border-0 shadow rounded-3 ">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-4 fw-light fw-bold">Login</h5>
              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                  <label className="form-check-label text-start" htmlFor="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <button className="btn btn-danger text-uppercase fw-bold" type="submit">Login</button>
                </div>
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  <button className="btn btn-google btn-login  fw-bold" type="submit">
                    <FontAwesomeIcon icon={faGoogle} className="me-2" /> Login with Google
                  </button>
                </div>
                <div className="d-grid mb-2">
                  <button className="btn btn-facebook btn-login fw-bold" type="submit">
                    <FontAwesomeIcon icon={faFacebookF} className="me-2" /> Login with Facebook
                  </button>
                </div>
                <div className="d-grid">
                  <button className="btn btn-facebook btn-login fw-bold" type="submit">
                    <FontAwesomeIcon icon={faTwitter} className="me-2" /> Login with Twitter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default LoginModal