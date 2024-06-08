import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import SkeletonCard from "./SkeletonCard";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (pageNumber) => {
    try {
      props.setProgress(20);
      const urls = Array.from({ length: props.pageSize }, (_, index) => {
        return `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&page=${pageNumber + index}&pageSize=1&category=${props.category}`;
      });

      setLoader(true);
      const responses = await Promise.all(urls.map(url => fetch(url)));

      props.setProgress(40);

      const parsedData = await Promise.all(
        responses.map(async (response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
          }
          return await response.json();
        })
      );

      setLoader(false);
      props.setProgress(70);

      const articles = parsedData.map(data => data.articles[0]);

      setArticles(articles);
      setPage(pageNumber);
      props.setProgress(100);
      setError(null);
    } catch (error) {
      setLoader(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [props.category, page, props.pageSize]);


  const handleNext = async () => {
    await fetchData(page + 1);
  };

  const handlePrevious = async () => {
    if (page > 1) {
      await fetchData(page - 1);
    }
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "system-ui",
          fontWeight: "600",
          fontSize: "2rem",
          margin: "2%",
        }}
      >
        Loungify - Top Headlines
        {props.category === "general" ? (
          " From Various Categories"
        ) : (
          <>
            {" "}
            Regarding{" "}
            <span style={{ textShadow: "0 0 20px #667eea" }}>
              {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
            </span>
          </>
        )}
      </h1>
      {loader && <div className="flex flex-wrap" style={{ width: "100%", alignItems: "center", justifyContent: "center", }}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>}
      {error && <div>Error: {error}</div>}
      <div className="flex flex-wrap justify-center">
        {!loader &&
          articles.map((element) => (
            <div
              key={element.url}
              className="flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            >
              <NewsItems
                title={element.title ? element.title.slice(0, 40) : ""}
                description={
                  element.description
                    ? element.description.slice(0, 75)
                    : "Description not provided for this news article."
                }
                newsURL={element.url}
                imgURL={element.urlToImage}
                date={element.publishedAt}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-around mt-3 mb-10">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevious}
          disabled={page <= 1 || loader}
        >
          &larr; Previous
        </button>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
          disabled={loader}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};
