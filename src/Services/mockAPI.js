const data = [
    {
        id:1,
        tittle: "Libro Js",
        price: 150,
        category: "Nuevo sin uso",
        img: "https://http2.mlstatic.com/D_NQ_NP_920687-MLA31024027949_062019-O.webp",
        stock: 15,

        detail: "Guia completa para aprender JavasCript",
        autor:"Salvaggio",
        paginas: "Numero de paginas : 452"
    },

    {
        id:2,
        tittle: "Libro Js",
        price: 100,
        category: "Usado",
        detail: "Usado",
        img:"https://http2.mlstatic.com/D_NQ_NP_653972-MLA30106327278_042019-O.webp",
        stock: 2
        
    },

    {
        id:3,
        tittle: "Libro HTML-CSS-Js",
        price: 200,
        category: "Nuevo",
        detail: "Nuevo sin uso",
        img:"https://http2.mlstatic.com/D_NQ_NP_644422-MLA31035529523_062019-V.webp",
        stock: 10
    }
]

export default function getItems(){

    return new Promise((resolve, reject) => {
        
        setTimeout(( ) => {
            resolve(data)
        }, 500);
    })

} 


export function getSinlgeItems(){

    return new Promise((resolve, reject) => {
        
        setTimeout(( ) => {
            resolve(data[0])
        }, 500);
    })

} 