import { render, screen, RenderResult,} from "@testing-library/react";
import { Input } from "./index";

describe("Input", () => {
  let renderResult: RenderResult;

  // それぞれのテストケース前にコンポーネントを描画し、renderResultにセットする
  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("何も入力されていない初期レンダリング時はインプット要素が空であること", () => {
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    expect(inputNode).toHaveValue("");
  });
});
