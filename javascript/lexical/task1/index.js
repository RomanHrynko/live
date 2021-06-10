/* eslint-disable */

/* 
globalLexEnv = {
  enviromentRecord: {
    message: 'Test',
    weight: 50,
    run: func { ... }
  },
  outerLexEnv: null
}

  forLexEnv = {
    enviromentRecord: {
      index: 0,
      message: 'Hello'
    },
    outerLexEnv: globalLexEnv
  }


createMessengerLexEnv = {
  enviromentRecord: {
    message: 'Just learn it!',
   ...
    setMessage: func
  },
  outerLexEnv: globalLexEnv
}

  runLexEnv = {
    enviromentRecord: {
      ...
    },
    outerLexEnv: globalLexEnv
  }

*/

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

for (let index = 0; index < 5; index += 1) {
  let message = 'Hello!';
  console.log(message);

  // const createMessenger = 'str';
  // createMessenger();
}

// console.log(sender);

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messange1 = createMessenger();
const messanger2 = createMessenger();
messange1.setSender('Test sender');
messanger1.sendMessage('Roman');

run();
