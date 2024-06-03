import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, message, Form } from "antd";
import "../NoteEdit/NoteEdit.css";

const NoteEdit = ({ note, saveNote }) => {
	const [editingContent, setEditingContent] = useState(note.content);
	const [editingTitle, setEditingTitle] = useState(note.title);
	const navigate = useNavigate();

	const handleContentChange = (e) => {
		setEditingContent(e.target.value);
	};

	const handleTitleChange = (e) => {
		setEditingTitle(e.target.value);
	};

	const handleSaveClick = () => {
		if (editingTitle.length < 1 || editingContent.length < 1) {
			return message.error("Title and content must have at least 1 character.");
		}
		saveNote({
			...note,
			title: editingTitle,
			content: editingContent,
		});
		navigate(`/`);
	};

	return (
		<div>
			<div>
				<Form.Item label="Edit title">
					<Input
						value={editingTitle}
						onChange={handleTitleChange}
						placeholder="Edit title"
					/>
				</Form.Item>
			</div>
			<div>
				<Form.Item label="Editcontent">
					<Input.TextArea
						value={editingContent}
						onChange={handleContentChange}
						placeholder="Edit content"
						rows={2}
					/>
				</Form.Item>
			</div>
			<div className="btn-save-wrapper">
				<Button onClick={handleSaveClick}>
					Save
				</Button>
			</div>
		</div>
	);
};

export default NoteEdit;
