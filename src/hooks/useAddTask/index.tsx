import {
	type ChangeEventHandler,
	type FormEventHandler,
	useState,
} from "react";

export const useAddTask = () => {
	const [taskName, setTaskName] = useState("");
	const [taskList, setTaskList] = useState<{ id: string; text: string }[]>([]);

	const handleChangeTaskName: ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setTaskName(event.target.value);
	};

	const handleSubmitTaskName: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		if (taskName === "") return;
		setTaskList([
			...taskList,
			{ id: window.crypto.randomUUID(), text: taskName },
		]);
		setTaskName("");
	};

	return {
		taskName,
		taskList,
		setTaskList,
		handleChangeTaskName,
		handleSubmitTaskName,
	};
};
