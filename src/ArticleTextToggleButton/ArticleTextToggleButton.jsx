import React from "react"
import css from "./ArticleTextToggleButton.module.css"

const ArticleTextToggleButton = ({buttonText, onClick}) => {
    return (
        <button className = {css.itemButton} onClick = {onClick}>{buttonText}</button>
    )
}

export default ArticleTextToggleButton