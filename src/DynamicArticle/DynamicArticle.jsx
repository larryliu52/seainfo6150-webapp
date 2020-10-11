import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <header>
        <h1>
          {props.article.title}
        </h1>
        <address>
          <i>by {props.article.author} (<a href={props.article.authorEmail}>{props.article.authorEmail}</a>)</i>
        </address>
        <time datetime={props.article.displayDate}>
          {props.article.displayDate}
        </time>
      </header>
      <section>
        <p>
          <HTMLText text={props.article.text} />
        </p>
      </section>
      <section>
        <br />
        Publishing time stamp date of the article: {props.article.timeStamp}
      </section>
    </article>
  );
};

export default DynamicArticle;
