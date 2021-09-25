import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/BlogPost/Breadcrumbs";
import News from "../components/BlogPost/News";
import RelatedPosts from "../components/BlogPost/RelatedPosts";
import Footer from "../components/Footer";

const BlogPost = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <News />
      <RelatedPosts />
      <Footer />
    </div>
  );
};

export default BlogPost;
