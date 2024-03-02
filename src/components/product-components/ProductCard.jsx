import React, { useContext } from 'react'
import { cartContext } from '../../context/Cart'
import { NavLink } from 'react-router-dom';

function ProCartQty({ cart, productId }) {
    let productCount;
    for (const obj of cart) {
        if (obj.productId == productId) {
            productCount = obj.quantity;
        }
    }
    return (<>{productCount > 0 && <><NavLink to="/cart" className="font-normal border-2 border-[#e4e4e4] rounded-full text-black text-xs px-[9px] py-[2px]">Qty: {productCount}</NavLink></>}</>)
}

function ProductCard({ product }) {
    const value = useContext(cartContext)
    const cart = value.cart;
    const setCart = value.setCart;

    function addToCart(productId, productTitle, productThumb, productPrice, productBrand, productCategory) {
        const ourCart = [...cart]
        if (ourCart.length == 0) {
            ourCart.push({
                productId: productId,
                quantity: 1,
                title: productTitle,
                thumb: productThumb,
                price: productPrice,
                brand: productBrand,
                category: productCategory
            })
            setCart(ourCart)
        } else {
            const cartToUpdate = []
            for (const obj of ourCart) {
                if (obj.productId == productId) {
                    cartToUpdate.push({
                        ...obj,
                        quantity: (function () {
                            return obj.quantity + 1
                        }())
                    })
                } else {
                    cartToUpdate.push({
                        ...obj
                    })
                }
            }

            if (ourCart.every(item => item.productId != productId)) {
                cartToUpdate.push({
                    productId: productId,
                    quantity: 1,
                    title: productTitle,
                    thumb: productThumb,
                    price: productPrice,
                    brand: productBrand,
                    category: productCategory
                })
            }
            setCart(cartToUpdate)
        }
    }

    return (<>
        <div className="w-72 bg-white shadow-md rounded-xl hover:shadow-xl">
            <div>
                <img src={product.thumbnail}
                    alt="Product" className="h-80 w-72 object-contain rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
                        <div className="ml-auto flex items-center gap-3">
                            <ProCartQty cart={cart} productId={product.id} />
                            <button onClick={() => { addToCart(product.id, product.title, product.thumbnail, product.price, product.brand, product.category) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" className="bi bi-bag-plus cursor-pointer" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default ProductCard