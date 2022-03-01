import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Question ?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="/assets/image/messages.png" alt="" height='300' width='300' />
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Karto Mardun" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">Email</label>
              <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="example@gmail.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className='btn btn-outline-primary'>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact