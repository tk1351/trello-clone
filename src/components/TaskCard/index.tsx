import type { FC } from "react";
import { useUpdateColumnTitle } from "../../hooks/useUpdateColumnTitle";

export const TaskCard: FC = () => {
	const {
		isInput,
		columnTitle,
		columnTitleValue,
		columnTitleInputRef,
		handleClickColumnTitle,
		handleBlurColumnTitle,
		handleChangeColumnTitle,
		handleSubmitColumnTitle,
	} = useUpdateColumnTitle();
	return (
		<div>
			{/* TODO: キーボードイベントを追加 */}
			<div
				onClick={handleClickColumnTitle}
				onKeyDown={() => {}}
				data-testid="column-container"
			>
				{isInput ? (
					<form onSubmit={handleSubmitColumnTitle}>
						<input
							value={columnTitleValue}
							onChange={handleChangeColumnTitle}
							onBlur={handleBlurColumnTitle}
							placeholder="input task title"
							ref={columnTitleInputRef}
						/>
					</form>
				) : (
					<h3>{columnTitle}</h3>
				)}
			</div>
			<button type="button">Delete</button>
			<input />
			<ul>
				<li>task</li>
			</ul>
		</div>
	);
};
