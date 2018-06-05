import log from 'winston';

const receiver = (receiverContext) => {
  log.debug('Example module configuration', receiverContext.config);
  return (message, messageContext) => new Promise((res) => {
    log.debug('Message context', messageContext);
    log.debug('Message content', message);

    res({});
  });
};

export default receiver;
