const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

const today = new Date();
const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today.getDate();
const currentDate = year + "/" + month + "/" + date;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "unicoredb"
})

//login
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM tbuseraccounts WHERE `user_idnum` = ?  AND `user_password` = ?";
    db.query(sql, [req.body.user_idnum,req.body.user_password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        else if(data.length > 0) {
            return res.json("Success");
        }
        else if(data.length === 0){
            return res.json("Failed");
        }
    })
})

//user names
app.get('/users/name', (req, res) => {
  const sql = "SELECT user_id, user_fname, user_lname FROM tbuseraccounts";
  db.query(sql, (err, result) => {
      if(err) return res.json({Message: "Error inside server"});
      else return res.json(result);
  })
})

//items
app.get('/items', (req, res) => {
    const sql = "SELECT *, tbdepartments.dept_name FROM tbitems INNER JOIN tbdepartments ON tbitems.dept_id=tbdepartments.dept_id";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        else return res.json(result);
    })
})

app.get("/items/:id", (req, res) => {
    const item_id = req.params.id;
    const sql = "SELECT *, tbdepartments.dept_name FROM tbitems INNER JOIN tbdepartments ON tbitems.dept_id=tbdepartments.dept_id WHERE tbitems.item_id = ?";
    db.query(sql, item_id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

//item names
app.get('/item_name', (req, res) => {
  const sql = "SELECT item_id, item_name FROM tbitems WHERE `item_quantity` > 0";
  db.query(sql, (err, result) => {
      if(err) return res.json({Message: "Error inside server"});
      else return res.json(result);
  });
});

app.post("/items/add", (req, res) => {
    const item_name = req.body.item_name;
    const item_serial = req.body.item_serial;
    const item_quantity = req.body.item_quantity;
    const item_desc = req.body.item_desc;
    const item_remarks = req.body.item_remarks;
    const item_buy_date = req.body.item_buy_date;
    const item_buy_cost = req.body.item_buy_cost;
    const dept_id = req.body.dept_id;
    
    const sql = "INSERT INTO tbitems (item_name, item_serial, item_quantity, item_desc, item_remarks, item_buy_date, item_buy_cost, dept_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [item_name, item_serial, item_quantity, item_desc, item_remarks, item_buy_date, item_buy_cost, dept_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Item Saved!");
        }
      }
    );
});

app.put("/items/:id", (req, res) => {
    const itemId = req.params.id;
    const sql = "UPDATE tbitems SET `item_name`= ?, `item_serial`= ?, `item_quantity`= ?, `item_desc`= ?, `item_remarks`= ?, `item_buy_date`= ?, `item_buy_cost`= ?, `dept_id`= ? WHERE `item_id` = ?";
   
    const values = [
        req.body.item_name,
        req.body.item_serial,
        req.body.item_quantity,
        req.body.item_desc,
        req.body.item_remarks,
        req.body.item_buy_date,
        req.body.item_buy_cost,
        req.body.dept_id
    ];
   
    db.query(sql, [...values, itemId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
});

app.delete("/items/:id", (req, res) => {
    const itemId = req.params.id;
    const sql = " DELETE FROM tbitems WHERE `item_id` = ? ";
   
    db.query(sql, [itemId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
});

//listen
app.listen(8081, () => {
    console.log("Listening");
})