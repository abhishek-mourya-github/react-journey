const heading = React.createElement("h1", { id: "heading" }, "hello world");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const parent = React.createElement("div", { id: "parent" },
  React.createElement("div", { id: "child" },
    [
      React.createElement("h1", {}, "hello kartik"),
      React.createElement("h2", {}, "hello cyborg"),
    ]
  ),
  React.createElement("div", { id: "child" },
    [
      React.createElement("h1", {}, "hello kartik"),
      React.createElement("h2", {}, "hello cyborg"),
    ]
  )
);

root.render(parent);
