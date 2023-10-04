import React from 'react'
import productImage from "./image/productImage.png"

function ProductSection(props) {
    const {
        id,productName,productRating,productPrice01,productPrice02,productImage,disabled,hidden,sale,} = props.data;
    /* star count */
    if (productRating > 0)
    {
        var star = []
        for (let i = 1; i <= productRating; i++) { 
            star.push(<div class="bi-star-fill"></div>)
        }
    }
    
    return (
        <div>
            <div className="col mb-5">
                <div className="card h-100">
                    {/* <!-- Sale badge--> */}
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right: "0.5rem"}}>{sale ? 'sale' : ''}</div>
                    {/*  <!-- Product image--> */}
                    <img className="card-img-top" src={productImage} alt="..." />
                    {/* <!-- Product details--> */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/*  <!-- Product name--> */}
                            <h5 className="fw-bolder">{productName}</h5>
                            {/*  <!-- Product ratings--> */}
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                {star}
                            </div>
                            {/* <!-- Product price--> */}
                            <span className="text-muted text-decoration-line-through">{productPrice01}</span>
                            {productPrice02}
                        </div>
                    </div>
                    {/*  <!-- Product actions-- add to cart> */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><button className="btn btn-primary mt-auto" disabled={disabled}
                            onClick={() => {props.handleAddtocartclick(id)}} >Add to Cart</button></div>
                    </div>
                    {/*  <!-- Product actions-- remove item> */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><button className="btn btn-primary mt-auto" hidden={hidden}
                            onClick={() => { props.handleRemoveItemclick(id) }} >Remove Item</button></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductSection