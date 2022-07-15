import { LabelledInput, LabelledTextArea } from 'components';
import { RefObject } from 'react';
import { keepInputValue } from 'utils/localStorage';

function CreateListForm({ name, description, create }: Props): JSX.Element {
	const nameProps = {
		...name,
		label: 'Nome',
		onBlur: () => keepInputValue(name._ref, 'listName'),
	};
	const descriptionProps = {
		...description,
		label: 'Nome',
		onBlur: () => keepInputValue(description._ref, 'listDescription'),
	};
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				create();
			}}
		>
			<LabelledInput {...nameProps} />
			<LabelledTextArea {...descriptionProps} />
			<button>Criar Lista</button>
		</form>
	);
}

type Props = {
	name: {
		_ref: RefObject<HTMLInputElement>;
	};
	description: {
		_ref: RefObject<HTMLTextAreaElement>;
	};
	create(): void;
};

export default CreateListForm;
