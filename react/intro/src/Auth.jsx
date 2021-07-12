import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// Algo
// 1. Show login btn by default +++
// 2. Show spinner for 2 sec after login click
// 3. Show logout
// 4. Show login after logout click

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLogging: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLogging: true,
    });

    // inp: func, ms
    // out: undefined
    setTimeout(() => {
      this.setState({
        isLogging: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLogging, isLoggedIn } = this.state;

    if (isLogging) {
      return <Spinner size={50} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }

    return <Login onLogin={this.onLogin} />;
  }
}

export default App;
