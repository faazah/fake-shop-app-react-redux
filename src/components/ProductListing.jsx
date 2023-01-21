import { useDispatch } from "react-redux"
import { ProductComponent } from "./ProductComponent";
import  axios  from "axios";
import { useEffect } from "react";
import { fetchProducts, setProducts } from "../redux/e-comm/action";

export const ProductListing = () =>{
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchProducts());
    },[])

    return (
        <div className="ui grid container" style={{marginTop:'20px'}}>
            <ProductComponent/>
        </div>
    )
}