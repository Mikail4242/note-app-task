import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
	saveNotesToLocalStorage,
	getNotesFromLocalStorage,
	deleteNotes,
	editNotes,
	addNotes,
} from "./components/utils/utils";
import AppRoutes from "./routes/Routes";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		const storedNotes = getNotesFromLocalStorage();
		setNotes(storedNotes);
	}, []);

	const addNote = (note) => {
		addNotes(notes, note, setNotes, saveNotesToLocalStorage, uuidv4);
	};
	const editNote = (updatedNote) => {
		editNotes(notes, updatedNote, setNotes, saveNotesToLocalStorage);
	};

	const deleteNote = (id) => {
		deleteNotes(
			notes,
			id,
			currentPage,
			setCurrentPage,
			setNotes,
			saveNotesToLocalStorage,
			notesPerPage,
		);
	};

	const notesPerPage = 2;
	const currentNotes = notes.slice(
		(currentPage - 1) * notesPerPage,
		currentPage * notesPerPage,
	);

	return (
		<div className="App">
			<h3 className="title">Note App</h3>
			<Router>
				<AppRoutes
					notes={currentNotes}
					currentPage={currentPage}
					onPageChange={onPageChange}
					addNote={addNote}
					editNote={editNote}
					deleteNote={deleteNote}
					totalNotes={notes.length}
				/>
			</Router>
		</div>
	);
};

export default App;
