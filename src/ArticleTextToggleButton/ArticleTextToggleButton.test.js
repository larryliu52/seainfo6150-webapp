import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleTextToggleButton tests", () => {
    it("renders correctly", () => {
        
        // Mock function
        const onClickFunction = jest.fn();

        const { container } = render(<ArticleTextToggleButton buttonText={"Show more"} onClick={onClickFunction}/>);
        
        expect(container).toMatchSnapshot();
    });
});