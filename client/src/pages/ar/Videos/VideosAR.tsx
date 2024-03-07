import "./videosar.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import url from "url";
// import * as yt from "youtube-search-without-api-key";
// import youtubeSearch from "youtube-search";
// import youtubesearchapi from "youtube-search-api";
// import usetube from "usetube";
// import http from "http";
// import ytsr from "ytsr";
// import youtubeSearch from "youtube-search-no-api-key";
import Header from "../../../components/en/Header/Header";
import Footer from "../../../components/Footer/Footer";
import HeaderAR from "../../../components/ar/Header/HeaderAR";
// import * as yt from "youtube-search-without-api-key";

const testVideos = [
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title:
      "كيف تصبح جذاب بين الناس ؟ 3 أسرار رsadsdasdasاح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE1",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE2",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE3",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE4",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE5",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE6",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE7",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE9",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE8",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE11",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
  {
    channelId: "UCHu-IqjANYtsjRglHbg84kw",
    channelTitle: "Mekawi's Lifestyle",
    description:
      "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ...",
    id: "0pFzSN9pDfE12",
    kind: "youtube#video",
    link: "https://www.youtube.com/watch?v=0pFzSN9pDfE",
    publishedAt: "2024-02-08T12:00:03Z",
    thumbnails: { default: "/assets/images/imekawi-20231230-0049.jpg" },
    title: "كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!",
  },
];

const VideosAR = () => {
  const [videos, setVideos] = useState<any>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const opts = {
  //       maxResults: 50,
  //       key: "AIzaSyDkaVwO_Bs4ZklWwi6vqi3lzfQJTIWE3lc",
  //       type: "video",
  //     };
  //     youtubeSearch("mekawi", opts, function (err, results) {
  //       if (err) return console.log(err);
  //       console.dir(results);
  //       setVideos(results);
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="videosPageAr">
      <HeaderAR />
      <div className="content">
        <div className="container">
          {testVideos.map((item: any) => {
            return (
              <div key={item.id} className="videoCard">
                <div className="image">
                  <img src={item.thumbnails.default} alt="" />
                </div>
                <div className="text">
                  <span>{item.publishedAt.split("T")[0]}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideosAR;

/*
channelId: "UCHu-IqjANYtsjRglHbg84kw"
channelTitle: "Mekawi's Lifestyle"
description: "سجل معايا في التدريب الاونلاين من هنا  : https://drmekawi.com for business inquiries :- ✓ ( للاعلانات على القناة و التعاون التجاري ) ..."
id: "0pFzSN9pDfE"
kind: "youtube#video"
link: "https://www.youtube.com/watch?v=0pFzSN9pDfE"
publishedAt: "2024-02-08T12:00:03Z"
thumbnails: {default: {…}, medium: {…}, high: {…}}
title:"كيف تصبح جذاب بين الناس ؟ 3 أسرار راح تخليك صاحب هيبة وجاذبية !!"
*/
