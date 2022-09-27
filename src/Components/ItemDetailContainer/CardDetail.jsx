import React from 'react'


function CardDetail(props) {
    return (
        <div className='cardDetailContainer'>
            <div className='box'><img src="https://http2.mlstatic.com/D_NQ_NP_920687-MLA31024027949_062019-O.webp" alt="" /></div>
            <div className='box'>
                <h1>{props.tittle}</h1>
                <p>{props.detail}</p>
                <p>{props.paginas}</p>
                <h3>{props.autor}</h3>
            </div>
        </div>
    )
}

export default CardDetail