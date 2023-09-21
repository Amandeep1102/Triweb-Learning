function Product(){
    let products=[
        {
            id:'p1',
            product_name:"City Tour",
            image:"/images/city.jpeg",
            description:"It's a good tour",
            price:"20000"
        },
        {
            id:'p2',
            product_name:"Forest Tour",
            image:"/images/forest.jpeg",
            description:"It's a nature tour",
            price:"50000"
        },
        {
            id:'p3',
            product_name:"River side Tour",
            image:"/images/river.jpeg",
            description:"It's a river side tour",
            price:"30000"
        }
       ]
    return <div>
       <ul>
        <productlist products={products}/>
        </ul>
    </div>
}

export default Product;