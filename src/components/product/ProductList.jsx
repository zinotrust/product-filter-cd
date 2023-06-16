import { useEffect, useState } from "react";
import Search from "../search/Search";
import Product from "./Product";
import "./ProductList.css";
import { products as productData } from "../../products-data";
import Categories from "../categories/Categories";

const allCategories = [
  "all",
  ...new Set(productData.map((product) => product.category)),
];

const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterProduct = (category) => {
    if (category === "all") {
      setProducts(productData);
      return;
    }
    const newProducts = productData.filter(
      (product) => product.category === category
    );

    setProducts(newProducts);
  };

  useEffect(() => {
    console.log(allCategories);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className="--color-white --text-center">
            <span className="--color-danger ">Product </span>
            Filter
          </h1>
          <div className="--flex-between --flex-dir-column --py">
            {/* <p className="--color-white">input</p> */}
            <Search onInputChange={handleSearch} inputValue={search} />
            <Categories categories={categories} filterItems={filterProduct} />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="container products --grid-25 --py2">
          {filteredProducts.length === 0 ? (
            <h3>No product found!!!</h3>
          ) : (
            filteredProducts.map((product) => {
              const { id, title, img, price } = product;
              return (
                <div key={id}>
                  <Product title={title} img={img} price={price} />;
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
