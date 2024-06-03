import NoteForm from "../components/NoteForm/NoteForm";

const NoteFormPage = ({ addNote, notes }) => {
	return <NoteForm addNote={addNote} notes={notes} />;
};

export default NoteFormPage;
