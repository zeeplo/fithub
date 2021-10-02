import React, { useState } from "react";

import Topbar from "../topbar/Topbar";
import Leftbar from "./LeftPanel/Leftbar";
import Center from "./Center/Center";
import CenterWorkouts from "./Center/CenterWorkouts";
import CenterFriends from "./Center/CenterFriends";
import CenterGroups from "./Center/CenterGroups";
import Rightbar from "./RightPanel/Rightbar";
import RightbarWorkouts from "./RightPanel/RightbarWorkouts";
import RightbarFriends from "./RightPanel/RightbarFriends";
import RightbarGroups from "./RightPanel/RightbarGroups";
import "./index.scss";
import WorkoutList from "./WorkoutList/WorkoutList";

export default function Home(props) {
  const { setMain } = props;
  const [panels, setPanels] = useState("home");
  const [workout, setWorkout] = useState([]);
  const [selected, setSelected] = useState({});
  const [stateId, setId] = useState("");

  const onEdit = (id) => {
    setWorkout([]);
  };

  const onAdd = (exercise) => {
    setWorkout([...workout, { ...exercise, set: "1", reps: "10" }]);
  };

  return (
    <>
      <Topbar setMain={setMain} />
      <div className="homeContainer">
        <Leftbar setPanels={setPanels} />
        {panels === "home" && (
          <Center onAdd={onAdd} panels={panels} setPanels={setPanels} />
        )}
        {panels === "home" && (
          <Rightbar
            workout={workout}
            setWorkout={setWorkout}
            panels={panels}
            setPanels={setPanels}
            stateId={stateId}
          />
        )}

        {panels === "workouts" && (
          <CenterWorkouts panels={panels} setPanels={setPanels} />
        )}
        {panels === "workouts" && (
          <RightbarWorkouts
            panels={panels}
            setPanels={setPanels}
            setId={setId}
          />
        )}
        {panels === "friends" && <CenterFriends />}
        {panels === "friends" && <RightbarFriends />}
        {panels === "groups" && <CenterGroups setSelected={setSelected} />}
        {panels === "groups" && <RightbarGroups group={selected} />}
        {panels === "edit" && <Center onAdd={onAdd} />}
        {panels === "edit" && (
          <Rightbar
            workout={workout}
            setWorkout={setWorkout}
            stateId={stateId}
            setId={setId}
          />
        )}
        {panels === "edit" && <WorkoutList stateId={stateId} />}
      </div>
    </>
  );
}
