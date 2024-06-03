import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, Typography, Divider, Button } from "antd";
import { parseContent } from "../utils/utils";
import NoteNotFound from "../NoteNotFound/NoteNotFound";
import NoteEdit from "../NoteEdit/NoteEdit";
import "../NoteDetail/NoteDetail.css";

const { Title } = Typography;

const NoteDetail = ({ notes, editNote }) => {
	const { id } = useParams();
	const location = useLocation();
	const { note } = location.state || {};
	const navigate = useNavigate();
	const currentNote = note ? note : notes.find((note) => note.id === id);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveNote = (updatedNote) => {
		editNote(updatedNote);
		setIsEditing(false);
	};

	if (!currentNote) {
		return <NoteNotFound />;
	}

	return (
		<div>
			<div className="note-detail-wrapper">
				<Card className="note-detail-card" bordered={false}>
					<Title className="note-detail-title" level={5}>
						{currentNote.title}
					</Title>
					<Divider />
					{!isEditing && (
						<p
							className="note-detail-text"
							dangerouslySetInnerHTML={{
								__html: parseContent(currentNote.content),
							}}></p>
					)}
					{isEditing && (
						<NoteEdit note={currentNote} saveNote={handleSaveNote} />
					)}
				</Card>
				<div className="btn-container">
					<Button className="btn-edit" onClick={handleEditClick}>
						Edit
					</Button>
					<Button
						className="btn-back"
						type="primary"
						onClick={() => navigate(-1)}>
						Back
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NoteDetail;
