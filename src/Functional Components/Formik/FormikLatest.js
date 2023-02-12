import React from 'react'
import { Formik } from 'formik'
function FormikLatest() {
  return (
    <div>
      <h1>Formik Example</h1>
      <Formik
        initialValues = {{
          firstName : "",
          email : "",
          password : ""
        }}
        validate = {(values) => {
          let errors = {}
          if(values.firstName === ""){
            errors.firstName = "sdafasdf"
          }
          if(!values.firstName){
            errors.firstName = "Name Required"
          }
          if(!values.email){
            errors.email = "Email Required"
          }
          if(!values.password){
            errors.password = "Password Required"
          }
          if(values.password.length <= 6 && values.password.length > 0){
            errors.password = "Password too short"
          }
          return errors
        }}

        onSubmit = {(values) => {
          console.log("form submit",values)
        }}
      >
        {({
          values, 
          errors,
          touched, 
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => {
          return <form autoComplete='off' onSubmit={handleSubmit} >
          <div >
             <label htmlFor='firstName' > Name</label>
             <input onBlur={handleBlur} onChange={handleChange} value={values.firstName} id='firstName' name="firstName"  type="text" />
             {errors.firstName && touched.firstName ? <>{errors.firstName}</> : "" }
          </div>
          <div>
             <label htmlFor='email' >Email</label>
             <input onBlur={handleBlur} onChange={handleChange} value={values.email} id='email' name='email'  type="email" />
             {errors.email && touched.email ? <span style={{color : "red"}} >{errors.email}</span> : "" }
          </div>
          <div>
             <label>Password</label>
             <input onBlur={handleBlur} onChange={handleChange} value = {values.password} id='password' name='password' type="password" />
             {errors.password && touched.password ? <span style={{color : "red"}} >{errors.password}</span> : "" }
          </div>
          <input type='submit' value ="Register"/>
       </form>
        }}
      </Formik>
    </div>
  )
}

export default FormikLatest