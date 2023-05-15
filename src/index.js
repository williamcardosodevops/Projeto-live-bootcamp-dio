module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "BootCamp DIO infraestrutura como código.!",
        input: event,
      },
      null,
      2
    ),
  };
};
