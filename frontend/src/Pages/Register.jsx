// import React, { useState } from 'react'
// import axios from 'axios'

// const Register = () => {
//     const[formData,setformData] = useState({
//         name:'',
//         email:'',
//         password:'',
//         confirmPassword:''
//     })
//     const handleChange = (e) => {
//         setformData({
//             ...formData,
//             [e.target.name]:e.target.value
//         })   
//     }
//     const handleSubmit = async(e) =>{
//         e.preventDefault();
    
//     if(formData.password !== formData.confirmPassword){
//         alert('Password is incorrect')
//         return;
//     }

//     try{
//         const response = await axios.post('http://localhost:6000/api/auth/register',formData)
//         alert('Registration Successful');
//         console.log(response.data);
//     }
//     catch(error){
//         console.error(error);
//         alert('Error registering user!')
//     }
// }
//   return (
//     <div className='mt-3 d-flex justify-content-center align-items-center vh-100'>
//       <div className='card shadow' style={{ width: "400px", border: "1px solid #aaa" }}>
//         <div className='card-body'>
//           <h2 className='text-center mb-5'>Register</h2>
//           <form onSubmit={handleSubmit}>
//             <div className='mb-5 d-flex justify-content-center'>
//               <input 
//                 type='text' 
//                 className='form-control' 
//                 placeholder='Enter your Name'
//                 onChange={handleChange} 
//                 style={{ width: '300px' }}
//                 required 
//               />
//             </div>

//             <div className='mb-5 d-flex justify-content-center'>
//               <input 
//                 type='email'  
//                 className='form-control' 
//                 placeholder='Enter your Email'
//                 onChange={handleChange} 
//                 style={{ width: '300px' }}
//                 required 
//               />
//             </div>
//             <div className='mb-5 d-flex justify-content-center'>
//               <input 
//                 type='password' 
//                 className='form-control' 
//                 onChange={handleChange} 
//                 placeholder='Enter your Password' 
//                 style={{ width: '300px' }} 
//                 required 
//               />
//             </div>
//             <div className='mb-5 d-flex justify-content-center'>
//               <input 
//                 type='password'  
//                 className='form-control' 
//                 onChange={handleChange} 
//                 placeholder='Confirm your Password' 
//                 style={{ width: '300px' }} 
//                 required 
//               />
//             </div>
//             <button type='submit' className='mb-4 btn btn-dark w-100'>
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register
import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/register',
        formData
      )
      alert('Registration Successful')
      console.log(response.data)
    } catch (error) {
      console.error(error.response?.data || error.message)
      alert('Error registering user!')
    }
  }

  return (
    <div className="mt-3 d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow"
        style={{ width: '400px', border: '1px solid #aaa' }}
      >
        <div className="card-body">
          <h2 className="text-center mb-5">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5 d-flex justify-content-center">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your Name"
                onChange={handleChange}
                style={{ width: '300px' }}
                required
              />
            </div>

            <div className="mb-5 d-flex justify-content-center">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your Email"
                onChange={handleChange}
                style={{ width: '300px' }}
                required
              />
            </div>

            <div className="mb-5 d-flex justify-content-center">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your Password"
                onChange={handleChange}
                style={{ width: '300px' }}
                required
              />
            </div>

            <div className="mb-5 d-flex justify-content-center">
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm your Password"
                onChange={handleChange}
                style={{ width: '300px' }}
                required
              />
            </div>

            <button type="submit" className="mb-4 btn btn-dark w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

