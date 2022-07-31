/** @format */

const Todo = require("../models/Todo.model");
const codes = require("../config/config");
module.exports = {
  index: function (req, res) {
    Todo.get(req.con, function (err, rows) {
      if (err) {
        console.log(err);

        let data = {
          status: codes.error,
          message: codes.error_message,
          data: "",
        };
        res.send(data);
      } else {
        let data = {
          status: 200,
          message: codes.success_message,
          data: rows,
        };
        res.send(data);
      }
    });
  },
  single: function (req, res) {
    Todo.getById(req.con, req.params.id, function (err, rows) {
      // res.json({ data: rows[0] });
      if (err) {
        console.log(err);

        var data = {
          status: codes.error,
          message: codes.error_message,
          data: "",
        };
        res.send(data);
      } else {
        let data = {
          status: codes.success,
          message: codes.success_message,
          data: rows[0] ? rows[0] : {},
        };
        res.send(data);
      }
    });
  },
  status: function (req, res) {
    Todo.getByStatus(req.con, req.query.status, function (err, rows) {
      // res.json({ data: rows[0] });
      if (err) {
        console.log(err);

        var data = {
          status: codes.error,
          message: codes.error_message,
          data: "",
        };
        res.send(data);
      } else {
        let data = {
          status: codes.success,
          message: codes.success_message,
          data: rows,
        };
        res.send(data);
      }
    });
  },
  store: function (req, res) {
    var input = req.body;
    let id = req.params.id;

    if (input.name == "") {
      var param1 = "name";
      var data = {
        status: codes.missing_arg,
        message: param1 + " " + codes.missing_arg_msg,
        data: "",
      };
      res.send(data);
    } else if (input.desc == "") {
      var param1 = "description";
      let data = {
        status: codes.missing_arg,
        message: param1 + " " + codes.missing_arg_msg,
        data: "",
      };
      res.send(data);
    } else {
      if (id) {
        Todo.update(req.con, req.body, id, function (err, rows) {
          if (err) {
            console.log(err);

            var data = {
              status: codes.error,
              message: codes.error_message,
              data: "",
            };
            res.send(data);
          } else {
            let data = {
              status: codes.success,
              message: codes.success_message,
              data: "",
            };
            res.send(data);
          }
        });
      } else {
        Todo.create(req.con, req.body, function (err, rows) {
          if (err) {
            console.log(err);

            var data = {
              status: codes.error,
              message: codes.error_message,
              data: "",
            };
            res.send(data);
          } else {
            let data = {
              status: codes.success,
              message: codes.success_message,
              data: rows.insertId,
            };
            res.send(data);
          }
        });
      }
    }
  },
  updateByStatus: (req, res) => {
    let id = req.params.id;
    let status = req.body.status;
    if (id == "") {
      var param1 = "id";
      var data = {
        status: codes.missing_arg,
        message: param1 + " " + codes.missing_arg_msg,
        data: "",
      };
      res.send(data);
    } else if (status == "") {
      var param1 = "status";
      var data = {
        status: codes.missing_arg,
        message: param1 + " " + codes.missing_arg_msg,
        data: "",
      };
      res.send(data);
    } else {
      Todo.updateStatus(req.con, id, status, (err) => {
        if (err) {
          var data = {
            status: codes.error,
            message: codes.error_message,
            data: "",
          };
          res.send(data);
        } else {
          var data = {
            status: codes.success,
            message: codes.success_message,
            data: "",
          };
          res.send(data);
        }
      });
    }
  },
  delete: (req, res) => {
    let id = req.params.id;
    if (id == "") {
      var param1 = "id";
      var data = {
        status: codes.missing_arg,
        message: param1 + " " + codes.missing_arg_msg,
        data: "",
      };
      res.send(data);
    } else {
      Todo.destroy(req.con, id, (err) => {
        if (err) {
          var data = {
            status: codes.error,
            message: codes.error_message,
            data: "",
          };
          res.send(data);
        } else {
          var data = {
            status: codes.success,
            message: codes.success_message,
            data: "",
          };
          res.send(data);
        }
      });
    }
  },
  deleteByStatus: (req, res) => {
    let status = req.body.status;
    if (status == "") {
      var param1 = "status";
      var data = {
        status: codes.missing_arg,
        message: param1 + " " + codes.missing_arg_msg,
        data: "",
      };
      res.send(data);
    } else {
      Todo.destroyByStatus(req.con, status, (err) => {
        if (err) {
          var data = {
            status: codes.error,
            message: codes.error_message,
            data: "",
          };
          res.send(data);
        } else {
          var data = {
            status: codes.success,
            message: codes.success_message,
            data: "",
          };
          res.send(data);
        }
      });
    }
  },
};
