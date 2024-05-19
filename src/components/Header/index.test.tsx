import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "./index.tsx";

describe("Header Component", () => {
	describe("a11y", () => {
		it('[role="banner"]が存在すること', () => {
			render(<Header />);
			expect(screen.getByRole("banner")).toBeInTheDocument();
		});
		it('[role="heading"]が存在すること', () => {
			render(<Header />);
			expect(screen.getByRole("heading")).toBeInTheDocument();
		});
	});
	describe("render", () => {
		it('"Trello Clone" と表示されていること', () => {
			render(<Header />);
			expect(screen.getByText("Trello Clone")).toBeInTheDocument();
		});
	});
});
