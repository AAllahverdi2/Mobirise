import { useGetAllProductsQuery } from "../../redux/productsApi/productsApi";
import "./index.scss";

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  console.log(products);

  return (
    <section className="products">
      <div className="container">
        <p>Devoted to wonderful beauty</p>
        <h3>Flowers Pricing</h3>
        <div className="productCards">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error...</p>}
          {products &&
            products.map((product, index) => (
              <div href="" className="product" key={index}>
                <div className="img">
                  <img src={product.image} alt="" />
                </div>
                <a href="">{product.name}</a>
                <span>${product.price}</span>
                <div className="cardFooter">
                    <button className="addToCart">
                        Add to cart
                    </button>
                    <button className="fav">Add to wishlist</button>
                </div>
              </div>
              
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
