import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
    const article = {
        "title": "The Statue of Liberty's torch heads to new museum",
        "shortText": "The Statue of Liberty's original torch is getting a new home",
        "displayDate": "November 22nd 2018, 7:12 am",
        "timeStamp": "2018-11-22T15:12:24.000Z",
        "displayDate": "November 22nd 2018, 7:12 am",
        image: {
            _url: "https://cdn.cnn.com/cnnnext/dam/assets/160315093137-tollymore-forest-super-169.jpg",
            _height: "619",
            _width: "1100"
        }
    };

    /*
    it("renders correctly", () => {
        const { container } = render(<ArticleListItem article={article} />);
        expect(container).toMatchSnapshot();
    });
    */

    it("show more correctly", () => {
        const {container, getByText} = render(
            <ArticleListItem article={article} />
        );
        const button = getByText("Show more");
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
    });

    it("hide detail correctly", () => {
        const {container, getByText} = render(
            <ArticleListItem article={article} />
        );
        const button = getByText("Show more");
        fireEvent.click(button);
        const showLessButton = getByText("Show less");
        fireEvent.click(showLessButton);
        expect(container).toMatchSnapshot();
    });
});