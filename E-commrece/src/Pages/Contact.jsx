// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// export default function Contact() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   address: "",
  //   pincode: ""
  // });

  // const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  // const inputValue = (e) => {
  //   const { name, value: inputValue } = e.target;

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: inputValue
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmittedData(formData); // Set submittedData to display below the form
  // };

  // return (
  //   <>
  //     <div className="container mt-5">
  //       <h2 className="text-center">Contact Form</h2>
  //       <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
          
  //         <div className="mb-3">
  //           <label htmlFor="firstName" className="form-label fs-5">First Name</label>
  //           <input
  //             type="text"
  //             name="firstName"
  //             value={formData.firstName}
  //             onChange={inputValue}
  //             className="form-control"
  //             placeholder="Enter your first name"
  //           />
  //         </div>

  //         <div className="mb-3">
  //           <label htmlFor="lastName" className="form-label fs-5">Last Name</label>
  //           <input
  //             type="text"
  //             name="lastName"
  //             value={formData.lastName}
  //             onChange={inputValue}
  //             className="form-control"
  //             placeholder="Enter your last name"
  //           />
  //         </div>

  //         <div className="mb-3">
  //           <label htmlFor="email" className="form-label fs-5">Email</label>
  //           <input
  //             type="email"
  //             name="email"
  //             value={formData.email}
  //             onChange={inputValue}
  //             className="form-control"
  //             placeholder="Enter your email"
  //           />
  //         </div>

  //         <div className="mb-3">
  //           <label htmlFor="address" className="form-label fs-5">Address</label>
  //           <textarea
  //             name="address"
  //             value={formData.address}
  //             onChange={inputValue}
  //             className="form-control"
  //             rows="3"
  //             placeholder="Enter your address"
  //           ></textarea>
  //         </div>

  //         <div className="mb-3">
  //           <label htmlFor="pincode" className="form-label fs-5">Pincode</label>
  //           <input
  //             type="text"
  //             name="pincode"
  //             value={formData.pincode}
  //             onChange={inputValue}
  //             className="form-control"
  //             placeholder="Enter your pincode"
  //           />
  //         </div>

  //         <button type="submit" className="btn btn-primary w-100">Submit</button>
  //       </form>

  //       {/* Conditionally render the submitted data below the form */}
  //       {submittedData && (
  //         <div className="mt-4 p-3 bg-white rounded">
  //           <h5>Submitted Information:</h5>
  //           <p><strong>First Name:</strong> {submittedData.firstName}</p>
  //           <p><strong>Last Name:</strong> {submittedData.lastName}</p>
  //           <p><strong>Email:</strong> {submittedData.email}</p>
  //           <p><strong>Address:</strong> {submittedData.address}</p>
  //           <p><strong>Pincode:</strong> {submittedData.pincode}</p>
  //         </div>
  //       )}
  //     </div>
//     </>
//   );
// }




import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    pincode: ""
  });

  const [submittedData, setSubmittedData] = useState(null); 

  const inputValue = (e) => {
    const { name, value: inputValue } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: inputValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center">Contact Form</h2>
        <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
          
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label fs-5">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={inputValue}
              className="form-control"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label fs-5">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={inputValue}
              className="form-control"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fs-5">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={inputValue}
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label fs-5">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={inputValue}
              className="form-control"
              rows="3"
              placeholder="Enter your address"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="pincode" className="form-label fs-5">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={inputValue}
              className="form-control"
              placeholder="Enter your pincode"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>

        {/* Conditionally render the submitted data below the form */}
        {submittedData && (
          <div className="mt-4 p-3 bg-white rounded">
            <h5>Submitted Information:</h5>
            <p><strong>First Name:</strong> {submittedData.firstName}</p>
            <p><strong>Last Name:</strong> {submittedData.lastName}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>Pincode:</strong> {submittedData.pincode}</p>
          </div>
        )}
      </div>
    </>
  );
}




