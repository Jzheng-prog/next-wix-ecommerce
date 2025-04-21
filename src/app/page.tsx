import {Suspense } from "react"
import CategoryList from "./components/CategoryList"
import ProductList from "./components/ProductList"
import Slider from "./components/Slider"

const HomePage = async () => {
  return (
    <div>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64" id="features">
        <h1 className="mb-12 text-2xl">Featured Products</h1>
        <Suspense fallback={'loading'}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID} limit={4}/>
        </Suspense>
      </div>
      
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="mb-12 text-2xl">Categories</h1>

        <Suspense fallback={'loading'}>
          <CategoryList/>
        </Suspense>
      </div>

    </div>
  )
}

export default HomePage