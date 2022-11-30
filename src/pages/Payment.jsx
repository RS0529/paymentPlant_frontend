// import React from "react";
// import styled from "styled-components";
// // import { GlobalStyle } from "../Styles/globalStyles";
// import { useFormik } from "formik";
// import { singnUpSchema } from "../schema";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   username: "",
//   mobileNum: "",
// };

// const Payment = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       // initialValues: initialValues, //es6 object key and value  are same is destruture
//       initialValues,
//       validationSchema: singnUpSchema,
//       validateOnChange: true,
//       validateOnBlur: false,
//       onSubmit: (valu̥es, action) => {
//         console.log(
//           "🚀 ~ file: Registration.jsx ~ line 12 ~ Registration ~ valu̥es",
//           valu̥es
//         );

//         action.resetForm();
//       },
//     });
//   console.log(
//     "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
//     errors
//   );

//   return (
//     <>
//       {/* <GlobalStyle /> */}
//       <Wrapper>
//         <div className="container">
//           <div className="modal">
//             <div className="modal-container">
//               <div className="modal-left">
//                 <h1 className="modal-title">Welcome!</h1>
//                 <p className="modal-desc">
//                   To the Ravindra technical website for programmers.
//                 </p>
//                 <form onSubmit={handleSubmit} method="POST">
//                   <div className="input-block">
//                     <label htmlFor="name" className="input-label">
//                       Name
//                     </label>
//                     <input
//                       type="name"
//                       autoComplete="off"
//                       name="name"
//                       id="name"
//                       placeholder="Name"
//                       value={values.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.name && touched.name ? (
//                       <p className="form-error">{errors.name}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="email" className="input-label">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       autoComplete="off"
//                       name="email"
//                       id="email"
//                       placeholder="Email"
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.email && touched.email ? (
//                       <p className="form-error">{errors.email}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="password" className="input-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="password"
//                       id="password"
//                       placeholder="Password"
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.password && touched.password ? (
//                       <p className="form-error">{errors.password}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="username" className="input-label">
//                       User Name
//                     </label>
//                     <input
//                       type="username"
//                       autoComplete="off"
//                       name="username"
//                       id="username"
//                       placeholder="User Name"
//                       value={values.username}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.username && touched.username ? (
//                       <p className="form-error">{errors.username}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="mobileNum" className="input-label">
//                       Mobile Number
//                     </label>
//                     <input
//                       type="mobileNum"
//                       autoComplete="off"
//                       name="mobileNum"
//                       id="mobileNum"
//                       placeholder="Mobile No"
//                       value={values.mobileNum}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.mobileNum && touched.mobileNum ? (
//                       <p className="form-error">{errors.mobileNum}</p>
//                     ) : null}
//                   </div>
//                   <div className="modal-buttons">
//                     <a href="#" className="">
//                       All User is Here
//                     </a>
//                     <button className="input-button" type="submit">
//                       Registration
//                     </button>
//                   </div>
//                 </form>
//                 <p className="sign-up">
//                   Already have an account? <a href="#">Sign In now</a>
//                 </p>
//               </div>
//               <div className="modal-right">
//                 <img
//                   src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.section`
//   .container {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #efedee;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .modal {
//     width: 100%;
//     /* height: 60px; */
//     background: rgba(51, 51, 51, 0.5);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     transition: 0.4s;
//   }
//   .modal-container {
//     display: flex;
//     max-width: 60vw;
//     width: 100%;
//     border-radius: 10px;
//     overflow: hidden;
//     position: absolute;
//     transition-duration: 0.3s;
//     background: #fff;
//   }
//   .modal-title {
//     margin: 0;
//     font-weight: 400;
//     color: #55311c;
//   }
//   .form-error {
//     font-size: 1.4rem;
//     color: #b22b27;
//   }
//   .modal-desc {
//     margin: 6px 0 30px 0;
//   }
//   .modal-left {
//     padding: 60px 30px 20px;
//     background: #fff;
//     flex: 1.5;
//     transition-duration: 0.5s;
//     opacity: 1;
//   }
//   .modal-right {
//     flex: 2;
//     font-size: 0;
//     transition: 0.3s;
//     overflow: hidden;
//   }
//   .modal-right img {
//     width: 100%;
//     height: 100%;
//     transform: scale(1);
//     -o-object-fit: cover;
//     object-fit: cover;
//     transition-duration: 1.2s;
//   }
//   .modal.is-open .modal-left {
//     transform: translateY(0);
//     opacity: 1;
//     transition-delay: 0.1s;
//   }
//   .modal-buttons {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   .modal-buttons a {
//     color: rgba(51, 51, 51, 0.6);
//     font-size: 14px;
//   }
//   .sign-up {
//     margin: 60px 0 0;
//     font-size: 14px;
//     text-align: center;
//   }
//   .sign-up a {
//     color: #8c7569;
//   }
//   .input-button {
//     padding: 1.2rem 3.2rem;
//     outline: none;
//     text-transform: uppercase;
//     border: 0;
//     color: #fff;
//     border-radius: 4px;
//     background: #8c7569;
//     transition: 0.3s;
//     cursor: pointer;
//     font-family: "Nunito", sans-serif;
//   }
//   .input-button:hover {
//     background: #55311c;
//   }
//   .input-label {
//     font-size: 11px;
//     text-transform: uppercase;
//     font-weight: 600;
//     letter-spacing: 0.7px;
//     color: #8c7569;
//     transition: 0.3s;
//   }
//   .input-block {
//     display: flex;
//     flex-direction: column;
//     padding: 10px 10px 8px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     margin-bottom: 20px;
//     transition: 0.3s;
//   }
//   .input-block input {
//     outline: 0;
//     border: 0;
//     padding: 4px 0 0;
//     font-size: 14px;
//   }
//   .input-block input::-moz-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input:-ms-input-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input::placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block:focus-within {
//     border-color: #8c7569;
//   }
//   .input-block:focus-within .input-label {
//     color: rgba(140, 117, 105, 0.8);
//   }
//   @media (max-width: 750px) {
//     .modal-container {
//       max-width: 90vw;
//     }
//     .modal-right {
//       display: none;
//     }
//   }
// `;
// export default Payment;




import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { singnUpSchema } from "../schema";




const initialValues = {
  name: "",
  email: "",
  password: "",

};


const Payment = () => {
 
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      // initialValues: initialValues, //es6 object key and value  are same is destruture
      initialValues,
      validationSchema: singnUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (valu̥es, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 12 ~ Registration ~ valu̥es",
          valu̥es
        );

        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );



 

  return (
    <>
      <Wrapper>
        <div className="section">
          <div className="card">
            <div className="modal">
              <div className="modal-container">
                <div className="modal-left">
                  <h1 className="modal-title">Welcome!</h1>
                  <p className="modal-desc">
                    To the Ravindra technical website for programmers.
                  </p>
                  <form onSubmit={handleSubmit} method="POST">
                    <div className="input-block">
                      <label htmlFor="name" className="input-label">
                        Name
                      </label>
                      <input
                        type="name"
                        autoComplete="off"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <p className="form-error">{errors.name}</p>
                      ) : null}
                    </div>
                    <div className="input-block">
                      <label htmlFor="email" className="input-label">
                        Email
                      </label>
                      <input
                        type="email"
                        autoComplete="off"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="input-block">
                      <label htmlFor="password" className="input-label">
                        Password
                      </label>
                      <input
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                      ) : null}
                    </div>
                    <div className="modal-buttons">
                      <a href="#" className="">
                        All User is Here
                      </a>
                      <button className="input-button" type="submit">
                        Registration
                      </button>
                    </div>
                  </form>
                  <p className="sign-up">
                    Already have an account? <a href="#">Sign In now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="perfect-card-with-you">
          <h2>Perfect Card With You</h2>
          <p>
            with our card,you can top up your account anywhere, anytime. It's
            convenint and esay to use.Plus,there are no credit checks required.
            So if you're looking for a simple, convenient way to pay for your
            everyday expenses, playment planet card is the way to go{" "}
          </p>
          <button type="submit" value="Submit" className="btn">
            sign up
          </button>
        </div>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.section`
  padding: 3rem 0 5rem 0;
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    height: 68rem;
    margin-inline: 7px 78rem;
    border-radius:2.5px ;
  }
  .perfect-card-with-you {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    height: 33rem;
    margin-inline: 94rem 5rem;
    margin-top: -47rem;
    padding: 2rem;
    border-radius:2rem;
  }
  .p {
    word-spacing: 5px;
  }
  .btn {
    border-radius: 2rem;
    border: 0.1rem solid rgb(170 170 170 / 40%);
    background-color: red ;
    color:#fff ;
    width:10rem ;
    height:4rem ;
  }

  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }
  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }
  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }
  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }
  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: red;
  }
  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }
  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }
  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }
  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }
    .modal-right {
      display: none;
    }
  }
`;

  export default Payment;