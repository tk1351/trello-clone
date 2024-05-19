import { renderHook } from "@testing-library/react";
import { useAddTask } from "./index.tsx";

describe("useAddTask", () => {
	describe("initialValue", () => {
		it("taskName が空文字であること", () => {
			const { result } = renderHook(useAddTask);
			expect(result.current.taskName).toBe("");
		});
		it("taskList が空配列であること", () => {
			const { result } = renderHook(useAddTask);
			expect(result.current.taskList).toStrictEqual([]);
		});
	});
});
