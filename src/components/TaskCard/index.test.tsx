import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TaskCard } from "./index.tsx";
import userEvent from "@testing-library/user-event";

describe("TaskCardComponent", () => {
	describe("a11y", () => {
		it('[role="heading"] が存在すること', () => {
			render(<TaskCard />);
			expect(screen.getByRole("heading")).toBeInTheDocument();
		});
		it('[role="button"] が存在すること', () => {
			render(<TaskCard />);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});
	});
	describe("event", () => {
		it("カラムタイトル部分をクリックしたとき、入力欄が表示されること", async () => {
			const user = userEvent.setup();
			render(<TaskCard />);
			await user.click(screen.getByTestId("column-title-container"));
			expect(
				screen.getByPlaceholderText("input task title"),
			).toBeInTheDocument();
		});
		it("入力欄に値を入力すると、カラムタイトルが更新されること", async () => {
			const user = userEvent.setup();
			render(<TaskCard />);
			await user.click(screen.getByTestId("column-title-container"));
			await user.type(screen.getByPlaceholderText("input task title"), "test");
			await user.keyboard("{Enter}");
			expect(screen.getByRole("heading")).toHaveTextContent("test");
		});
		it("入力中にフォーカスを外すと、カラムタイトルが元の値に戻ること", async () => {
			const user = userEvent.setup();
			render(<TaskCard />);
			await user.click(screen.getByTestId("column-title-container"));
			await user.type(screen.getByPlaceholderText("input task title"), "test");
			await user.keyboard("{Tab}");
			expect(screen.getByRole("heading")).toHaveTextContent("Column Title");
		});
	});
});
