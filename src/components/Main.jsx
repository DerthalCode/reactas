import React from "react";
import Article from "./Article";
import articles from "../data/articles";

class Main extends React.Component {
    render() {
        return (
            <main>
                <h2>Naujienos</h2>
                {articles.map(data => <Article key={data.id} title={data.title} content={data.content}/>)}
            </main>
        )
    }
}

export default Main;