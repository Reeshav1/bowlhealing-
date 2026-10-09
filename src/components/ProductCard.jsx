import products from "../Data/Products"

const ProductCard = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 bg-gray-100 h-64 sm:h-72 md:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <button className="inline-block text-gray-600 hover:text-yellow-600 font-medium text-sm sm:text-base transition-colors">
                  {product.description}
                </button>
              </div>
            </div>
          ))}
        </div></>
  )
}

export default ProductCard