const handleGetAll = (req, res) => {
    return (err, result) => {
      console.log(result);
        (err) ? 
        res.status(404).send("The data isnt found")
        : 
        res.send(result);
      }
}

module.exports = handleGetAll;