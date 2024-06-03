import Note from "../NoteCard/NoteCard";
import "../FavoriteNotes/FavoritesNotes.css";
import { useNavigate } from "react-router-dom";
import { Button, Pagination } from "antd";
import NotFoundFavorites from "../NotFoundFavorites/NotFoundFavorites";

const FavoriteNotes = ({
	notes,
	deleteNote,
	toggleFavorite,
	currentPage,
	totalNotes,
	onPageChange,
}) => {
	const favoriteNotes = notes.filter((note) => note.isFavorite);
	const navigate = useNavigate();

	return (
		<>
			<h4 className="title-favorite">Favorite Notes</h4>
			<div className="favorite-notes-page">
				{favoriteNotes.length > 0 ? (
					favoriteNotes.map((note) => (
						<Note
							key={note.id}
							note={note}
							deleteNote={deleteNote}
							toggleFavorite={toggleFavorite}
						/>
					))
				) : (
					<NotFoundFavorites />
				)}
			</div>
			<div className="btn-back">
				<Button type="primary" onClick={() => navigate(-1)}>
					Back
				</Button>
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

export default FavoriteNotes;
