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
    'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/72785460_860803181056306_2359251531681525506_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=d3_JeZg9j88AX8Aq6qV&oh=b8620a4f0e7152eca413d4d5d2cc0ecc&oe=5EE5E9CC',
    'https://instagram.fbed1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/80341921_2552719458341690_8522679405228009168_n.jpg?_nc_ht=instagram.fbed1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=gBmjZuKTgHsAX9rVASV&oh=d3f00fcf01cf2faa78bc9fe7be871656&oe=5EE7741A',
    'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/70126669_167556634390568_4901538217325174711_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=8YMHP0m6RooAX-rPGtr&oh=377a271ae9737ab661a1664867aa9c7c&oe=5EE44A85',
    'https://instagram.fbed1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/67897062_181741866186459_5145468789956321187_n.jpg?_nc_ht=instagram.fbed1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=sPI9YFH8LVkAX-RfBeg&oh=674ca85e2bb02954113d78fb70c56781&oe=5EE77F14'
  ];
  fiveMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 5 * MINUTE
    })
  });
  const fifteenMinutePoses = [
    'https://instagram.fbed1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/88251607_883998095355469_7692927271904665186_n.jpg?_nc_ht=instagram.fbed1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ngp2ilCw6F4AX9KS_BY&oh=3f17a66ef1488172f7b12637ed229ed7&oe=5EE47A00',
    'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/88132407_263918017928706_3202643818289898708_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=3KvOS7_NKboAX9tNXgO&oh=644baa1d54ec75721488e0eb5416503f&oe=5EE69B3B'
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
