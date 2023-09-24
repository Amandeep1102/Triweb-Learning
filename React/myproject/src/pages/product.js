import { useEffect, useState } from "react";

import Productlist from "../components/Product/ProductList";

function Product() {
    let [products, setProducts] = useState([]);
    let [isDataFetching, setIsDataFetching] = useState(true);

    useEffect(() => {
        setIsDataFetching(true);
        fetch('http://127.0.0.1:3004/product')
            .then(response => response.json())
            .then(responseData => {
                setIsDataFetching(false);
                setProducts(responseData.data)
            })
            .catch(err => console.log(err));
    }, [])


    if (isDataFetching) {
        return (
            <div>
                Loading . . .
            </div>
        )
    };
    return (
        <div>
            <Productlist products={products} />
        </div>
    )
}

export default Product;