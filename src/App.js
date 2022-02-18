import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import NewsContent from './components/NewsContent';
import { apikey } from "./data/config"
import axios from 'axios'
import Footer from './components/Footer';
function App() {
  const [category, setCategory] = useState("general")
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const newsApi = async () => {
    try {
      const lower = category.toLowerCase();
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${lower}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch(error) {
      console.log(error)
    }
  };
  console.log(newsArray)
  useEffect(() => {
    newsApi();
  }, [newsResults,category])
  
  return (
    <div className="App">
      <Header setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults}/>
      <Footer/>
    </div>
  );
}

export default App;
