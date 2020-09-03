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
    'https://images.squarespace-cdn.com/content/v1/58cfe9e91b10e37dbd7bc584/1492106334987-8J4N6FJMSOPNMKDALM5J/ke17ZwdGBToddI8pDm48kFv3LHazbGYnNN3Vi_5sr8Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYLS5D5J7_WHFZltObcjbn9lcjbAp0kam0Iruh3pp3NmA-5z3kre7kcTBLQSsQRGFA/nude_no_18.jpg',
    'https://www.artic.edu/iiif/2/578e6ba1-7d84-17bd-2132-47d8d36b9a4f/full/1200,/0/default.jpg?w=1200&h=800&fit=crop',
    'https://images.squarespace-cdn.com/content/v1/58cfe9e91b10e37dbd7bc584/1490993169437-1LCUYN1YAAZSRYA8LUA0/ke17ZwdGBToddI8pDm48kHBaUNS0fNiFRgiTHksHhu97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQeuZXIG7TjYe36shGZgAh__IQ3dTkyMTKCk1ku1vH23hDu1IQrvWcV79sMhlbVyNQ/large_woman_looking_down_new_york_1994.jpg',
    'https://collectionapi.metmuseum.org/api/collection/v1/iiif/285064/605228/restricted',
    'https://images.squarespace-cdn.com/content/v1/58cfe9e91b10e37dbd7bc584/1490993188850-YY9F1V4DW1CEZH975RKV/ke17ZwdGBToddI8pDm48kI4tu_8ycCi4k4Rf-JEDEC97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UabjZDsffLhBimJM-Q3J7swnisjKD2oWBwbYXcVDNCPyNKOigyfB8BfAL6B2Stgizg/large_woman_nursel_new_york_1997_platinum.jpg?format=1000w',
  ];
  oneMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 1 * MINUTE + (30 * SECOND),
    })
  });
  const twoMinutePoses = [
    'https://images.squarespace-cdn.com/content/v1/58cfe9e91b10e37dbd7bc584/1490993215455-9S4UODZM032BTLXBF5O8/ke17ZwdGBToddI8pDm48kMP7xigjj5460vMkFpApG-R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UflvpuMvIvQ6gDF_GpzC02MRjBaVyhKbrInBKp-F4p4xQI1NuyNaxRHMfXcqRneseQ/nudes.jpg?format=2500w',
    'https://d32dm0rphc51dk.cloudfront.net/ND3cp0ieMCDP9IT-OAcoSg/large.jpg',
    'https://live.staticflickr.com/1525/26347902455_d2e58f261b_b.jpg',
    'https://hammer.ucla.edu/sites/default/files/migrated-assets/media/Blog/2016/March/Kate_Lawson/2015.7.1.jpg', // x
    'https://diotimainthegallery.files.wordpress.com/2016/03/wp_20160308_16_00_28_pro.jpg',
  ];
  twoMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 3 * MINUTE,
    })
  });
  const fiveMinutePoses = [
    'https://i.pinimg.com/564x/b8/09/80/b809807004cbbe41367fce793945944a.jpg',
    'https://i.pinimg.com/originals/cf/42/b6/cf42b6f519a2c34b1feba964b4f71777.jpg',
  ];
  fiveMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 6 * MINUTE,
    })
  });
  const tenMinutePoses = [
    'https://loeildelaphotographie.com/wp-content/uploads/2019/04/04.jpg',
    'https://d32dm0rphc51dk.cloudfront.net/dg6QA62eV8X1xsFWWvC3dg/large.jpg',
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
