import React from 'react'
import { useEffect, useState } from 'react'
import Loading from './Loading';
import ProductCard from './ProductCard';

function ProductGrid() {
    const [products, setProducts] = useState()
    const [showProduct, setShowProducts] = useState(false)

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json()
            setProducts(data.products)
            setShowProducts(true)
        }
        fetchProducts()
    }, [])

    return (<>
        <div>
            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {showProduct && products.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
                {!showProduct && <Loading />}
            </section>
        </div>
    </>)
}

export default ProductGrid