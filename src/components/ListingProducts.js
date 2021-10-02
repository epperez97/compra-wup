import React from 'react'
import  Product  from './Product';
import '../assets/styles/sell-page.css';

const ListingProducts = ({
    items,
    addCart,
    removeCart,
}) => {
    return (
        <div className="listing-elements">
            {items.map((item) => {
                    console.log(item);
                    return(                 
                      <Product 
                        key={item.id}
                        item={item}
                        addCart={addCart}
                        removeCart={removeCart}
                    />        
                    );
                }
                )  
            }
        </div>
    )
}
export default ListingProducts;