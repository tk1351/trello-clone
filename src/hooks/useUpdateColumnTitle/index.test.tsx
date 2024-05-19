import { act, renderHook } from "@testing-library/react";
import { useUpdateColumnTitle } from "./index.tsx";

describe("useUpdateColumnTitle", () => {
	describe("initialValue", () => {
		it("isInput が false であること", () => {
			const { result } = renderHook(useUpdateColumnTitle);
			expect(result.current.isInput).toBeFalsy();
		});
		it('columnTitle が "Task Title" であること', () => {
			const { result } = renderHook(useUpdateColumnTitle);
			expect(result.current.columnTitle).toBe("Task Title");
		});
		it("columnTitleValue が空文字であること", () => {
			const { result } = renderHook(useUpdateColumnTitle);
			expect(result.current.columnTitleValue).toBe("");
		});
	});
	describe("act", () => {
		it("handleClickColumnTitle が実行されると、 isInput が true になること", () => {
			const { result } = renderHook(useUpdateColumnTitle);
			act(() => result.current.handleClickColumnTitle());
			expect(result.current.isInput).toBeTruthy();
		});
		it("handleBlurColumnTitle が実行されると、 isInput と columnTitleValue が上書きされること", () => {
			const { result } = renderHook(useUpdateColumnTitle);
			result.current.isInput = true;
			result.current.columnTitleValue = "test";
			act(() => result.current.handleBlurColumnTitle());
			expect(result.current.isInput).toBeFalsy();
			expect(result.current.columnTitleValue).toBe("Task Title");
		});
	});
});
