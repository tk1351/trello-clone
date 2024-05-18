import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./reset.css";
import "./index.css";

// vite のテンプレートが non-null assertion のため
// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);