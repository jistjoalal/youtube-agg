import { withTracker } from 'meteor/react-meteor-data';

// "spoofed" tracker to use w/ App component
export default HomeTracker = withTracker(() => {
  return {
    query: {},
    title: "IDW",
  };
});
