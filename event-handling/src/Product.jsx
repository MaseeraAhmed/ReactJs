//! Props :- How components talk to each other

export const Product = ({ title, price, InStock, categories }) => {
  return (
    <div>
      {/* <h3>{props.title}</h3>
        <p>Price: ${props.price}</p>
        <p>In stock: {props.InStock ? "Yes" : "No"}</p>
        <p>Catagory: {props.categories.join(", ")} </p> */}

      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>In stock: {InStock ? "Yes" : "No"}</p>
      <p>Catagory: {categories.join(", ")} </p>
    </div>
  );
};
