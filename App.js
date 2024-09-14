const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "This is h2 inside a div"),
    React.createElement(
      "h2",
      {},
      "This is h2 inside a div but this is sibling"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "This is h2 inside a div"),
    React.createElement(
      "h2",
      {},
      "This is h2 inside a div but this is sibling"
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
