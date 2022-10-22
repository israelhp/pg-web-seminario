import axios from 'axios'

const getProducts = async () => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}/Products/getbyrange?field=id&quantity=10&page=1`,
    )
    return data
  } catch (e) {
    return e.response
  }
}

export default { getProducts }
