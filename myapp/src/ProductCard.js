function ProductCard({ name, price, inStock }) {
  return (
    <div className="w-64 p-5 rounded-xl shadow-lg bg-white border hover:shadow-2xl transition duration-300">
      <h2 className="text-lg font-semibold text-gray-800">
        {name}
      </h2>

      <p className="text-xl font-bold text-blue-600 mt-2">
        {price}
      </p>

      <span
        className={`inline-block mt-3 px-3 py-1 text-sm font-semibold rounded-full
        ${inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;
