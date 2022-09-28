import axios from 'axios'

const login = async (email, password) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_API_URL}/Auth`, {
      email,
      password,
    })
    return data
  } catch (e) {
    return e.response
  }
}

export default login
