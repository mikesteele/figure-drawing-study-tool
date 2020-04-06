# figure-drawing-study-tool
A clone of line-of-action.com 

## Running

Running the app locally requires having Node and Yarn installed. See https://nodejs.org/ and https://yarnpkg.com/ for installation steps.

To install dependencies and start the server, run:

```
yarn 
yarn start
```

It will be available at `localhost:3000`

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
