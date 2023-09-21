import ProductItem from "./productitem";
import Styles from './ProductList.module.css';

function productlist(props){
    return <div className={Styles.list}>
        {props.products.map((item)=>{
            return <ProductItem item={item}/>
        })}

        </div>
}

export default productlist;