import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container';
import Portrait from './components/Portrait/Portrait';
import Row from './components/Row/Row';
import portraits from "./portraits.json";
import Col from "./components/Col/Col"

class App extends Component {

  state = {
    portraits
  }

  render() {
    return (
      <div>

        <Navbar />
        <Container>
          <Row>
            {
              this.state.portraits.map(portrait => (
                <Col size="sm-3">

                  <Portrait image={portrait.image}/>
                </Col>
              ))
            }
          </Row>
        </Container>

      </div>
    );
  }

}
export default App;
