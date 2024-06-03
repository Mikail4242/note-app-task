import NoteDetail from "../components/NoteDetail/NoteDetail";

const NoteDetailPage = ({ notes, editNote }) => {
	return <NoteDetail notes={notes} editNote={editNote} />;
};

export default NoteDetailPage;
