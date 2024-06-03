import React from "react";
import { Pagination, Button } from "antd";
import NoteCard from "../NoteCard/NoteCard";
import { useNavigate } from "react-router-dom";
import "../NoteList/NoteList.css";

const NoteList = ({
	notes = [],
	currentPage,
	totalNotes,
	onPageChange,
	editNote,
	deleteNote,
}) => {
	const navigate = useNavigate();

	const handleAddNoteClick = () => {
		navigate("/add");
	};

	return (
		<>
			<div className="btn-wrapper">
				<Button
					className="add-note-btn"
					type="primary"
					onClick={handleAddNoteClick}>
					New Note
				</Button>
			</div>
			<div className="note-list">
				{notes.map((note) => (
					<NoteCard
						key={note.id}
						note={note}
						editNote={editNote}
						deleteNote={deleteNote}
					/>
				))}
			</div>
			<div className="pagination-wrapper">
				<Pagination
					current={currentPage}
					total={totalNotes}
					pageSize={2}
					onChange={onPageChange}
				/>
			</div>
		</>
	);
};

export default NoteList;
