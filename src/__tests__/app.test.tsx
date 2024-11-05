import { render } from "@testing-library/react";

import App from "../app";

describe("App", () => {
  test("should render correctly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
  });
});
