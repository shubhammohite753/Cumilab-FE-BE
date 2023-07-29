import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [emailSent, setEmailSent] = useState(false);

  const handleFormSubmit = (data) => {
    // Send password reset request to the server
    console.log('Password reset request:', data);

    // Set emailSent to true to display success message
    setEmailSent(true);
  };

  return (
    <div id="kt_body_root" className="d-flex flex-column flex-root vh-100">
      <div className="d-flex flex-column flex-lg-row flex-column-fluid" id="kt_app_root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-lg-500px p-10">
                <form
                  className="form w-100"
                  noValidate
                  // id="kt_sign_in_form"
                  onSubmit={handleSubmit(handleFormSubmit)}
                >
                  <div className="text-center mb-11">
                    <h1 className="text-dark fw mb-3">Forgot Password</h1>
                    <div className="text-gray-400 fw-bold fs-4">
                      Enter your email to reset your password
                    </div>
                  </div>
                  {emailSent ? (
                    <div className="alert alert-success" role="alert">
                      An email has been sent to your email address with instructions to reset your
                      password.
                    </div>
                  ) : (
                    <>
                      <div className="fv-row mb-10">
                        <input
                          type="email"
                          className="form-control bg-transparent"
                          placeholder="Email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Invalid email address',
                            },
                          })}
                        />
                        {errors.email && (
                          <span className="text-danger">{errors.email.message}</span>
                        )}
                      </div>
                      <div className="d-grid mb-10">
                        <button type="submit" className="btn btn-dark">
                          Reset Password
                        </button>
                        <Link to="/" className="btn btn-light-dark fw-bolder fs-6 px-8 py-4 my-3 mx-2">
                          Cancel
                        </Link>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
            style={{ backgroundImage: "url(assets/media/misc/login-cover.jpg)" }}
          >
            <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
              <a href="/" className="mb-0 mb-lg-12">
                <img
                  alt="Logo"
                  src="assets/media/logos/logo-img.png"
                  className="h-60px h-lg-65px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
