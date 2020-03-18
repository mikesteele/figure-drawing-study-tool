# figure-drawing-study-tool
A clone of line-of-action.com 

## Install

```
yarn 
yarn start
```

## API


```
<LineOfAction poses={[Poses]} />
```

```javascript
Pose = {
  src: String, // Image pose
  text: String, // Text pose / prompt
  poseLength: Number, // In milliseconds
  noCountdown: Boolean // Show a next button instead of a countdown clock
}
```
