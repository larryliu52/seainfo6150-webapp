import React from "react";
import ArticleListItem from '../ArticleListItem/ArticleListItem';

const ArticleList = (props) => {
    const list = props.list
    const mapList = list.map((listItem) => (
        <li><ArticleListItem article = {listItem}/></li>
    ))
  return (
    <article>
        <ul>{mapList}</ul>
    </article>
  );
};

export default ArticleList;