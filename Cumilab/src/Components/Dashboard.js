import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header';

const Dashboard = () => {

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = '/assets/js/widgets.bundle.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = '/assets/js/custom/widgets.js';
    script2.async = true;
    document.body.appendChild(script2);
    
    const script3 = document.createElement('script');
    script3.src = '/assets/js/custom/utilities/modals/new-target.js';
    script3.async = true;
    document.body.appendChild(script3);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);
    return (
      <div id="kt_app_body" data-kt-app-header-fixed-mobile="true" data-kt-app-toolbar-enabled="true" className="app-default">
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          {/* <Header/> */}
           <div id="kt_app_header" className="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">
            <div className="app-container container-xxl d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
              <div className="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show sidebar menu">
                <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_header_menu_toggle">
                  <span className="svg-icon svg-icon-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                      <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-18">
                <a href=" ">
                  <img alt="Logo" src="assets/media/logos/logo-img.png" className="h-30px d-sm-none" />
                  <img alt="Logo" src="assets/media/logos/logo-img.png" className="h-30px d-none d-sm-block" />
                </a>
              </div>
              <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
                <div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
                  <div className="menu menu-rounded menu-active-bg menu-state-primary menu-column menu-lg-row menu-title-gray-700 menu-icon-gray-500 menu-arrow-gray-500 menu-bullet-gray-500 my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
                    <div data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
                      <span className="menu-link">
                        <Link to="/dashboard"><span className="menu-title">Dashboard</span></Link>
                        <span className="menu-arrow d-lg-none" />
                      </span>
                    </div>
                    <div data-kt-menu-placement="bottom-start" data-kt-menu-offset="-200,0" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
                      <span className="menu-link">
                        <Link to="/projects"><span className="menu-title">Projects</span></Link>
                        <span className="menu-arrow d-lg-none" />
                      </span>
                    </div>
                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
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
                    <div className="btn btn-icon btn-custom btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom">
                      <i className="fonticon-layers fs-2" />
                    </div>
                    <div className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px" data-kt-menu="true">
                      <div className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10" style={{backgroundImage: 'url("assets/media/misc/menu-header-bg.jpg")'}}>
                        <h3 className="text-white fw-semibold mb-3">Quick Links</h3>
                      </div>
                      <div className="row g-0">
                        <div className="col-6">
                          <a href="../../demo34/dist/apps/projects/budget.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">
                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M15.8 11.4H6C5.4 11.4 5 11 5 10.4C5 9.80002 5.4 9.40002 6 9.40002H15.8C16.4 9.40002 16.8 9.80002 16.8 10.4C16.8 11 16.3 11.4 15.8 11.4ZM15.7 13.7999C15.7 13.1999 15.3 12.7999 14.7 12.7999H6C5.4 12.7999 5 13.1999 5 13.7999C5 14.3999 5.4 14.7999 6 14.7999H14.8C15.3 14.7999 15.7 14.2999 15.7 13.7999Z" fill="currentColor" />
                                <path d="M18.8 15.5C18.9 15.7 19 15.9 19.1 16.1C19.2 16.7 18.7 17.2 18.4 17.6C17.9 18.1 17.3 18.4999 16.6 18.7999C15.9 19.0999 15 19.2999 14.1 19.2999C13.4 19.2999 12.7 19.2 12.1 19.1C11.5 19 11 18.7 10.5 18.5C10 18.2 9.60001 17.7999 9.20001 17.2999C8.80001 16.8999 8.49999 16.3999 8.29999 15.7999C8.09999 15.1999 7.80001 14.7 7.70001 14.1C7.60001 13.5 7.5 12.8 7.5 12.2C7.5 11.1 7.7 10.1 8 9.19995C8.3 8.29995 8.79999 7.60002 9.39999 6.90002C9.99999 6.30002 10.7 5.8 11.5 5.5C12.3 5.2 13.2 5 14.1 5C15.2 5 16.2 5.19995 17.1 5.69995C17.8 6.09995 18.7 6.6 18.8 7.5C18.8 7.9 18.6 8.29998 18.3 8.59998C18.2 8.69998 18.1 8.69993 18 8.79993C17.7 8.89993 17.4 8.79995 17.2 8.69995C16.7 8.49995 16.5 7.99995 16 7.69995C15.5 7.39995 14.9 7.19995 14.2 7.19995C13.1 7.19995 12.1 7.6 11.5 8.5C10.9 9.4 10.5 10.6 10.5 12.2C10.5 13.3 10.7 14.2 11 14.9C11.3 15.6 11.7 16.1 12.3 16.5C12.9 16.9 13.5 17 14.2 17C15 17 15.7 16.8 16.2 16.4C16.8 16 17.2 15.2 17.9 15.1C18 15 18.5 15.2 18.8 15.5Z" fill="currentColor" />
                              </svg>
                            </span>
                            <span className="fs-5 fw-semibold text-gray-800 mb-0">Create Project</span>
                            <span className="fs-7 text-gray-400">Create New Project</span>
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="../../demo34/dist/apps/projects/settings.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom">
                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                                <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                              </svg>
                            </span>
                            <span className="fs-5 fw-semibold text-gray-800 mb-0">Settings</span>
                            <span className="fs-7 text-gray-400">Change Settings</span>
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="../../demo34/dist/apps/projects/list.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end">
                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor" />
                                <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor" />
                              </svg>
                            </span>
                            <span className="fs-5 fw-semibold text-gray-800 mb-0">Chat</span>
                            <span className="fs-7 text-gray-400">Chat Now</span>
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to="/help" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light">
                            <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                                <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                              </svg>
                            </span>
                            
                            <span className="fs-5 fw-semibold text-gray-800 mb-0">Help</span>
                            <span className="fs-7 text-gray-400">Help &amp; Support</span>
                          </Link>
                        </div>
                      </div>
                      <div className="py-2 text-center border-top">
                        <a href=" " className="btn btn-color-gray-600 btn-active-color-primary">View All
                          <span className="svg-icon svg-icon-5">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                              <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                            </svg>
                          </span></a>
                      </div>
                    </div>
                  </div>
                  <div className="app-navbar-item ms-5" id="kt_header_user_menu_toggle">
                    <div className="cursor-pointer symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                      <img className="symbol symbol-circle symbol-35px symbol-md-40px" src="assets/media/avatars/300-13.jpg" alt="user" />
                    </div>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                      <div className="menu-item px-3">
                        <div className="menu-content d-flex align-items-center px-3">
                          <div className="symbol symbol-50px me-5">
                            <img alt="Logo" src="assets/media/avatars/300-13.jpg" />
                          </div>
                          <div className="d-flex flex-column">
                            <div className="fw-bold d-flex align-items-center fs-5">Amit Desai
                              <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Admin</span></div>
                            <a href=" " className="fw-semibold text-muted text-hover-primary fs-7">amit@cumilab.co.in</a>
                          </div>
                        </div>
                      </div>
                      <div className="separator my-2" />
                      <div className="menu-item px-5">
                        <a href=" " className="menu-link px-5">My Profile</a>
                      </div>
                      <div className="menu-item px-5 my-1">
                        <a href=" " className="menu-link px-5">Account Settings</a>
                      </div>
                      <div className="menu-item px-5">
                        <Link to="/" className="menu-link px-5">Sign Out</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <div id="kt_app_toolbar" className="app-toolbar py-6">
              <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex align-items-start">
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
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="breadcrumb-item text-white fw-bold lh-1">Dashboard</li>
                    </ul>
                  </div>
                  <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-4 gap-lg-10 pt-13 pb-6">
                    <div className="page-title me-5">
                      <h1 className="page-heading d-flex text-white fw-bold fs-1 flex-column justify-content-center my-0">Welcome, Name</h1>
                    </div>
                    <div className="d-flex align-self-center flex-center flex-shrink-0">
                      <a href=" " className="btn btn-sm border btn-active-color-white btn-custom px-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">
                        <span className="svg-icon svg-icon-3">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                            <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                            <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-n1">Create Project</span>
                      </a>
                      <a href=" " className="btn btn-sm btn-active-color-white border btn-custom ms-3 px-4" data-bs-toggle="modal" data-bs-target="#">
                        <span className="svg-icon svg-icon-3">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                            <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                            <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                          </svg>
                        </span>
                        Upload Documents</a>
                      <a href="dm.html" className="btn btn-sm btn-active-color-white border btn-custom ms-3 px-4">
                        <span className="svg-icon svg-icon-3">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                            <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                            <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                          </svg>
                        </span>
                        DM Members</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-container container-xxl">
              <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                <div className="d-flex flex-column flex-column-fluid">
                  <div id="kt_app_content" className="app-content flex-column-fluid">
                    <div className="row g-5 g-xl-8">
                      <div className="col-xl-12 ps-xl-12">
                        <div className="card bgi-position-y-bottom bgi-position-x-end bgi-no-repeat bgi-size-cover min-h-250px bg-body mb-5 mb-xl-8" style={{backgroundPosition: '100% 20px', backgroundSize: '500px auto', backgroundImage: 'url("assets/media/misc/city-cover.png")'}} dir="ltr">
                          <div className="card-body d-flex flex-column justify-content-center ps-lg-12">
                            <h3 className="text-dark fs-2qx fw-bold mb-7">CuMiLab - Curious . Minds . Laboratory</h3>
                            <h5>CuMiLab is a research and prototyping think tank with an approach to establish research inspired practice <br /> and practice informed by research. </h5>
                            <br />
                            <div className="m-0">
                              <a href=" " className="btn btn-dark fw-semibold px-6 py-3" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">
                                <span className="svg-icon svg-icon-3">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                                    <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                                    <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                                  </svg>
                                </span>
                                Create Project</a>
                            </div>
                          </div>
                        </div>

                        {/* =========part moved to project session======= */}

                        {/* <div className="card mb-5 mb-xl-8">
                          <div className="card-header border-0 pt-5">
                            <h2 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold fs-1 mb-1">All Projects</span>
                              <span className="text-muted mt-1 fw-semibold fs-7">List of all the projects with all it's details</span>
                            </h2>
                          </div>
                          <div className="card-body py-3">
                            <div className="tab-content">
                              <div className="tab-pane fade show active" id="kt_table_widget_5_tab_1">
                                <div className="table-responsive">
                                  <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                    <thead>
                                      <tr className="border-0">
                                        <th className="p-0 w-50px" />
                                        <th className="p-0 min-w-150px" />
                                        <th className="p-0 min-w-140px" />
                                        <th className="p-0 min-w-110px" />
                                        <th className="p-0 min-w-50px" />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <div className="symbol symbol-45px me-2">
                                            <span className="symbol-label">
                                              <img className="mw-50px mw-lg-45px" src="assets/media/misc/project-1-logo.png" alt="logo" />
                                            </span>
                                          </div>
                                        </td>
                                        <td>
                                          <a href="project.html" className="text-dark fw-bold text-hover-primary mb-1 fs-4">Project 1</a>
                                          <span className="text-muted fw-semibold d-block">Commercial Project</span>
                                        </td>
                                        <td className="text-end text-muted fw-bold">Project short description</td>
                                        <td className="text-end">
                                          <span className="badge badge-light-success">Approved</span>
                                        </td>
                                        <td className="text-end">
                                          <a href="project.html" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                            <span className="svg-icon svg-icon-2">
                                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                              </svg>
                                            </span>
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="symbol symbol-45px me-2">
                                            <span className="symbol-label">
                                              <img className="mw-50px mw-lg-45px" src="assets/media/misc/project-1-logo.png" alt="logo" />
                                            </span>
                                          </div>
                                        </td>
                                        <td>
                                          <a href="project.html" className="text-dark fw-bold text-hover-primary mb-1 fs-4">Project 2</a>
                                          <span className="text-muted fw-semibold d-block">Resedential Project</span>
                                        </td>
                                        <td className="text-end text-muted fw-bold">Project short description</td>
                                        <td className="text-end">
                                          <span className="badge badge-light-warning">Under Review</span>
                                        </td>
                                        <td className="text-end">
                                          <a href="project.html" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                            <span className="svg-icon svg-icon-2">
                                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                              </svg>
                                            </span>
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="symbol symbol-45px me-2">
                                            <span className="symbol-label">
                                              <img className="mw-50px mw-lg-45px" src="assets/media/misc/project-1-logo.png" alt="logo" />
                                            </span>
                                          </div>
                                        </td>
                                        <td>
                                          <a href="project.html" className="text-dark fw-bold text-hover-primary mb-1 fs-4">Project 3</a>
                                          <span className="text-muted fw-semibold d-block">Donation Project</span>
                                        </td>
                                        <td className="text-end text-muted fw-bold">Project short description</td>
                                        <td className="text-end">
                                          <span className="badge badge-light-danger">Rejected</span>
                                        </td>
                                        <td className="text-end">
                                          <a href=" " className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                            <span className="svg-icon svg-icon-2">
                                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                              </svg>
                                            </span>
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}



                      </div>
                    </div>
                  </div>
                </div>
                <div id="kt_app_footer" className="app-footer d-flex flex-column flex-md-row align-items-center flex-center flex-md-stack py-2 py-lg-4">
                  <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">© 2023</span>
                    <a href=" " target="_blank" className="text-gray-800 text-hover-primary">CuMiLab </a> | All Rights Reserved.
                  </div>
                  <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li className="menu-item">
                      <a href=" " target="_blank" className="menu-link px-2">Privacy Policy</a>
                    </li>
                    <li className="menu-item">
                      <a href=" " target="_blank" className="menu-link px-2">Terms of Service</a>
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
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
          </svg>
        </span>
      </div>
      <div className="modal fade" id="kt_modal_new_target" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered mw-650px">
          <div className="modal-content rounded">
            <div className="modal-header pb-0 border-0 justify-content-end">
              <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                <span className="svg-icon svg-icon-1">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                    <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
              <form id="kt_modal_new_target_form" className="form" action="#">
                <div className="mb-13 text-center">
                  <h1 className="mb-3">Create New Project</h1>
                  <div className="text-muted fw-semibold fs-5">If you need more info, please check
                    <a href=" " className="fw-bold link-primary">Project Guidelines</a>.</div>
                </div>
                <div className="d-flex flex-column mb-8 fv-row">
                  <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                    <span className="required">Project Name</span>
                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a project name as per the requirement" />
                  </label>
                  <input type="text" className="form-control form-control-solid" placeholder="Enter Project Name" name="target_title" />
                </div>
                <div className="d-flex flex-column mb-8">
                  <label className="fs-6 fw-semibold mb-2">Project Description</label>
                  <textarea className="form-control form-control-solid" rows={3} name="target_details" placeholder="Enter Project Description" defaultValue={""} />
                </div>
                <div className="fv-row mb-10">
                  <label className="d-block fw-semibold fs-6 mb-5">
                    <span className="required">Project Logo</span>
                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Upload Project Logo" />
                  </label>
                  <style dangerouslySetInnerHTML={{__html: ".image-input-placeholder { background-image: url('assets/media/svg/files/blank-image.svg'); } [data-bs-theme=\"dark\"] .image-input-placeholder { background-image: url('assets/media/svg/files/blank-image-dark.svg'); }" }} />
                  <div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
                    {/* begin::Preview existing avatar*/ }
                    <div className="image-input-wrapper w-125px h-125px" />
                    <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Upload Project Logo">
                      <i className="bi bi-pencil-fill fs-7" />
                      <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                      <input type="hidden" name="avatar_remove" />
                    </label>
                    <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel Project Logo">
                      <i className="bi bi-x fs-2" />
                    </span>
                    <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove Project Logo">
                      <i className="bi bi-x fs-2" />
                    </span>
                  </div>
                  <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                </div>
                <div className="text-center">
                  <button type="reset" id="kt_modal_new_target_cancel" className="btn btn-light me-3">Cancel</button>
                  <button type="submit" id="kt_modal_new_target_submit" className="btn btn-primary">
                    <span className="indicator-label">Create &amp; Send Invite</span>
                    <span className="indicator-progress">Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
}

export default Dashboard;