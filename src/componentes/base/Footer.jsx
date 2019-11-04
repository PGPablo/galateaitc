import React from 'react'

import '../../css/Footer.css'

const Footer = (props) => {

  return (
    <div className="footer">

      <footer className="container-fluid text-white">
        <div className="d-flex flex-row flex-wrap">

          <div className="flex-fill text-left">
            <div className="text-white">
              Galatea | Mejora
            </div>
          </div>
          <div className="flex-fill text-right">

            <a href="http://www.itcelaya.edu.mx/"
            className="badge badge-light font-weight-light p-2">
              Itcelaya.edu
            </a>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default (Footer)
