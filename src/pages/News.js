import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/News/Breadcrumbs";
import NewsItem from "../components/News/NewsItem";
import Footer from "../components/Footer";

const News = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <NewsItem />
      <Footer />
    </div>
  );
};

export default News;
