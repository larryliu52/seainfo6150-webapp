import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route path="/articlelist"><ArticleList list={Object.values(fetchedData)} /></Route>
        <Route path="/article"><Article article={Object.values(fetchedData)[1]} /></Route>
        <Route path="/dynamicarticle"><DynamicArticle article={Object.values(fetchedData)[1]} /></Route>
      </Switch>
    </div>
  );
}

export default App;
