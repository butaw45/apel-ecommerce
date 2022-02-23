import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                <FontAwesomeIcon icon={faArrowRightToBracket} className='me-2' />
                Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModal">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-2">
                                <FontAwesomeIcon icon={faGoogle} className='me-2' />
                                Sign In with Google
                            </button>
                            <button className="btn btn-primary w-100 mb-2">
                                <FontAwesomeIcon icon={faDiscord} className='me-2' />
                                Sign In with Discord
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login