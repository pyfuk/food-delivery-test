import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./Components/Products";
import Header from "./Components/Header";
import { productSub } from "./Hooks/Service";
import { useTransition, animated } from "react-spring";
import Product from "./Components/Product";

function App() {
  const [show, set] = useState(false);
  let product = null;

  const maskTransitions = useTransition(show, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });
  const subscribe = productSub.subscribe((res) => {
    set(true);
  });

  const closeModal = () => {
    subscribe.unsubscribe();
    set(false);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:code">
            {maskTransitions.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    key={key}
                    style={props}
                    className="product-modal-mask"
                    onClick={() => closeModal()}
                  ></animated.div>
                )
            )}
            {transitions.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    key={key}
                    style={props}
                    className="product-modal"
                  >
                    <Product product={product} />
                  </animated.div>
                )
            )}
          </Route>
        </Switch>
        <Header />
        <Products />
      </div>
    </Router>
  );
}

export default App;
