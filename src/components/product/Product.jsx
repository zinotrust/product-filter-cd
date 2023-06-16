import "./Product.css";
// import productImg from "../../images/7.png";

const Product = ({ title, img, price }) => {
  return (
    <div className="product --card">
      <img src={img} alt="product" />

      <div className="--bg-primary --center-all --p">
        <h3 className="--text-light">{title}</h3>

        <div className="--flex-between --width-100">
          <p className="--text-light">{price}</p>
          <button href="#" className="--btn --btn-danger">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
