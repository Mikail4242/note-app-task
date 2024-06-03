import FavoriteNotes from "../components/FavoriteNotes/FavoritesNotes";

const FavoritePage = ({ notes, deleteNote, toggleFavorite,totalNotes, currentPage,onPageChange }) => {
	return (
		<FavoriteNotes
			notes={notes}
			deleteNote={deleteNote}
			toggleFavorite={toggleFavorite}
			totalNotes={totalNotes}
			currentPage={currentPage}
			onPageChange={onPageChange}
		/>
	);
};

export default FavoritePage;
