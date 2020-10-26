import React, {useCallback, useState} from "react";
//import PropTypes from "prop-types";
//import HTMLText from "../HTMLText/HTMLText";
import css from "./ArticleListItem.module.css";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";

const ArticleListItem = (props) => {
  const [buttonText, setText] = useState("Show more");
  const onClick = useCallback(
    event => {
      setText(buttonText === "Show more" ? "Show less" : "Show more");
    },
    [buttonText]
  );

  let contents;

  if (buttonText == "Show less") {
    contents = <div><p>{props.article.shortText}</p><p className = {css.time}>{props.article.displayDate}</p></div>;
  } else {
    contents = "";
  }

  return (
    <article className = {css.articleBody}>
        <h1 className = {css.articleTitle}>{props.article.title}</h1>
          {contents}
        <ArticleTextToggleButton  buttonText = {buttonText} onClick = {onClick} />
    </article>
  );
};

export default ArticleListItem;
