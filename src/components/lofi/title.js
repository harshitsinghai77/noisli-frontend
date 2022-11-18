import { useState } from "react";
import { Select } from "grommet";

// import { store } from "../../store/store";
import { SET_LOFI_MOOD } from "../../store/types";
import LofiSlider from "./slider";
import LofiPlayer from "./yt-player";
import { moodsCategory } from "./utility";

import "../../css/lofi/lofi.css";

const LofiTitle = () => {
  // const globalState = useContext(store);
  // const { dispatch } = globalState;

  // const activeMoodTitle = globalState.state.lofiMood;

  const [activeMoodTitle, setActiveMoodTitle] = useState("Study & Chill");
  const [activeMoodOption, setActiveMoodOption] = useState(moodsCategory);

  const onMoodOptionChange = (newMood) => {
    setActiveMoodOption(newMood);
  };

  const onActiveMoodChange = ({ option }) => {
    onMoodTitleChange(option);
  };

  const onMoodTitleChange = (newActiveMood) => {
    // dispatch({
    //   type: SET_LOFI_MOOD,
    //   value: newActiveMood,
    // });
    setActiveMoodTitle(newActiveMood);
  };

  return (
    <>
      <div className="title">
        <div className="title__mood flex flex-row	items-baseline justify-center">
          <p className="toggle_title">Choose your mood</p>
          <Select
            a11yTitle="Choose your mood"
            dropHeight="medium"
            plain
            options={activeMoodOption}
            value={activeMoodTitle}
            onChange={onActiveMoodChange}
          />
        </div>
        <h1>{activeMoodTitle}</h1>
      </div>
      <LofiSlider activeMoodTitle={activeMoodTitle} />
      <LofiPlayer
        category={activeMoodTitle}
        onMoodOptionChange={onMoodOptionChange}
        onMoodTitleChange={onMoodTitleChange}
      />
    </>
  );
};

export default LofiTitle;
