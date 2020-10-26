import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";
import css from "./ArticleList.module.css"


const ArticleList = props => {
  return (
    <ul className = {css.articleList}>{props.articles.map(article => (
        <li key={article.slug}>
          <ArticleListItem article ={article} />
        </li>))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}
export default ArticleList;