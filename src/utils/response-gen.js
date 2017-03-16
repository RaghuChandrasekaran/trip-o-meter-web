const successResponse = (res, response) => {
  res.status(200).send(response);
};

const errorResponse = (res, response, statuscode) => {
  res.status(statuscode).send(response);
};

export default { successResponse, errorResponse };
