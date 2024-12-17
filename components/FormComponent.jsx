import React from 'react'
import useForm from '../hooks/useForm'

function FormComponent() {
  const { values, handleChange, resetForm } = useForm({
    username: '',
    email: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', values)
    resetForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={values.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default FormComponent
