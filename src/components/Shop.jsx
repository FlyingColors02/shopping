import { useContext } from "react";
import Product from "./Product";
import { CartContext } from "../store/shopping-cart-context";
import { DUMMY_PRODUCTS } from "../dummy-products";

export default function Shop() {

	const {addItemToCart} = useContext(CartContext);
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
									<li key={product.id}>
										<Product {...product} onAddToCart={addItemToCart} />
									</li>
								))}
      </ul>
    </section>
  );
}
