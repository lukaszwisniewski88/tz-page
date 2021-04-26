module.exports = async (req, res) => {
  const { name } = req.query
  res.send(`Hello ${name}, you just parsed the request body!`)
}
