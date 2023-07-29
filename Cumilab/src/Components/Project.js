import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Project = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'assets/plugins/custom/datatables/datatables.bundle.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'assets/js/custom/apps/projects/project/project.js';
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = 'assets/js/widgets.bundle.js';
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = 'assets/js/custom/widgets.js';
    script4.async = true;
    document.body.appendChild(script4);

    const script5 = document.createElement('script');
    script5.src = 'assets/js/custom/apps/chat/chat.js';
    script5.async = true;
    document.body.appendChild(script5);

    const script6 = document.createElement('script');
    script6.src = 'assets/js/custom/utilities/modals/upgrade-plan.js';
    script6.async = true;
    document.body.appendChild(script6);

    const script7 = document.createElement('script');
    script7.src = 'assets/js/custom/utilities/modals/new-target.js';
    script7.async = true;
    document.body.appendChild(script7);

    const script8 = document.createElement('script');
    script8.src = 'assets/js/custom/utilities/modals/users-search.js';
    script8.async = true;
    document.body.appendChild(script8);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
      document.body.removeChild(script7);
      document.body.removeChild(script8);
    };
  }, []);
  return (
    <div
      id="kt_app_body"
      data-kt-app-header-fixed-mobile="true"
      data-kt-app-toolbar-enabled="true"
      className="app-default"
    >
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <div
            id="kt_app_header"
            className="app-header"
            data-kt-sticky="true"
            data-kt-sticky-activate="{default: false, lg: true}"
            data-kt-sticky-name="app-header-sticky"
            data-kt-sticky-offset="{default: false, lg: '300px'}"
          >
            <div
              className="app-container container-xxl d-flex align-items-stretch justify-content-between"
              id="kt_app_header_container"
            >
              <div
                className="d-flex align-items-center d-lg-none ms-n2 me-2"
                title="Show sidebar menu"
              >
                <div
                  className="btn btn-icon btn-active-color-primary w-35px h-35px"
                  id="kt_app_header_menu_toggle"
                >
                  <span className="svg-icon svg-icon-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.3"
                        d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-18">
                <a href=" ">
                  <img
                    alt="Logo"
                    src="assets/media/logos/logo-img.png"
                    className="h-30px d-sm-none"
                  />
                  <img
                    alt="Logo"
                    src="assets/media/logos/logo-img.png"
                    className="h-30px d-none d-sm-block"
                  />
                </a>
              </div>
              <div
                className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
                id="kt_app_header_wrapper"
              >
                <div
                  className="app-header-menu app-header-mobile-drawer align-items-stretch"
                  data-kt-drawer="true"
                  data-kt-drawer-name="app-header-menu"
                  data-kt-drawer-activate="{default: true, lg: false}"
                  data-kt-drawer-overlay="true"
                  data-kt-drawer-width="250px"
                  data-kt-drawer-direction="start"
                  data-kt-drawer-toggle="#kt_app_header_menu_toggle"
                  data-kt-swapper="true"
                  data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
                  data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
                >
                  <div
                    className="menu menu-rounded menu-active-bg menu-state-primary menu-column menu-lg-row menu-title-gray-700 menu-icon-gray-500 menu-arrow-gray-500 menu-bullet-gray-500 my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
                    id="kt_app_header_menu"
                    data-kt-menu="true"
                  >
                    <div
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion me-0 me-lg-2"
                    >
                      <span className="menu-link">
                        <Link to="/dashboard">
                          <span className="menu-title">Dashboard</span>
                        </Link>
                        <span className="menu-arrow d-lg-none" />
                      </span>
                    </div>
                    <div
                      data-kt-menu-placement="bottom-start"
                      data-kt-menu-offset="-200,0"
                      className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                    >
                      <span className="menu-link">
                        <Link to="/projects">
                          <span className="menu-title">Projects</span>
                        </Link>
                        <span className="menu-arrow d-lg-none" />
                      </span>
                    </div>
                    <div
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                    >
                      <span className="menu-link">
                        <Link to="/help">
                        <span className="menu-title">Help</span></Link>
                        <span className="menu-arrow d-lg-none" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="app-navbar flex-shrink-0">
                  <div className="app-navbar-item ms-1 ms-lg-5">
                    <div
                      className="btn btn-icon btn-custom btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom"
                    >
                      <i className="fonticon-layers fs-2" />
                    </div>
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px"
                      data-kt-menu="true"
                    >
                      <div
                        className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
                        style={{
                          backgroundImage:
                            'url("assets/media/misc/menu-header-bg.jpg")',
                        }}
                      >
                        <h3 className="text-white fw-semibold mb-3">
                          Quick Links
                        </h3>
                      </div>
                      <div className="row g-0">
                        <div className="col-6">
                          <a
                            href=" "
                            className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom" 
                          >
                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity="0.3"
                                  d="M15.8 11.4H6C5.4 11.4 5 11 5 10.4C5 9.80002 5.4 9.40002 6 9.40002H15.8C16.4 9.40002 16.8 9.80002 16.8 10.4C16.8 11 16.3 11.4 15.8 11.4ZM15.7 13.7999C15.7 13.1999 15.3 12.7999 14.7 12.7999H6C5.4 12.7999 5 13.1999 5 13.7999C5 14.3999 5.4 14.7999 6 14.7999H14.8C15.3 14.7999 15.7 14.2999 15.7 13.7999Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M18.8 15.5C18.9 15.7 19 15.9 19.1 16.1C19.2 16.7 18.7 17.2 18.4 17.6C17.9 18.1 17.3 18.4999 16.6 18.7999C15.9 19.0999 15 19.2999 14.1 19.2999C13.4 19.2999 12.7 19.2 12.1 19.1C11.5 19 11 18.7 10.5 18.5C10 18.2 9.60001 17.7999 9.20001 17.2999C8.80001 16.8999 8.49999 16.3999 8.29999 15.7999C8.09999 15.1999 7.80001 14.7 7.70001 14.1C7.60001 13.5 7.5 12.8 7.5 12.2C7.5 11.1 7.7 10.1 8 9.19995C8.3 8.29995 8.79999 7.60002 9.39999 6.90002C9.99999 6.30002 10.7 5.8 11.5 5.5C12.3 5.2 13.2 5 14.1 5C15.2 5 16.2 5.19995 17.1 5.69995C17.8 6.09995 18.7 6.6 18.8 7.5C18.8 7.9 18.6 8.29998 18.3 8.59998C18.2 8.69998 18.1 8.69993 18 8.79993C17.7 8.89993 17.4 8.79995 17.2 8.69995C16.7 8.49995 16.5 7.99995 16 7.69995C15.5 7.39995 14.9 7.19995 14.2 7.19995C13.1 7.19995 12.1 7.6 11.5 8.5C10.9 9.4 10.5 10.6 10.5 12.2C10.5 13.3 10.7 14.2 11 14.9C11.3 15.6 11.7 16.1 12.3 16.5C12.9 16.9 13.5 17 14.2 17C15 17 15.7 16.8 16.2 16.4C16.8 16 17.2 15.2 17.9 15.1C18 15 18.5 15.2 18.8 15.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span className="fs-5 fw-semibold text-gray-800 mb-0">
                              Create Project
                            </span>
                            <span className="fs-7 text-gray-400">
                              Create New Project
                            </span>
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            href=" "
                            className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom"
                          >
                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                  fill="currentColor"
                                />
                                <path
                                  opacity="0.3"
                                  d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            <span className="fs-5 fw-semibold text-gray-800 mb-0">
                              Settings
                            </span>
                            <span className="fs-7 text-gray-400">
                              Change Settings
                            </span>
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            href=" "
                            className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end"
                          >
                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                                  fill="currentColor"
                                />
                                <path
                                  opacity="0.3"
                                  d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span className="fs-5 fw-semibold text-gray-800 mb-0">
                              Communication
                            </span>
                            <span className="fs-7 text-gray-400">
                              Communication
                            </span>
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to="/help" 
                            className="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
                          >
                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity="0.3"
                                  d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span className="fs-5 fw-semibold text-gray-800 mb-0">
                              Help
                            </span>
                            <span className="fs-7 text-gray-400">
                              Help &amp; Support
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="py-2 text-center border-top">
                        <a
                          href=" "
                          className="btn btn-color-gray-600 btn-active-color-primary"
                        >
                          View All
                          <span className="svg-icon svg-icon-5">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.5"
                                x={18}
                                y={13}
                                width={13}
                                height={2}
                                rx={1}
                                transform="rotate(-180 18 13)"
                                fill="currentColor"
                              />
                              <path
                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="app-navbar-item ms-5"
                    id="kt_header_user_menu_toggle"
                  >
                    <div
                      className="cursor-pointer symbol symbol-35px symbol-md-40px"
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom-end"
                    >
                      <img
                        className="symbol symbol-circle symbol-35px symbol-md-40px"
                        src="assets/media/avatars/300-13.jpg"
                        alt="user"
                      />
                    </div>
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                      data-kt-menu="true"
                    >
                      <div className="menu-item px-3">
                        <div className="menu-content d-flex align-items-center px-3">
                          <div className="symbol symbol-50px me-5">
                            <img
                              alt="Logo"
                              src="assets/media/avatars/300-13.jpg"
                            />
                          </div>
                          <div className="d-flex flex-column">
                            <div className="fw-bold d-flex align-items-center fs-5">
                              Amit Desai
                              <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                                Admin
                              </span>
                            </div>
                            <a
                              href=" "
                              className="fw-semibold text-muted text-hover-primary fs-7"
                            >
                              amit@cumilab.co.in
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="separator my-2" />
                      <div className="menu-item px-5">
                        <a href=" " className="menu-link px-5">
                          My Profile
                        </a>
                      </div>
                      <div className="menu-item px-5 my-1">
                        <a href=" " className="menu-link px-5">
                          Account Settings
                        </a>
                      </div>
                      <div className="menu-item px-5">
                        <a href="login.html" className="menu-link px-5">
                          Sign Out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="app-wrapper flex-column flex-row-fluid"
            id="kt_app_wrapper"
          >
            <div id="kt_app_toolbar" className="app-toolbar py-6">
              <div
                id="kt_app_toolbar_container"
                className="app-container container-xxl d-flex align-items-start"
              >
                <div className="d-flex flex-column flex-row-fluid">
                  <div className="d-flex align-items-center pt-1">
                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold">
                      <li className="breadcrumb-item text-white fw-bold lh-1">
                        <a href=" " className="text-white">
                          <i className="fonticon-home text-gray-700 fw-bold fs-3" />
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <span className="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li className="breadcrumb-item text-white fw-bold lh-1">
                        Projects
                      </li>
                      <li className="breadcrumb-item">
                        <span className="svg-icon svg-icon-4 svg-icon-gray-700 mx-n1">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li className="breadcrumb-item text-white fw-bold lh-1">
                        Project 1
                      </li>
                    </ul>
                    <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 gap-lg-4 pt-13 pb-6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-container container-xxl">
              <div
                className="app-main flex-column flex-row-fluid"
                id="kt_app_main"
              >
                <div className="d-flex flex-column flex-column-fluid">
                  <div
                    id="kt_app_content"
                    className="app-content flex-column-fluid"
                  >
                    <div className="card mb-6 mb-xl-9">
                      <div className="card-body pt-9 pb-0">
                        <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
                          <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                            <img
                              className="mw-50px mw-lg-125px"
                              src="assets/media/misc/project-1-logo.png"
                              alt="logo"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                              <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-1">
                                  <a
                                    href=" "
                                    className="text-gray-800 text-hover-primary fs-2 fw-bold me-3"
                                  >
                                    Project 1 Name
                                  </a>
                                  <span className="badge badge-light-success me-auto">
                                    Approved
                                  </span>
                                </div>
                                <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">
                                  Here is the short description of this project
                                  along with some quick details.
                                </div>
                              </div>
                              {/* <div className="d-flex mb-4">
                                <a
                                  href=" "
                                  className="btn btn-sm btn-secondary me-3"
                                  data-bs-toggle="modal"
                                  data-bs-target="#kt_modal_users_search"
                                >
                                  <i className="fas fa-user" />
                                  View Members
                                </a>
                                <a
                                  href="chat.html"
                                  className="btn btn-sm btn-primary me-3"
                                >
                                  <i className="fas fa-message" />
                                  Communication
                                </a>
                                <div className="me-0">
                                  <button
                                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                  >
                                    <i className="bi bi-three-dots fs-3" />
                                  </button>
                                  <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                    data-kt-menu="true"
                                  >
                                    <div className="menu-item px-3">
                                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                        Quick Links
                                      </div>
                                    </div>
                                    <div className="menu-item px-3">
                                      <a href=" " className="menu-link px-3">
                                        Add New Section
                                      </a>
                                    </div>
                                    <div className="menu-item px-3 my-1">
                                      <a href=" " className="menu-link px-3">
                                        Settings
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                            <div className="d-flex flex-wrap justify-content-start">
                              <div className="d-flex flex-wrap">
                               <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                  <div className="d-flex align-items-center">
                                    <div className="fs-4 fw-bold">
                                      01 Feb, 2023
                                    </div>
                                  </div>
                                  <div className="fw-semibold fs-6 text-gray-400">
                                    Project Start Date
                                  </div>
                                </div>
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="fs-4 fw-bold"
                                      data-kt-countup="true"
                                      data-kt-countup-value={12}
                                    >
                                      0
                                    </div>
                                  </div>
                                  <div className="fw-semibold fs-6 text-gray-400">
                                    Total Members
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="separator" />
                        <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                          <li className="nav-item">
                            <a
                              className="nav-link text-active-primary py-5 me-6 active"
                              href=" "
                            >
                              Documents
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link text-active-primary py-5 me-6"
                              href=" "
                            >
                              Communication
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "30px" }}>

                      <div className="card-header card-header-stretch">
                        <iframe
                          src="gallery.php"
                          height={1200}
                          width="100%"
                          title="Gallery"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
      <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
        <span className="svg-icon">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.5"
              x={13}
              y={6}
              width={13}
              height={2}
              rx={1}
              transform="rotate(90 13 6)"
              fill="currentColor"
            />
            <path
              d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Project;
