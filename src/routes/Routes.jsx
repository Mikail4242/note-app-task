import React from "react";
import { Route, Routes } from "react-router-dom";
import NoteFormPage from "../pages/NoteFormPage";
import NoteListPage from "../pages/NoteListPage";
import NoteDetailPage from "../pages/NoteDetailPage";
import NoteNotFoundPage from "../pages/NoteNotFoundPage";
import FavoritePage from "../pages/FavoritePage";

const AppRoutes = ({
	notes,
	currentPage,
	onPageChange,
	addNote,
	editNote,
	deleteNote,
	totalNotes,
	toggleFavorite,
}) => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<NoteListPage
						notes={notes}
						currentPage={currentPage}
						onPageChange={onPageChange}
						editNote={editNote}
						deleteNote={deleteNote}
						totalNotes={totalNotes}
						toggleFavorite={toggleFavorite}
					/>
				}
			/>
			<Route
				path="/add"
				element={<NoteFormPage addNote={addNote} notes={notes} />}
			/>

			<Route
				path="/favorites"
				element={
					<FavoritePage
						notes={notes}
						deleteNote={deleteNote}
						toggleFavorite={toggleFavorite}
						totalNotes={totalNotes}
						currentPage={currentPage}
						onPageChange={onPageChange}
					/>
				}
			/>
			<Route
				path="/note/:id"
				element={<NoteDetailPage notes={notes} editNote={editNote} />}
			/>
			<Route path="*" element={<NoteNotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;
