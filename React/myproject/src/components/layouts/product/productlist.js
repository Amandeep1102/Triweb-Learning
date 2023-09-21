import ProductItem from "./productitem";
import Styles from './ProductList.module.css';

function productlist(props){
    return <ul className={Styles.list}>
        {props.products.map((item)=>{
            return <ProductItem key={item.id} id={item.id} item={item}/>
        })}
        
        </ul>
}

export default productlist;