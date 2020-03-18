import React from "react";

const MS_IN_ONE_SECOND = 1000;
const MS_IN_ONE_MINUTE = 60 * MS_IN_ONE_SECOND;
const MS_IN_ONE_HOUR = 60 * MS_IN_ONE_MINUTE;

// Ex. formatNum(9, 2) => '09'
const formatNum = (num, spaces) => {
  if (spaces === 2) {
    if (num >= 10) {
      return `${num}`;
    } else {
      return `0${num}`;
    }
  } else if (spaces === 3) {
    if (num > 100) {
      return `${num}`;
    } else if (num > 10) {
      return `0${num}`;
    } else {
      return `00${num}`;
    }
  } else {
    throw new Error("formatNum only can handle spaces of 2 or 3");
  }
};

const secondsToDisplayTime = s => {
  s = s * 1000; // Convert s to milliseconds
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (s >= MS_IN_ONE_HOUR) {
    hours = Math.floor(s / MS_IN_ONE_HOUR);
    s = s - hours * MS_IN_ONE_HOUR;
  }
  if (s >= MS_IN_ONE_MINUTE) {
    minutes = Math.floor(s / MS_IN_ONE_MINUTE);
    s = s - minutes * MS_IN_ONE_MINUTE;
  }
  if (s >= MS_IN_ONE_SECOND) {
    seconds = Math.floor(s / MS_IN_ONE_SECOND);
    s = s - seconds * MS_IN_ONE_SECOND;
  }
  return `${formatNum(hours, 2)}:${formatNum(minutes, 2)}:${formatNum(
    seconds,
    2
  )}`;
};

const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const useTimeout = (callback, timeout) => {
  React.useEffect(() => {
    const timer = setTimeout(callback, timeout);
    return () => clearTimeout(timer);
  }, [callback, timeout]);
};

const msToSeconds = ms => {
  const seconds = Math.floor(ms / 1000);
  return seconds < 0 ? 0 : seconds;
};

const useCountdown = () => {
  const [startingTime, setStartingTime] = React.useState(Date.now());
  const [currentTime, setCurrentTime] = React.useState(Date.now());
  React.useEffect(() => {
    setStartingTime(Date.now());
  }, []);
  useInterval(() => {
    setCurrentTime(Date.now());
  }, 1000);
  return msToSeconds(currentTime - startingTime);
};

const Pose = props => {
  const { noCountdown, onPoseEnd, poseLength, src, text } = props;
  const countdown = useCountdown();
  const timeoutCallback = React.useCallback(() => {
    if (!noCountdown) {
      onPoseEnd();
    }
  }, [onPoseEnd, noCountdown]);
  useTimeout(timeoutCallback, poseLength);
  const imageOrText = src ? (
    <img className="Pose-Image" src={src} alt="a pose" />
  ) : (
    <h1 className="Pose-Text">{text}</h1>
  );
  return (
    <div className="Pose-Wrapper">
      {imageOrText}
      {noCountdown && (
        <button className="Pose-Button" onClick={onPoseEnd}>
          Next
        </button>
      )}
      {!noCountdown && (
        <div className="Pose-Countdown">
          {secondsToDisplayTime(msToSeconds(poseLength) - countdown)}
        </div>
      )}
    </div>
  );
};

const LineOfAction = props => {
  const [currentPose, setCurrentPose] = React.useState(0);
  const goToNextPose = () => {
    setCurrentPose(currentPose => currentPose + 1);
  };
  if (!props.poses[currentPose]) {
    return null;
  }
  const pose = props.poses[currentPose];
  return (
    <Pose
      key={currentPose}
      onPoseEnd={goToNextPose}
      poseLength={pose.poseLength}
      src={pose.src}
      portrait={pose.portrait}
      text={pose.text}
      noCountdown={pose.noCountdown}
    />
  );
};

export default LineOfAction;
