import { useState, useEffect } from "react";
import Usefetch from "./components/Usefetch";
import Thumbnail from "./components/Thumbnail";
import Bar from "./Bar";
import Rooms from "./Rooms";
import Contact from "./Contact";

const Homepage = () => {
  const { data, isLoading, errors } = Usefetch(
    "http://127.0.0.1:8000/api/wallp/"
  );
  const [imageUrl, setUrl] = useState(null);
  useEffect(() => {
    if (!isLoading) {
      setUrl(data[1].image);
      console.log("url", imageUrl);
    }
  });
  return (
    <div className="Homepage">
      {!isLoading && <img src={imageUrl} alt={data[1].id} />}

      <Thumbnail />
      <div className="content">
        <Bar />
        <Rooms />
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
