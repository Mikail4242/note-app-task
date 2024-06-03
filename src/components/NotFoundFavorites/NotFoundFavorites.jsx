import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import "./NotFoundFavorites.css";

const NotFoundFavorites = () => {
    return (
        <div className="note-not-found-wrapper">
            <div className="note-not-found-card">
                <SmileOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
                <h2 className="note-not-found-title">No favorite notes found.</h2>
                <p className="note-not-found-text">Start adding some!</p>
            </div>
        </div>
    );
};

export default NotFoundFavorites;
