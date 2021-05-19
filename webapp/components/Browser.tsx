import { React } from "/deps.ts";
import { shallowCompare } from "/deps.ts";

import useRobotList from "/services/stores/robotList.ts";

function Browser() {
  // const { robotsList, list, search } = useRobotList(
  //   (store) => ({
  //     robotsList: store.robots,
  //     list: store.list,
  //     search: store.search,
  //   }),
  //   shallowCompare
  // );
  const robotsList = useRobotList((store) => store.robots);

  // console.log(robotsList);
  console.log("Hello");

  return (
    <div className="h-screen w-full">
      <input className="" placeholder="Search Robots..." />

      <p className="text-sm">
        Robots are basically small pieces of code (usually in
        TypeScript/JavaScript) that work on the data given to them and produce
        result(s). <br />
        Robots can either start a new data pipeline, for example by fetching new
        Tweets. Or they can process on an existing data pipeline, for example
        filter Tweets that have at least 5 likes.
      </p>
    </div>
  );
}

export default Browser;
