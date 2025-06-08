"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const SuccessPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    const storedData = localStorage.getItem("formSubmissionData")
    if (storedData) {
      setFormData(JSON.parse(storedData))
    } else {
      navigate("/")
    }
  }, [navigate])

  const handleBackToForm = () => {
    localStorage.removeItem("formSubmissionData")
    navigate("/")
  }

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-teal-600 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="text-center py-8 px-4 border-b border-gray-100">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h1>
          <p className="text-gray-600">Your information has been submitted successfully.</p>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Submitted Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-700 pb-2 border-b border-gray-200">
                  Personal Information
                </h3>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">First Name:</span>
                    <p className="mt-1 text-gray-800">{formData.firstName}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500">Last Name:</span>
                    <p className="mt-1 text-gray-800">{formData.lastName}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500">Username:</span>
                    <p className="mt-1 text-gray-800">{formData.username}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500">Email:</span>
                    <p className="mt-1 text-gray-800">{formData.email}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500">Password:</span>
                    <p className="mt-1 text-gray-800 font-mono">{"•".repeat(formData.password.length)}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-700 pb-2 border-b border-gray-200">
                  Contact & Location
                </h3>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Phone Number:</span>
                    <p className="mt-1 text-gray-800">
                      {formData.countryCode} {formData.phoneNumber}
                    </p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500">Country:</span>
                    <p className="mt-1 text-gray-800">{formData.country}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500">City:</span>
                    <p className="mt-1 text-gray-800">{formData.city}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-medium text-gray-700 pb-2 border-b border-gray-200 mb-3">
                Identity Documents
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-sm font-medium text-gray-500">PAN Number:</span>
                  <p className="mt-1 text-gray-800 font-mono">{formData.panNumber.toUpperCase()}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-500">Aadhar Number:</span>
                  <p className="mt-1 text-gray-800 font-mono">
                    {formData.aadharNumber.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleBackToForm}
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Form
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print Details
              </button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <strong>Note:</strong> This is a demo form. In a real application, this data would be securely stored in
                a database and you would receive a confirmation email.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
