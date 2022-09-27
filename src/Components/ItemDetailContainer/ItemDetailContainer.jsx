import React, {useState, useEffect} from 'react';
import { getSinlgeItems } from '../../Services/mockAPI';
import CardDetail from './CardDetail';

function ItemDetailContainer() {
    let [data, setData] = useState({});

    useEffect(() => {
        getSinlgeItems().then((respuestaDatos) => 
            setData(respuestaDatos));
    },[]);

    return (
        <CardDetail 
            key={data.id} 
            tittle={data.tittle}
            detail={data.detail}
            paginas={data.paginas}
            autor={data.autor}/>
    )
}

export default ItemDetailContainer
