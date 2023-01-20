import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { removeSelectedProduct, selectedProduct } from "../redux/e-comm/action";

export const ProductDetail = () => {
    const dispatch = useDispatch();
    const product = useSelector((store) => store.product);
    // console.log(product);
    const { image, title, price, category, description } = product;
    const params = useParams();
    // console.log(params);
    const { productId } = params;

    useEffect(() => {
        if (productId && productId !== '')
            fetchProductDetail();

        //This return function only works when their is unmounting happening 
        return () =>{ 
            dispatch(removeSelectedProduct());
        }
    }, [productId])

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log('Err:', err);
        })
        // console.log(response.data);
        dispatch(selectedProduct(response.data));
    }
    return (
        <div className="ui grid container" style={{ marginTop: '100px' }}>
            {Object.keys(product).length === 0 ? ( //Object.keys(objName) ===> returns an array of keys
                <div>...Loading</div>              //Object.values(objName) ===> returns an array of values
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}