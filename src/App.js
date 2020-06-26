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
    'https://www.artnet.com/WebServices/images/ll00274lldeBFJFgOjECfDrCWvaHBOctZnE/irving-penn-dancer-series-(alexandra-beller,-new-york).jpg',
    'https://media.mutualart.com/Images/2015_02/01/15/150954453/b43c430b-8041-49d2-9ac2-f3aec1114876.Jpeg',
    'https://images.squarespace-cdn.com/content/v1/58cfe9e91b10e37dbd7bc584/1490993215455-9S4UODZM032BTLXBF5O8/ke17ZwdGBToddI8pDm48kMP7xigjj5460vMkFpApG-R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UflvpuMvIvQ6gDF_GpzC02MRjBaVyhKbrInBKp-F4p4xQI1NuyNaxRHMfXcqRneseQ/nudes.jpg',
    'https://www.christies.com/img/LotImages/2012/NYR/2012_NYR_02586_0110_000(irving_penn_alexandra_beller_new_york_december_1999).jpg',
    'https://d2mpxrrcad19ou.cloudfront.net/item_images/1130441/11549567_fullsize.jpg'
  ];
  oneMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: MINUTE + 30 * SECOND,
    })
  });
  const fiveMinutePoses = [
    'https://image.invaluable.com/housePhotos/BlackRiver/51/654551/H21714-L184269541.jpg',
    'https://i.pinimg.com/originals/ac/f8/35/acf835242e7c2e1985a079488ab65177.jpg'
  ];
  fiveMinutePoses.forEach(p => {
    poses.push({
      src: p,
      poseLength: 5 * MINUTE,
    })
  });
  return (
    <LineOfAction poses={poses} />
  );
}
