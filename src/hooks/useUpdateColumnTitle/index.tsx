import {
	type ChangeEventHandler,
	type FormEventHandler,
	useEffect,
	useRef,
	useState,
} from "react";

export const useUpdateColumnTitle = () => {
	const [isInput, setIsInput] = useState(false);
	const [columnTitle, setColumnTitle] = useState("Task Title");
	const [columnTitleValue, setColumnTitleValue] = useState("");

	const columnTitleInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isInput && columnTitleInputRef.current) {
			columnTitleInputRef.current.focus();
		}
	}, [isInput]);

	const handleClickColumnTitle = () => {
		setIsInput(true);
	};

	const handleBlurColumnTitle = () => {
		setIsInput(false);
		setColumnTitleValue(columnTitle);
	};

	const handleChangeColumnTitle: ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setColumnTitleValue(event.target.value);
	};

	const handleSubmitColumnTitle: FormEventHandler<HTMLFormElement> = (
		event,
	) => {
		event.preventDefault();
		setColumnTitle(columnTitleValue);
		setIsInput(false);
	};

	return {
		isInput,
		columnTitle,
		columnTitleValue,
		columnTitleInputRef,
		handleClickColumnTitle,
		handleBlurColumnTitle,
		handleChangeColumnTitle,
		handleSubmitColumnTitle,
	};
};
