import React, { useState } from "react";

import { useFilter } from "../../hooks/useFilter";
import { findById } from "../../utils/findById";
import { EditNote } from "../editNote/editNote";
import { TodoForm } from "../form";
import { Header } from "../header";
import { ListWrapper } from "../list";
import { BasicModal } from "../modal/basic_modal";

export const Application = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState([]);
  const [openModal, setIsOpenModal] = useState(false);

  const filteredData = useFilter(data, searchQuery);
  const onRemove = (id) => {
    const updatedNotes = data.filter((note) => note.id !== id);
    setData(updatedNotes);
  };

  const onEdit = (id) => {
    setEditId(id);
    setIsOpenModal(true);
  };

  const onSaveEdit = (updatedNote) => {
    setIsOpenModal(false);
    const idx = data.findIndex((note) => note.id === updatedNote.id);
    data[idx] = updatedNote;
    setData(data);
  };
  const onCloseModal = () => setIsOpenModal((prev) => !prev);

  return (
    <>
      <Header query={searchQuery} setQuery={setSearchQuery} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ListWrapper data={filteredData} onEdit={onEdit} onRemove={onRemove} />
        <TodoForm updateData={setData} />
      </div>
      <BasicModal isModalOpen={openModal} handleCancel={onCloseModal}>
        <EditNote existedNote={findById(data, editId)} onEdit={onSaveEdit} />
      </BasicModal>
    </>
  );
};
