import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { parseContent } from "../../utils/utils";
import "../NoteCard/NoteCard.css";

const Note = ({ note, deleteNote, toggleFavorite }) => {
	const handleDeleteClick = () => {
		deleteNote(note.id);
	};

	const handleToggleFavorite = () => {
		toggleFavorite(note.id);
	};

	return (
		<div>
			<Card
				className="card-container"
				title={
					<div className="card-title-wrapper">
						<Link
							className="card-title"
							to={`/note/${note.id}`}
							state={{ note: note }}>
							{note.title}
						</Link>
						{note.isFavorite ? (
							<StarFilled
								className="favorite-icon"
								onClick={handleToggleFavorite}
							/>
						) : (
							<StarOutlined
								className="favorite-icon"
								onClick={handleToggleFavorite}
							/>
						)}
					</div>
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
