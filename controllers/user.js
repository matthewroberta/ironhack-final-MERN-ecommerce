
// export method from controller to use in routes
exports.sayHi = (req, res) => {
  res.json({message: 'hello there testing json export from controller' });
};