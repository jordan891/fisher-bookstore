import React from "react";
import "./Author.css";
import {AuthorDisplay} from "./AuthorDisplay";

export default class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    author: "Darius",
                },
                {
                    id: 2,
                    author: "Alexander",
                },
                {
                    id: 8,
                    author: "Charles",
                }
            ]
        };
    }


    render () {
        return (
            <div className="Authors">
                <div className = "lander">
                    <AuthorDisplay authors = {this.state.authors} />
                </div>
            </div>
        );
    }
}