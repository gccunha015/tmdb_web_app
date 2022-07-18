import { useRef } from 'react';
import { LabelledInput } from 'components';
import { authenticate } from 'services/tmdb';
import { useNavigate } from 'react-router-dom';
import { TUser } from 'common/types';

function LoginContainer() {
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const apiKey = useRef<HTMLInputElement>(null);
	const navigateTo = useNavigate();

	const props = { type: 'password' };
	const usernameProps = {
		...props,
		id: 'username',
		label: 'Username',
		_ref: username,
	};
	const passwordProps = {
		...props,
		id: 'password',
		label: 'Password',
		_ref: password,
	};
	const apiKeyProps = {
		...props,
		id: 'apiKey',
		label: 'Api Key',
		_ref: apiKey,
	};

	const submit = async () => {
		const inputs = {
			username: username.current,
			password: password.current,
			apiKey: apiKey.current,
		};
		let user = {} as TUser;
		for (const [key, input] of Object.entries(inputs)) {
			if (!input) return;
			user[key] = input.value;
		}
		await authenticate(user);
		navigateTo('/');
	};

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				submit();
			}}
		>
			<LabelledInput {...usernameProps} />
			<LabelledInput {...passwordProps} />
			<LabelledInput {...apiKeyProps} />
			<button>Log In</button>
		</form>
	);
}

export default LoginContainer;
