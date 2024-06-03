import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import { parseContent } from "../utils/utils";
import "../NoteCard/NoteCard.css";

const Note = ({ note, deleteNote }) => {
	const handleDeleteClick = () => {
		deleteNote(note.id);
	};

	return (
		<div>
			<Card
				className="card-container"
				title={
					<Link
						className="card-title"
						to={`/note/${note.id}`}
						state={{ note: note }}>
						{note.title}
					</Link>
				}>
				<p
					className="note-text"
					dangerouslySetInnerHTML={{
						__html: parseContent(note.content),
					}}></p>
			</Card>
			<div className="button-wrapper">
				<Button className="btn-delete" onClick={handleDeleteClick} danger>
					Delete
				</Button>
			</div>
		</div>
	);
};

export default Note;
