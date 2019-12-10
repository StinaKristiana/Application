import React from 'react';
import { Container } from '@material-ui/core';
import Steppers from './Components/Steppers';

const App: React.FC = () => {
	return (
		<Container fixed>
			<Steppers/>
		</Container>
	);
};

export default App;
