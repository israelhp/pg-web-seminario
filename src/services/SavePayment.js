import axios from 'axios'



const savePayment = async (name, nit, paymentType, card, codeCard, securityCode, expirationDate, direccion, amount) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_API_URL}/Payments`, {
        name,
        paymentType,
        card,
        codeCard,
        securityCode,
        expirationDate,  
        amount,    
    })
    return data
  } catch (e) {
    return e.response
  }
}

export default savePayment
