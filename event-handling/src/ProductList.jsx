//!Rendering list
//!.filter method to show product price <= 900 
//!.map method 

export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
    },
    {
      id: 2,
      name: "Phone",
      price: 888,
    },
    {
      id: 3,
      name: "Tablet",
      price: 777,
    },
  ];

  const productElements = products
    .filter((product) => {
      return(product.price <= 900);
    })
    .map((product) => {
      return (
        // if data comes from a database , can use databas key/IDs (unique)
        //! writing key in div attribute
        <div key={product.id}>
          <h3>{product.name}</h3>
          <h4>Price: ${product.price}</h4>
        </div>
      );
    });

  return (
    <div>
      <h2>Our products</h2>
      {
        productElements /* {products.map((product) => {
        return (
        //! if data comes from a database , can use databas key/IDs (unique)
          <div key={product.id}>
            <h3>{product.name}</h3>
            <h4>Price: ${product.price}</h4>
          </div>
        );
      })} */
      }

      {/* <h2>Our products</h2>
      <div>
        <h3>Laptop</h3>
        <p>Price: $999</p>
      </div>
      <div>
        <h3>Phone</h3>
        <p>Price: $999</p>
      </div>
      <div>
        <h3>Tablet</h3>
        <p>Price: $999</p>
      </div> */}
    </div>
  );
};
