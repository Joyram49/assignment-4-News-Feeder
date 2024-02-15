import { useEffect, useState } from "react";

export default function useNewsQuery(newsFilter) {
  const [newsData, setNewsData] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState("");
  const fetchNewsData = async (newsFilter) => {
    let newsCategory = newsFilter.filter ?? "general";
    let searchedNews = newsFilter.searchTerm;

    let apiUrl = import.meta.env.VITE_API_KEY;

    let url =
      newsFilter.searchTerm !== ""
        ? `${apiUrl}/search?q=${searchedNews}`
        : `${apiUrl}/top-headlines?category=${newsCategory}`;

    try {
      setLoading({
        ...loading,
        state: true,
        message: "fetching news data....",
      });

      const response = await fetch(url);
      if (!response.ok) {
        const errorMessage = `${response.statusText}: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      //   removing news articles which  description/content and title is null
      if ("articles" in data) {
        const filteredData = data?.articles?.filter(
          (article) =>
            article.description !== null &&
            article.title !== null &&
            article.content !== null
        );
        setNewsData(filteredData);
        setCategoryName(newsCategory);
      }
      if ("result" in data) {
        const filteredData = data?.result?.filter(
          (article) =>
            article.description !== null &&
            article.title !== null &&
            article.content !== null
        );
        setNewsData(filteredData);
        setCategoryName("");
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetchNewsData(newsFilter);
    }
    return () => {
      ignore = true;
    };
  }, [newsFilter]);

  return {
    newsData,
    loading,
    error,
    categoryName,
  };
}
