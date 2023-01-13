import { render, screen, RenderResult, fireEvent,} from "@testing-library/react";
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

  it("文字を入力したら、入力した内容が表示される", () => {
    const inputText = "test"
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    fireEvent.change(inputNode, {target: {value: inputText}})

    expect(inputNode).toHaveValue(inputText);
  })

  it("リセットボタンが押されたら入力されている内容がクリアされる", () => {
    const inputText = "test";
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    const buttonNode = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(buttonNode);

    expect(inputNode).toHaveValue('');
  })
});
