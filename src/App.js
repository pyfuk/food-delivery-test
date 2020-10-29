import "./App.css";
import React, { useState } from "react";
import Products from "./Components/Products";
import Header from "./Components/Header";
import { productSub } from "./Hooks/Service";
import { useTransition, animated } from "react-spring";

function App() {
  const [show, set] = useState(false);

  const maskTransitions = useTransition(show, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const transitions = useTransition(show, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  productSub.subscribe((res) => set(true));

  return (
    <div>
      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="product-modal-mask"
              onClick={() => set(false)}
            ></animated.div>
          )
      )}
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="product-modal">
              Hello
            </animated.div>
          )
      )}

      <Header />
      <Products />
    </div>
  );
}

export default App;
