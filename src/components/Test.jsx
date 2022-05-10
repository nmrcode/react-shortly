import React from "react";
import LinkStore from "../store/linkStore";

const Test = () => {
  return (
    <div>
      {LinkStore.loading}
      {LinkStore.items.map((link) => (
        <li>{link}</li>
      ))}
      <button onClick={() => LinkStore.createShortLink("google.com")}>
        create
      </button>
    </div>
  );
};

export default Test;
