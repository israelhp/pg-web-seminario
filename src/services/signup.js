import axios from 'axios'

const signup = async (email, username, password, role, dpi) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_API_URL}/Users`, {
      username,
      password,
      email,
      dpi,
      RolesId: role,
    })
    return data
  } catch (e) {
    return e.response
  }
}

export default signup
