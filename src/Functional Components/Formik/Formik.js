import React from 'react'
import { useFormik } from 'formik'
import FormikLatest from './FormikLatest'

function Formik() {

  const formik = useFormik({
    initialValues : {
      firstName : "",
      email : "",
      password : ""
    },
    validate : (values) => {
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
      return errors
    },
    onSubmit : (values) => {
      console.log("form submit",values)
    },
  })

  return (
    <div>
      {/* <form autoComplete='off' onSubmit={formik.handleSubmit} >
         <div >
            <label htmlFor='firstName' > Name</label>
            <input onChange={formik.handleChange} value={formik.values.firstName} id='firstName' name="firstName"  type="text" />
            {formik.errors.firstName ? <>{formik.errors.firstName}</> : "" }
         </div>
         <div>
            <label htmlFor='email' >Email</label>
            <input onChange={formik.handleChange} value={formik.values.email} id='email' name='email'  type="email" />
            {formik.errors.email ? <>{formik.errors.email}</> : "" }
         </div>
         <div>
            <label>Password</label>
            <input onChange={formik.handleChange} value = {formik.values.password} id='password' name='password' type="password" />
            {formik.errors.password ? <>{formik.errors.password}</> : "" }
         </div>
         <input type='submit' value ="Register"/>
      </form> */}
      <FormikLatest />
    </div>
  )
}

export default Formik