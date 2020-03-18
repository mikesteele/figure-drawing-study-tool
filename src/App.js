import React from "react";
import "./styles.css";
import LineOfAction from "./LineOfAction";

export default function App() {
  return (
    <LineOfAction
      poses={[
        {
          text: "Drawing from Reference",
          noCountdown: true,
          poseLength: 1000 * 30
        },
        {
          src: "https://picsum.photos/1000/2000",
          poseLength: 1000 * 10
        },
        {
          src: "https://picsum.photos/200/300",
          poseLength: 1000 * 10
        },
        {
          src: "https://picsum.photos/400/200",
          poseLength: 1000 * 10
        }
      ]}
    />
  );
}
