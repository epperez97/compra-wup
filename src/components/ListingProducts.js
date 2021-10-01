import React from 'react'
import  Product  from './Product';

const ListingProducts = ({
    items,
    addCart,
    removeCart,
}) => {
    return (
        <div>
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