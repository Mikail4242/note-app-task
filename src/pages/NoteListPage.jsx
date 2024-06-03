import NoteList from "../components/NoteList/NoteList";

const NoteListPage = ({
	currentPage,
	notes,
	onPageChange,
	editNote,
	deleteNote,
	totalNotes,
	toggleFavorite,
}) => {
	return (
		<NoteList
			notes={notes}
			currentPage={currentPage}
			totalNotes={totalNotes}
			onPageChange={onPageChange}
			editNote={editNote}
			deleteNote={deleteNote}
			toggleFavorite={toggleFavorite}
		/>
	);
};

export default NoteListPage;
