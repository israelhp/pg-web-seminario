import axios from 'axios'

const logout = async token => {
  try {
    const data = await axios.post(
      `${process.env.REACT_APP_API_URL}/Auth/Logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return data
  } catch (e) {
    return e.response
  }
}

export default logout
