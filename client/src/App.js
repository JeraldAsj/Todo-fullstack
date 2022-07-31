/** @format */
import React, { useEffect, useState } from "react";

import "./App.css";
import TodoItem from "./Components/TodoItem";
import AddTodo from "./Components/AddTodo";
import {
  Weapper,
  Heading,
  Fillter,
  Delete,
  Button,
  MainContainer,
  MainContainerOne,
  Span,
} from "./App.style";
import axios from "axios";
import {
  SERVERURL,
  getAll,
  cerateTask,
  update,
  updateByStatus,
  deleteById,
  getByStatus,
  deleteBystatus,
} from "./Utilities/Constants";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    desc: "",
    status: "",
  });
  const handleSaveTodo = () => {
    if (formData.id) {
      axios({
        method: "put",
        url: `${SERVERURL}${update}${formData.id}`,
        data: {
          name: formData.name,
          desc: formData.desc,
          status: formData.status,
        },
      })
        .then(function (response) {
          let status = response.data.status;
          if (status == "200") {
            getAllTodos();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios({
        method: "post",
        url: `${SERVERURL}${cerateTask}`,
        data: {
          name: formData.name,
          desc: formData.desc,
        },
      })
        .then(function (response) {
          let status = response.data.status;
          if (status == "200") {
            getAllTodos();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const deleteTodo = (id) => {
    axios({
      method: "delete",
      url: `${SERVERURL}${deleteById}${id}`,
    })
      .then(function (response) {
        let status = response.data.status;
        if (status == "200") {
          getAllTodos();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const deleteStatus = (status) => {
    axios({
      method: "delete",
      url: `${SERVERURL}${deleteBystatus}`,
      data: {
        status: status,
      },
    })
      .then(function (response) {
        let status = response.data.status;
        if (status == "200") {
          getAllTodos();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    /* if (tag == "all") {
      setFilterTodos([]);
      setTodos([]);
    } else if (tag == "done") {
      const todolist = todos.filter((todo, index) => !todo.status);
      setTodos(todolist);
      setFilterTodos(todolist);
    } else {
      const todolist = todos.filter((todo, index) => index != id);
      setTodos(todolist);
      setFilterTodos(todolist);
    } */
  };
  const editeTodo = (todoData) => {
    const todolist = todos.filter((todo, index) => todo.id != todoData.id);
    setTodos(todolist);
    setFilterTodos(todolist);
    setFormData(todoData);
  };
  const updateTodo = (todo) => {
    axios({
      method: "put",
      url: `${SERVERURL}${updateByStatus}${todo.id}`,
      data: {
        status: todo.status == "0" ? "1" : "0",
      },
    })
      .then(function (response) {
        let status = response.data.status;
        if (status == "200") {
          getAllTodos();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const filter = (status) => {
    axios({
      method: "get",
      url: `${SERVERURL}${getByStatus}`,

      params: {
        status: status,
      },
    })
      .then(function (response) {
        let status = response.data.status;
        let data = response.data.data;

        if (status == "200") {
          setFilterTodos(data);
          setTodos(data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getAllTodos = () => {
    axios
      .get(`${SERVERURL}${getAll}`)
      .then((response) => {
        let data = response.data.data;
        setFilterTodos(data);
        setTodos(data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <Weapper className="App">
      <Heading>Todos List</Heading>

      <AddTodo
        saveTodo={handleSaveTodo}
        formData={formData}
        setFormData={setFormData}
      />
      <Heading>Filtter By</Heading>

      <Fillter>
        <Button btn="All" onClick={() => filter("all")}>
          All
        </Button>
        <Button btn="Done" onClick={() => filter("1")}>
          Done
        </Button>
        <Button btn="Todo" onClick={() => filter("0")}>
          Todo
        </Button>
      </Fillter>
      {filterTodos.length > 0 ? (
        filterTodos.map((todo, index) => (
          <TodoItem
            key={todo.index}
            editeTodo={editeTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            todo={todo}
            index={index}
          />
        ))
      ) : (
        <MainContainer>
          <MainContainerOne>
            <Heading>Todo list are not available</Heading>
            <Span>Give your task name and clicke to add todo button</Span>
          </MainContainerOne>
        </MainContainer>
      )}

      <Delete>
        <Button btn="Delete" onClick={() => deleteStatus("done")}>
          Delete Done Tasks
        </Button>
        <Button btn="Delete" onClick={() => deleteStatus("all")}>
          Delete All Tasks
        </Button>
      </Delete>
    </Weapper>
  );
};

export default App;
