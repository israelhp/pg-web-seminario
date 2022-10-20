import axios from 'axios'
import { useEffect, useState } from 'react'
import { Ordenes } from './Ordenes'
import 'bootstrap/dist/css/bootstrap.css'

export const GetOrders = () => {



    const [ordenes, setOrdenes] = useState([])

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/OrdersByUser?userId=` +
                localStorage.getItem('userId'),
            )
            .then(response => {
                // Muestra en el log solo los resultados que necesitamos para las tarjetas
                setOrdenes(response.data.data)
                // console.log(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="container p-4" >
                <div className="row row-col-1">
                    <div className='container p-4 card'>
                        <div className="row row-col-1">
                            <div className='col-3 card'>
                                <p>{"Orden"} </p>
                            </div>
                            <div className='col-3 card'>
                                <p>{"Nombre"} </p>
                            </div>
                            <div className='col-3 card'>
                                <p>{"Fecha"} </p>
                            </div>
                            <div className='col-3 card'>
                                <p>{"Nit"} </p>
                            </div>
                        </div>

                        {ordenes.map((chars, id) => {
                            return <Ordenes key={id} chars={chars} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
