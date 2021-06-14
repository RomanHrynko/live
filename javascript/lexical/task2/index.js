const createLogger = () => {
  // lexEnv:
  // {
  // warn,
  // log,
  // error,
  // getRecords,
  // nessages,
  // }
  const messages = [];

  // input: string
  // output: undefined
  function warn(stringWarn) {
    messages.push({ message: stringWarn, dateTime: new Date(), type: 'warn' });
  }

  function error(stringError) {
    messages.push({
      message: stringError,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(stringLog) {
    messages.push({
      message: stringLog,
      dateTime: new Date(),
      type: 'log',
    });
  }

  // input: string
  // output: array
  function getRecords(text) {
    // 1. Eslint does not work
    // 2. remove ifs
    // 3. duplicates
    // 4. reduntatn variables
    return (text ? messages.filter(message => message.tyoe === text) : [...messages]).sort(
      (a, b) => b.dateTime - a.dateTime,
    );
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

//testData

const logger1 = createLogger();
console.log(logger1);
logger1.error('saasadadsd');
logger1.error('hello');
logger1.log('some log');
console.log(logger1.getRecords('error'));
console.log(logger1.getRecords('qrwwr3r'));
