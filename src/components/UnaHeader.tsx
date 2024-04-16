import logo from '../assets/UNA_logo.png';
import '../App.css';

const UnaHeader: React.FC = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" width={'500px'} height={'100px'} />
			<p className='exercise-description'>
				Exercício feito em aula com intuito de aprender a criar uma aplicação React.js.
			</p>
			<a
				className="App-link"
				href="https://ulife.com.br"
				target="_blank"
				rel="noopener noreferrer"
			>
				Acessar o Ulife
			</a>
		</header>
	)
}

export default UnaHeader