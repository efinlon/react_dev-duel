import { useState } from 'react'
import axios from 'axios'
import Button from './Button'
import token from '../token'
​
const InspectForm = () => {
  const [username, setUsername] = useState('')
​
  const handleSubmit = event => {
    event.preventDefault()
    const request = axios
      .get(`https://dev-duel-server.herokuapp.com/user/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
    return request
  }
​
  return (
    <form onSubmit={handleSubmit}>
      <label>
        GitHub Username:
        <input
          name='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <Button>Do you have what it takes?</Button>
    </form>
  )
}
​
export default InspectForm