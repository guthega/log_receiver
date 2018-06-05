
const receiver = (serverContext) => {
  serverContext.log.debug('Example module configuration', serverContext.config);
  return (message, messageContext) => new Promise((res) => {
    serverContext.log.debug('Message context', messageContext);
    serverContext.log.debug('Message content', message);

    res({});
  });
};

export default receiver;
