const handleGetAll = (req, res) => {
    return (err, result) => {
        (!err) ? 
        res.status(404).send("The data isnt found")
        :
        res.send(result);
      }
}

exports = handleGetAll;