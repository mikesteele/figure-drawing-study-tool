import React from "react";
import "./styles.css";
import LineOfAction from "./LineOfAction";

const SECOND = 1000;
const MINUTE = 60 * SECOND;

export default function App() {
  const poses = [];
  poses.push({
    text: "Drawing from Reference",
    noCountdown: true,
    poseLength: 30 * SECOND
  });
  const thirtySecondPoses = [
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/33a3d6cfe81452c27bc89aa5fcd241a1.jpg',
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/575167660ee552ce3474e71fbec03655.jpg',
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/05d853c2050aecec97513ee36cedf8ff.jpg',
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/bdb7a1f2f17cb98d52a4cdf2c238d172.jpg',
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/227bc95529d23d762fc32bee2d79571e.jpg'
  ];
  thirtySecondPoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 30 * SECOND
    })
  });
  const oneMinutePoses = [
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/39ef7103753e37aabcc112d022588a79.jpg',
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/68e5d2c75e79d7f4675af7fa04522c76.jpg',
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/916.jpg',
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/1314.jpg',
    'http://www.artmodeltips.com/wp-content/uploads/2014/02/1016.jpg'
  ];
  oneMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: MINUTE
    })
  });
  const fiveMinutePoses = [
    'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/77035132_146186580102311_1773473909896901578_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=nXQcV8q5MoAAX-OdVWn&oh=2e5910c045b6f6ee172b29fba99d8b7c&oe=5E9D92A8',
    'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/72754352_161772908246109_48024568836202298_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=qqa7yMm6f5cAX9yd3yj&oh=be13a50a0023eb9bdead5369972d50b4&oe=5EA226FD'
  ];
  fiveMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 5 * MINUTE
    })
  });
  const fifteenMinutePoses = [
    'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/74535959_2384011265197390_5538348833372243780_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=tW7Hm30gyqwAX8X0VUN&oh=3602b3071c27f31f72686a89e16c8147&oe=5EA54E2E'
  ];
  fifteenMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 15 * MINUTE
    })
  });
  return (
    <LineOfAction poses={poses} />
  );
}
