import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 inside a div"),
    React.createElement(
      "h2",
      {},
      "This is h2 inside a div but this is sibling"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "This is h3 inside a div"),
    React.createElement(
      "h4",
      {},
      "This is h4 inside a div but this is sibling child"
    ),
  ]),
]);

const heading = React.createElement(
  "h1",
  { className: "header" },
  "Hello from react!!"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
