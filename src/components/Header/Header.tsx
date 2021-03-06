import * as S from './Header.styles';

function Header(): JSX.Element {
	return (
		<S.Header>
			<S.Img
				src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
				alt='TMDB attribution logo'
			/>
			<p>
				This product uses the TMDB API but is not endorsed or certified by TMDB.
			</p>
		</S.Header>
	);
}

export default Header;
