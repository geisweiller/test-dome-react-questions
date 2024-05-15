import React from 'react';
import { createRoot } from 'react-dom/client';

const Product = props => {
  const { product, onVote } = props;
  const plus = () => {
    onVote("plus")
  };
  const minus = () => {
    onVote("minus")
  };

  return (
    <li>
      <span>{product.name}</span> - <span>votes: {product.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  const [products, setProducts] = React.useState(props.products);
  const handleVote = (dir, index) => {
    setProducts(prev => prev.map((product, i) => {
      if (i === index) {
        return {
          ...product,
          votes: dir === "plus" ? product.votes + 1 : product.votes - 1
        }
      } else {
        return product;
      }
    }));
  };

  return (
    <ul>
     {products.map((product, index) => <Product key={index}  product={product} onVote={(dir) => handleVote(dir, index)} />)}
    </ul>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>);

setTimeout(() => {
  let plusButton = document.querySelector("ul > li > button");
  if(plusButton) {
    plusButton.click();
  }
  setTimeout(() => {
    console.log(document.getElementById('root').outerHTML);
  });
});