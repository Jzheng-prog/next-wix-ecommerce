import CategoryList from "./components/CategoryList"
import ProductList from "./components/ProductList"
import Slider from "./components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 border border-red-400 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList/>
      </div>
      <div className="mt-24 border border-red-400">
        <h1 className="mb-12 border border-red-400 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 border border-red-400 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
      </div>
    </div>
  )
}

export default HomePage