import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button.js";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Hey I'm a button"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Hey I'm a button");
});

it("renders button alt", () => {
  const { getByTestId } = render(<Button label="Save"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Save");
});

it("Matches snapshot", () => {
  const tree = renderer.create(<Button label="Hello"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
