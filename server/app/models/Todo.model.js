/** @format */
module.exports = {
  get: function (con, callback) {
    con.query(`SELECT * FROM todo_list WHERE is_active="1"`, callback);
  },
  getById: function (con, id, callback) {
    con.query(
      `SELECT * FROM todo_list WHERE id = ${id} and is_active="1"`,
      callback
    );
  },
  getByStatus: function (con, status, callback) {
    if (status == "all") {
      con.query(`SELECT * FROM todo_list WHERE is_active="1"`, callback);
    } else {
      con.query(
        `SELECT * FROM todo_list WHERE status = ${status} and is_active="1"`,
        callback
      );
    }
  },
  create: function (con, data, callback) {
    let todo_details = {
      name: data.name,
      desc: data.desc,
    };

    let sql = "INSERT INTO todo_list SET ?";
    con.query(sql, [todo_details], callback);
  },
  update: (con, data, id, callback) => {
    let todo_details = {
      name: data.name,
      desc: data.desc,
      status: data.status,
    };
    let query = "UPDATE todo_list SET ? where id = ?";
    con.query(query, [todo_details, id], callback);
  },
  updateStatus: (con, id, status, callback) => {
    let delete_todo = {
      status: status,
    };
    let query = "UPDATE todo_list SET ? where id = ?";
    con.query(query, [delete_todo, id], callback);
  },
  destroy: (con, id, callback) => {
    let delete_todo = {
      is_active: "0",
    };
    let query = "UPDATE todo_list SET ? where id = ?";
    con.query(query, [delete_todo, id], callback);
  },
  destroyByStatus: (con, status, callback) => {
    let delete_todo = {
      is_active: "0",
    };
    if (status == "done") {
      let query = "UPDATE todo_list SET ? where status = 1";
      con.query(query, [delete_todo], callback);
    } else {
      let query = "UPDATE todo_list SET ? ";
      con.query(query, [delete_todo], callback);
    }
  },
};
