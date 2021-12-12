import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../index.css";
//jsx
import Card from "../components/Card";
//import SearchBar from "../components/SearchBar";
//import Listitems from "../app/Listitems";

const MainApp = () => {
  const [categoryItem, setcategoryItem] = useState("general");
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');

  const newsApi = async () => {
    const  url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=fba24b2484974aa5893d35c28f597364&category=${categoryItem}`
     const allApi = url ;
     console.log(allApi)
    const res = await fetch(allApi);
    const data = await res.json();
    console.log(data);
    setSearch(data.articles);
    const filterData=search && search.filter((value)=>value.title.includes("a"))
    console.log(filterData)

  };
  useEffect(() => {
    newsApi();
  }, [categoryItem]);
  //function category
  const selectCategory = (category) => {
    console.log(category);
    setcategoryItem(category);
  };
  //submit function
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setSearch();
  // };
  return (
    <>
      <div className="containers container-fluid">
        {/* <SearchBar
          isLoading={isLoading}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        /> */}
        <input
          value={query}
          placeholder="search news"
          name="query"
          className="search-bar"
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* list style type */}
        <div className="container p-2">
          <div className="list-cards">
            <ul className="text-center">
              <li>
                <h3 className='category'>Category : {categoryItem}</h3>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    selectCategory("general");
                  }}
                >
                  general
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    selectCategory("bussiness");
                  }}
                >
                  bussiness
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    selectCategory("health");
                  }}
                >
                  health
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    selectCategory("sports");
                  }}
                >
                  sports
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    selectCategory("science");
                  }}
                >
                  science
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    selectCategory("technology");
                  }}
                >
                  technologies
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* map */}
        <div className="box-container">
          {search
            ? search.filter((value)=>value.title.toLowerCase().includes(query.toLowerCase())).map((items) => <Card key={items.id} items={items} />)
            : "No Results."}
        </div>
      </div>
    </>
  );
};

export default MainApp;
