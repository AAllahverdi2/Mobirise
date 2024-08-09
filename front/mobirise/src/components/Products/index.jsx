import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../../redux/productsApi/productsApi";
import "./index.scss";
import { addToBasket } from "../../redux/BasketSlice/basketSlice";
import { addToWishList } from "../../redux/WishListSlice/wishListSlice";

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  console.log(products);
  const dispatch=useDispatch()
  return (
    <section className="products" >
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
                    <button className="addToCart" onClick={()=>{
                      dispatch(addToBasket(product))
                    }}>
                        Add to cart
                    </button>
                    <button className="fav" onClick={()=>{
                      dispatch(addToWishList(product))
                    }}>Add to wishlist</button>
                </div>
              </div>
              
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
