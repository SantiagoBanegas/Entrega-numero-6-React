import React, {useState, useEffect} from "react";
import Card from "./Card";
import "../ItemListContainer/ItemListContainercss.css";
import getItems  from "../../Services/mockAPI";


function ItemLisContainer() {

    let [data, setData] = useState([]);

    useEffect(() => {
                getItems().then((respuestaDatos) => {
                    setData(respuestaDatos);
            });
        },
        []);
    
    return(
        <div>
            <h1>Articulos</h1>
        <div className="tarjetas">
            
            {
                data.map((item) => {
                
                    console.log(item)
                    return <Card 
                    key={item.id}
                    tittle={item.tittle}  
                    category={item.category} 
                    price={item.price}
                    img={item.img}
                    stock={item.stock}/>
                }
                )
            }
        </div>
        </div>
            
    )
    
};

export default ItemLisContainer;