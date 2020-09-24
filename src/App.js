import React from "react";
import "./styles.css";
import LineOfAction from "./LineOfAction";

const SECOND = 1000;
const MINUTE = 60 * SECOND;

export default function App() {
  const poses = [];
  poses.push({
    text: "Imogen Cunningham",
    noCountdown: true,
    poseLength: 1 * SECOND
  });

  /////

  const oneMinutePoses = [
    'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/ictrust/images/view/57dea38a03d9522694b056dcbead9db1/imogencunninghamtrust-spiral-back-1930.jpg',
    'https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/ictrust/images/view/892648c30bdcdacd190a370056e4fbe8/imogencunninghamtrust-john-bovingdon-3-1929.jpg',
    'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/ictrust/images/view/7cb71b87b013049b6bdff301bbbab139/imogencunninghamtrust-roi-on-the-dipsea-trail-1918.jpg',
    'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Imogen-Cunningham-Nude-1956.jpg',
  ];
  oneMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 1 * MINUTE + (30 * SECOND),
    })
  });
  const twoMinutePoses = [
    'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/ictrust/images/view/35760d3ea2055674da7cd8348d5ca02c/imogencunninghamtrust-on-your-head-early-1930s.jpg',
    'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/ictrust/images/view/18f912e6bac492cd269870e8f5e86f85/imogencunninghamtrust-john-bovingdon-2-1929.jpg',
    'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/ictrust/images/view/52674f0bfa8af0f0ffc538f61d4dafe5/imogencunninghamtrust-martha-graham-36-1931.jpg',
    'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/ictrust/images/view/fce95aeb62eb1edd813effb798c90e0b/imogencunninghamtrust-nude-1939.jpg',
  ];
  twoMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 3 * MINUTE,
    })
  });
  const fiveMinutePoses = [
    'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/ictrust/images/view/16be0da70ee21d3a2a86c7c647a991ee/imogencunninghamtrust-roi-on-the-dipsea-trail-3-1918.jpg',
    'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Imogen-Cunningham-On-Oregon-Beach-1967.jpg',
  ];
  fiveMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 6 * MINUTE,
    })
  });
  const tenMinutePoses = [
    'https://verocskadotde.files.wordpress.com/2016/02/tumblr_ml9aaufdja1r5ehtlo1_1280.jpg?w=676',
    'https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/ictrust/images/view/2ee23fbfe3b89c3fce5f8624a14c1222/imogencunninghamtrust-phoenix-in-the-mirror-1969.jpg',
  ];
  tenMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 12 * MINUTE,
    })
  });
  return (
    <LineOfAction poses={poses} />
  );
}
