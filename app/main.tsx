import { render } from "inferno";

const message = "Hello world";

const MyComponent = ({ message }) => <div>{ message }</div>;

const x = 1 + "ha";dsfdsf

render(
  <MyComponent message={ message } />,
  document.getElementById("app")
);
