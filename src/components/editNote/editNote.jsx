import React, { useEffect, useState } from "react";

import { Button, Form, Input, Typography } from "antd";
import moment from "moment";
import PropTypes from "prop-types";

export const EditNote = ({ existedNote, onEdit }) => {
  const { Title } = Typography;
  const [note, setNote] = useState(existedNote);

  const inputHandler = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onUpdateNote = () => {
    onEdit({ ...note, time: moment().format("MMMM Do YYYY, h:mm:ss a") });
    setNote({});
  };

  useEffect(() => {
    setNote(existedNote);
  }, [existedNote]);

  return (
    <div style={{ margin: "0.5rem 0" }}>
      <Title level={3} style={{ margin: "0 0 0.5rem 0" }}>
        Edit Note
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
          onClick={onUpdateNote}
          block
          disabled={!note?.title || !note.description}
        >
          Save note
        </Button>
      </Form.Item>
    </div>
  );
};

EditNote.propTypes = {
  existedNote: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
};
