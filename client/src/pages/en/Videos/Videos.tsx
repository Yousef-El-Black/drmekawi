import React, { useEffect, useState } from "react";
import axios from "axios";
import youtubeSearch from "youtube-search";

const Videos = () => {
  const [videos, setVideos] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const opts = {
        maxResults: 50,
        key: "AIzaSyC-EmZVfWXjfNkyorKohca5MywYA3sC_nM",
        type: "video",
      };

      youtubeSearch("mekawi", opts, function (err, results) {
        if (err) return console.log(err);

        setVideos(results);
      });
    };
    fetchData();
  });

  return <div></div>;
};

export default Videos;
