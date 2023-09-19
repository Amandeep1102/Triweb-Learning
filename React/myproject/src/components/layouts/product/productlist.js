import ProductItem from "./productitem";

function productlist(props){
    return <div>
        {props.products.map((item)=>{
            return <ProductItem item={item}/>
        })}

        </div>
}

export default productlist;