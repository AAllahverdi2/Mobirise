import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishList } from '../../redux/WishListSlice/wishListSlice';
// import { removeFromWishList } from '../../redux/WishListSlice/wishListSlice';

const WishList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state?.wishList?.items);

  console.log("wishlist", wishlist);

  const handleRemove = (id) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <div className="container" style={{marginTop:"100px"}}>
      <div className="row">
        {
          wishlist.map((item, index) => {
            return (
              <div className="col-lg-3" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={item.image} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.price} AZN</h6>
                    <button className='btn btn-success' onClick={() => handleRemove(item._id)}>Remove</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default WishList;
