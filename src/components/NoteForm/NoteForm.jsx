import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import "../NoteForm/NoteForm.css";

const NoteForm = ({ addNote }) => {
	const navigate = useNavigate();
	const [note, setNote] = useState({ title: "", content: "" });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNote({
			...note,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		if (!note.title.trim() || !note.content.trim()) {
			return;
		}
		addNote(note);
		navigate("/");
	};

	return (
		<div className="note-form-wrapper">
			<Form className="note-form" layout="vertical" onFinish={handleSubmit}>
				<Form.Item
					label="title"
					required
					name="title"
					rules={[{ required: true, message: "Please input!" }]}>
					<Input
						name="title"
						placeholder="Title"
						value={note.title}
						onChange={handleChange}
					/>
				</Form.Item>
				<Form.Item
					label="content"
					required
					name="content"
					rules={[{ required: true, message: "Please input!" }]}>
					<Input.TextArea
						name="content"
						placeholder="Content"
						value={note.content}
						onChange={handleChange}
					/>
				</Form.Item>
				<div className="btn-note-form">
					<Button type="primary" htmlType="submit">
						Add note
					</Button>
					<Button type="primary" htmlType="submit" onClick={() => navigate(-1)}>
						Back
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default NoteForm;
