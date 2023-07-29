import React from 'react';

const Footer = () => {
    return (
        <div className="app-container container-xxl">
              <div
                className="app-main flex-column flex-row-fluid"
                id="kt_app_main"
              >
        <div
                  id="kt_app_footer"
                  className="app-footer d-flex flex-column flex-md-row align-items-center flex-center flex-md-stack py-2 py-lg-4"
                >
                  <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">
                      © 2023 CuMiLab | All Rights Reserved.
                    </span>
                  </div>
                  <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li className="menu-item">
                      <a href=" " target="_blank" className="menu-link px-2">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href=" " target="_blank" className="menu-link px-2">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
                </div>
    )
}

export default Footer;