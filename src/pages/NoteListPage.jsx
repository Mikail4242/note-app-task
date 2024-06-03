import NoteList from "../components/NoteList/NoteList";

const NoteListPage = ({
	currentPage,
	notes,
	onPageChange,
	editNote,
	deleteNote,
    totalNotes
}) => {
	return (
		<NoteList
			notes={notes}
			currentPage={currentPage}
			totalNotes={totalNotes}
			onPageChange={onPageChange}
			editNote={editNote}
			deleteNote={deleteNote}
		/>
	);
};

export default NoteListPage;
