import type { FC } from "react";
import TrashCanSolidIcon from "../../assets/trash-can-solid.svg";
import { useAddTask } from "../../hooks/useAddTask";
import { useUpdateColumnTitle } from "../../hooks/useUpdateColumnTitle";
import styles from "./index.module.css";

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

	const { taskName, taskList, handleChangeTaskName, handleSubmitTaskName } =
		useAddTask();
	return (
		<div className={styles.container}>
			{/* TODO: キーボードイベントを追加 */}
			<div
				onClick={handleClickColumnTitle}
				onKeyDown={() => {}}
				data-testid="column-title-container"
				className={styles["column-title-container"]}
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
			<form onSubmit={handleSubmitTaskName}>
				<input
					placeholder="add a task"
					value={taskName}
					onChange={handleChangeTaskName}
				/>
			</form>
			{taskList.length !== 0 ? (
				<ul className={styles["task-list"]}>
					{taskList.map(({ id, text }) => (
						<li key={id} className={styles["task-list-item"]}>
							<span>{text}</span>
							<button
								type="button"
								className={styles["trash-button"]}
								aria-label="remove task"
							>
								<img src={TrashCanSolidIcon} alt="" width={15} height={15} />
							</button>
						</li>
					))}
				</ul>
			) : (
				<p>No task</p>
			)}
		</div>
	);
};
