/** @format */

import React, { useState } from "react";
import {
  Weapper,
  Form,
  MainContainer,
  SubContainer,
  Label,
  Input,
  Button,
} from "./AddTodo.style";
const AddTodo = ({ saveTodo, formData, setFormData }) => {
  const handleForm = (e, tag) => {
    if (tag === "name") {
      setFormData({
        ...formData,
        name: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        desc: e.target.value,
      });
    }
  };
  const sendData = () => {
    saveTodo();
    setFormData({ name: "", desc: "", status: false });
  };
  return (
    <Form onSubmit={(e) => saveTodo(e, formData)}>
      <MainContainer>
        <SubContainer>
          <Input
            placeholder="Name"
            onChange={(e) => handleForm(e, "name")}
            type="text"
            id="name"
            value={formData.name}
          />
        </SubContainer>
        <SubContainer>
          <Input
            placeholder="Description"
            onChange={(e) => handleForm(e, "description")}
            type="text"
            id="description"
            value={formData.desc}
          />
        </SubContainer>
      </MainContainer>
      <Button onClick={sendData} disabled={formData.name === "" ? true : false}>
        Add Todo
      </Button>
    </Form>
  );
};

export default AddTodo;
