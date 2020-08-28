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
    poseLength: 1 * SECOND
  });
  const oneMinutePoses = [
    'https://farm8.staticflickr.com/7428/16403366992_ffb439e0c4_b.jpg', // 3
    'https://farm8.staticflickr.com/7386/16402532561_4b74ec7273_b.jpg', // 3
    'https://images.squarespace-cdn.com/content/v1/58cfe9e91b10e37dbd7bc584/1490988462787-66KYGE7HKAJE4CKNNQ1B/ke17ZwdGBToddI8pDm48kEsobnGl9DZrmUYTpufSpDF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UahE8vZqxbM74EnxPV-ETjy4tp7Y7cQnApgcENgadOSyFK4eMZgYA6RDahiKMr8qgw/mrs._martin_luther_king_jr._1_of_3_new_york_1.jpg?format=1500w', // 4
    'https://images.squarespace-cdn.com/content/v1/58cfe9e91b10e37dbd7bc584/1490988472473-ZD53ZPHCD6OTFCJ4R5MI/ke17ZwdGBToddI8pDm48kIMbOud1oKoCkfUO6INaGcF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URDKK3b0to1Mhy-BcODwFNX3qmz0YNtC7vsbfzdviRmovLLPXkhTEjK9lMSTGM1z-g/pere_couturier_paris_france_1948.jpg?format=1000w', // 4
    'https://i.pinimg.com/originals/f7/3e/73/f73e73602c8642a88556786957e35002.jpg',
  ];
  oneMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: MINUTE,
    })
  });
  const twoMinutePoses = [
    'https://farm8.staticflickr.com/7370/16216645818_a9d44f9c43_b.jpg', // 4
    'https://www.wexphotovideo.com/globalassets/blog-images/2011/03/miles-davis-by-irving-penn.jpg?width=500',
    'https://farm8.staticflickr.com/7403/16218372057_090b42ba3a_b.jpg', // star
    'https://farm9.staticflickr.com/8593/16218371997_89d1b090af_b.jpg', // 3
    'https://farm8.staticflickr.com/7389/16378310836_9fbfb87fa1_b.jpg', // 3
  ];
  twoMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: (2 * MINUTE) + (30 * SECOND),
    })
  });
  const fiveMinutePoses = [
    'https://farm9.staticflickr.com/8612/16402530951_7d0b646f7e_b.jpg', // star
    'https://farm9.staticflickr.com/8664/15781816794_b2e5f5a129_b.jpg', // 4
  ];
  fiveMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 5 * MINUTE,
    })
  });
  const tenMinutePoses = [
    'https://images.squarespace-cdn.com/content/v1/58cfe9e91b10e37dbd7bc584/1490988416950-0OASMS2GGB87CPTZPO46/ke17ZwdGBToddI8pDm48kBAFfBgHjvgZCAG1Cozm4rp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZNzdGtQ5VeqeNIYyo779VlVYb69lrnvLX2DVWDh8VKSkJlaroLwFu49mn6kEA5-HQ/jessye_norman_new_york_1983_platinum.jpg',
    'https://images.squarespace-cdn.com/content/v1/58cfe9e91b10e37dbd7bc584/1490988403903-8C6BAYB4U0SHS511DJ03/ke17ZwdGBToddI8pDm48kM61joYF9ehM9ZvD8wGz2FF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcK7KWGWKSXFzoKowgoIBIiSMdOMILRavYezSuqLilYzKRhZv8lFnZKFI_JfLJSLOQ/james_van_der_zee_new_york_1983.jpg?format=2500w',
  ];
  tenMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 10 * MINUTE,
    })
  });
  return (
    <LineOfAction poses={poses} />
  );
}
