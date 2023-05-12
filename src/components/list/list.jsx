import React from "react";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { List, Button, Card } from "antd";
import PropTypes from "prop-types";

export const ListWrapper = ({ data, onEdit, onRemove }) => {
  return (
    <div
      style={{
        overflow: "auto",
        margin: "0.5rem 0",
        maxWidth: 550,
        width: "100%",
      }}
    >
      {data.length > 0 && (
        <List
          dataSource={data}
          renderItem={(item) => (
            <Card style={{ margin: "5px 0" }}>
              <List.Item
                actions={[
                  <Button
                    key="edit-btn"
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => onEdit(item.id)}
                  />,
                  <Button
                    key="remove-btn"
                    type="primary"
                    icon={<DeleteOutlined />}
                    onClick={() => onRemove(item.id)}
                    danger
                  />,
                ]}
              >
                <List.Item.Meta
                  style={{ textAlign: "start" }}
                  title={item?.title}
                  description={item?.description}
                />
              </List.Item>
            </Card>
          )}
        />
      )}
    </div>
  );
};

ListWrapper.propTypes = {
  data: PropTypes.array,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
