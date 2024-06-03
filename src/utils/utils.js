export const parseContent = (content) => {
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	return content.replace(urlRegex, (url) => `<a href="${url}">${url}</a>`);
};

export const saveNotesToLocalStorage = (notes) => {
	localStorage.setItem("notes", JSON.stringify(notes));
};

export const getNotesFromLocalStorage = () => {
	const notes = localStorage.getItem("notes");
	return notes ? JSON.parse(notes) : [];
};

export const addNotes = (
	notes,
	note,
	setNotes,
	saveNotesToLocalStorage,
	uuidv4,
) => {
	const newNote = { ...note, id: uuidv4() };
	const updatedNotes = [...notes, newNote];
	setNotes(updatedNotes);
	saveNotesToLocalStorage(updatedNotes);
};

export const deleteNotes = (
	notes,
	id,
	currentPage,
	setCurrentPage,
	setNotes,
	saveNotesToLocalStorage,
	notesPerPage,
) => {
	const updatedNotes = notes.filter((note) => note.id !== id);
	//
	if (updatedNotes.length > 1) {
		const totalNotesAfterDeletion = updatedNotes.length;
		const totalPagesAfterDeletion = Math.ceil(
			totalNotesAfterDeletion / notesPerPage,
		);
		currentPage > totalPagesAfterDeletion
			? setCurrentPage(totalPagesAfterDeletion)
			: setCurrentPage(currentPage);
	}
	console.log(updatedNotes.length)
	//
	setNotes(updatedNotes);
	saveNotesToLocalStorage(updatedNotes);
};

export const editNotes = (
	notes,
	updatedNote,
	setNotes,
	saveNotesToLocalStorage,
) => {
	const updatedNotes = notes.map((note) =>
		note.id === updatedNote.id ? updatedNote : note,
	);
	setNotes(updatedNotes);
	saveNotesToLocalStorage(updatedNotes);
};

export const toggleFavorites = (setNotes, id, notes) => {
	const updatedNotes = notes.map((note) =>
		note.id === id ? { ...note, isFavorite: !note.isFavorite } : note,
	);
	setNotes(updatedNotes);
	saveNotesToLocalStorage(updatedNotes);
};
