import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGoogle } from '@fortawesome/free-brands-svg-icons'

const SignUp = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#signupModal">
        <FontAwesomeIcon icon={faUserPlus} className='me-2' />
        Sign Up
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModal">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-2">
                <FontAwesomeIcon icon={faGoogle} className='me-2' />
                Sign Up with Google
              </button>
              <button className="btn btn-primary w-100 mb-2">
                <FontAwesomeIcon icon={faDiscord} className='me-2' />
                Sign Up with Discord
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordsignup" className="form-label">Password</label>
                  <input type="password" className="form-control" id="passwordsignup" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up with Email</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp