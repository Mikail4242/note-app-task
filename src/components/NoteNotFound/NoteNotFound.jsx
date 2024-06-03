import React from "react";
import { Card, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "../NoteNotFound/NoteNotFound.css";

const { Title } = Typography;

const NoteNotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="note-not-found-wrapper">
			<Card className="note-not-found-card" bordered={false}>
				<Title className="note-not-found-title" level={4}>
					Note Not Found
				</Title>
				<p className="note-not-found-text">The note you are looking for does not exist.</p>
				<Button type="primary" onClick={() => navigate(-1)}>
					Back
				</Button>
			</Card>
		</div>
	);
};

export default NoteNotFound;
