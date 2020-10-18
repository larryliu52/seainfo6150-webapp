import React from "react";

const ArticleListItem = (props) => {
  return (
    <article>
      <h1>{props.article.title}</h1>
      <p>{props.article.displayDate}</p>
      <p>{props.article.shortText}</p>
    </article>
  );
};

export default ArticleListItem;