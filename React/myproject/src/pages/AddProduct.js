import AddProductForm from "../components/product/AddProductForm";

function AddProduct(){
    function addProductHandler(newProduct){
        fetch("http://localhost:3002/product",{
            method:"POST",
            body:newProduct,
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    return <AddProductForm addProductHandler={addProductHandler}/>
}

export default AddProduct;