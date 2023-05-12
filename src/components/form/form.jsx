import React, { useState } from "react";

import { Button, Form, Input, Card, Typography } from "antd";
import moment from "moment";
import PropTypes from "prop-types";

import { generateID } from "../../utils/id_generator";

export const TodoForm = ({ updateData }) => {
  const { Title } = Typography;
  const [note, setNote] = useState({});

  const inputHandler = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSaveNote = () => {
    const newNote = {
      id: generateID(7),
      ...note,
      time: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };
    updateData((prev) => [...prev, newNote]);
    setNote({});
  };

  return (
    <Card style={{ maxWidth: 550, width: "90%", margin: "0.5rem 0" }}>
      <Title level={3} style={{ margin: "0 0 0.5rem 0" }}>
        Create Note
      </Title>
      <Form.Item>
        <Input
          name="title"
          value={note?.title || ""}
          onChange={inputHandler}
          placeholder="Title"
        />
      </Form.Item>

      <Form.Item>
        <Input.TextArea
          name="description"
          value={note?.description || ""}
          onChange={inputHandler}
          placeholder="Note"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          onClick={onSaveNote}
          block
          disabled={!note?.title || !note.description}
        >
          Update note
        </Button>
      </Form.Item>
    </Card>
  );
};

TodoForm.propTypes = {
  updateData: PropTypes.func.isRequired,
};
