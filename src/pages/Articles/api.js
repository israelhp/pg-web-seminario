import axios from 'axios';
import { useEffect, useState } from 'react';
import { Articulos } from './Articulos';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';
import NavBar from '../../components/NavBar/NavBar';

export const GetProducts = () => {
    const [articulos, setarticulos] = useState([]);
    const [active, setActive] = useState(1);

    const items = [];
    if (active < 3) {
        if (active < 1) {
            setActive(1)
        }
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={() => changePage(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
    } else {
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={active - (3 - number)} active={active - (3 - number) === active} onClick={() => changePage(active - (3 - number))}>
                    {active - (3 - number)}
                </Pagination.Item>,
            );
        }
    }

    const changePage = (val) => {
        setActive(val)
        axios.get(`${process.env.REACT_APP_API_URL}/Products/getbyrange?field=id&quantity=9&page=` + val).then((response) => {

            // Muestra en el log solo los resultados que necesitamos para las tarjetas
            setarticulos(response.data.data);
            // console.log(response.data);

        })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/Products/getbyrange?field=id&quantity=9&page=` + active).then((response) => {

            // Muestra en el log solo los resultados que necesitamos para las tarjetas
            setarticulos(response.data.data);
            // console.log(response.data);

        })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
        <NavBar></NavBar>
            <div style={{ display: 'block', width: "100%", padding: "30px 30px 0px 30px" }}>
                <Pagination style={{width: "fit-content",margin:"auto" }}>
                    <Pagination.Prev onClick={() => changePage(active - 1)} />
                    <Pagination.Ellipsis onClick={() => changePage(active - 5)} />
                    {items}
                    <Pagination.Ellipsis onClick={() => changePage(active + 5)} />
                    <Pagination.Next onClick={() => changePage(active + 1)} />
                </Pagination>
            </div>
            <div className='container'>
                <div className='row row-col-3' >
                    {
                        articulos.map((chars, id) => {
                            return <Articulos key={id} chars={chars} />
                        })
                    }
                </div>
            </div>
            <div style={{ display: 'block', width: "100%", padding: 30 }}>
                <div>
                    <Pagination style={{width: "fit-content",margin:"auto" }}>
                        <Pagination.Prev onClick={() => changePage(active - 1)} />
                        <Pagination.Ellipsis onClick={() => changePage(active - 5)} />
                        {items}
                        <Pagination.Ellipsis onClick={() => changePage(active + 5)} />
                        <Pagination.Next onClick={() => changePage(active + 1)} />
                    </Pagination>
                </div>
            </div>
        </>

    )
}