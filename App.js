/**
 * 
 * creating this pattern using react
 * <div id="parent">
 *    <div id="child1">
 *        <h1> I am h1 </h1>
 *        <h2> I am h2 </h2>
 *    </div>
 *    <div id="child2">
 *        <h1> I am h1 </h1>
 *        <h2> I am h2 </h2>
 *    </div>
 * </div>
 *  
 */

const parent=React.createElement("div", {id: "parent"},[
  React.createElement("div", {id:"child1"},[
    React.createElement("h1", {}, "I am H1 TAG"),
    React.createElement("h2", {}, "I am H2 TAG")
  ]),
  React.createElement("div", {id:"child2"},[
    React.createElement("h1", {}, "I am H1 TAG"),
    React.createElement("h2", {}, "I am H2 TAG")
  ])
] )
console.log(parent);

const heading = React.createElement(
  "h1", {}, "Hi, Iam React!!"
  );
  console.log(heading); //returns object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);