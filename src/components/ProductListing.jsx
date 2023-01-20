import { useDispatch } from "react-redux"
import { ProductComponent } from "./ProductComponent";
import  axios  from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/e-comm/action";

export const ProductListing = () =>{
    // const products = useSelector((store) => store);
    // console.log(products);
    const dispatch = useDispatch();

    useEffect(() =>{
        fetchProducts();
    },[])

    const fetchProducts = async() =>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) =>{
            console.log('Err:',err)
        })
        // console.log(response.data);
        dispatch(setProducts(response.data))
    }

    return (
        <div className="ui grid container" style={{marginTop:'20px'}}>
            <ProductComponent/>
        </div>
    )
}