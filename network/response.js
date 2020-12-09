const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid data',
  '500': 'Internal error'
};

exports.success = function (req, res, message, status) {
  let statusCode = status;
  let statusMessage = message;

  if (!status) {
    statusCode = 200;
  }

  if (!message) {
    statusMessage = statusMessages[status];
  }

  res
    .status(statusCode)
    .send({error: '', body: statusMessage});
}

exports.error = function (req, res, message, status, details) {
  //
  console.error('[response error] ' + details)

  let statusCode = status || 500;
  let statusMessage = message || statusMessages[statusCode];

  res
    .status(statusCode)
    .send({
      error: statusMessage,
      body: ''
    });
}