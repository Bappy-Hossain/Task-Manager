const UsersModel = require("../models/UsersModel");

//Registration
exports.registration = (req, res) => {
  let reqBody = req.body;
  UsersModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};
