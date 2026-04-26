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

  return (
    <div>
      <h2>Our products</h2>
      {products.map((product) => {
        return (
          //! if data comes from a database , can use databas key/IDs (unique)
          <div key={product.id}>
            <h3>{product.name}</h3>
            <h4>Price: ${product.price}</h4>
          </div>
        );
      })}

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
