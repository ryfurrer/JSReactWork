import React, { Component } from 'react';
import Square from './components/Square';
import Layout from './components/Layout';
import Row from './components/Row';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100vh', width: '100vw'}}>
				<Layout>
					<Row>
						<Square></Square>
						<Square></Square>
						<Square></Square>
						<Square></Square>
						<Square></Square>
					</Row>
					<Row>
						<Square></Square>
						<Square></Square>
					</Row>
				</Layout>
      </div>
    );
  }
}

export default App;