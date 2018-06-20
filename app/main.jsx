import { render } from "inferno";

const message = "Hello world";

const MyComponent = ({ message }) => <div>{ message }</div>;

render(
  <MyComponent message={ message } />,
  document.getElementById("app")
);
