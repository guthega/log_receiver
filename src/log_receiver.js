const receiver = (receiverContext) => {
  const { config, log } = receiverContext;
  const { level } = config;

  log.debug('Example module configuration', receiverContext.config);

  return (message, messageContext) => new Promise((res) => {
    log.log(level, 'Message context', messageContext);
    log.log(level, 'Message content', message);

    res({});
  });
};

export default receiver;
