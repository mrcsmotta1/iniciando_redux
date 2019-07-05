import React, { Component } from 'react';
import InitForm from './../components/initForm';

//Container
class App extends Component {
  render() {
    return (
      <div className="col">
        <p>
          <div className="card">
            <div className="card-header">
              Redux Form
            </div>
            <div className="card-body">
              <div className="card-title">My  Firts Redux Form</div>
              <InitForm />
            </div>
            <div className="card-footer">
              <p>Card Footer</p>
            </div>

          </div>
        </p>
      </div>
    );
  }
}

export default App;
