import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import BackCare from "./screens/BackCare";
import EyeCare from "./screens/EyeCare";
import EarCare from "./screens/EarCare";
import Teethcare from "./screens/TeerthCare";
import HeadCare from "./screens/HeadPain"
import BoneCare from "./screens/BoneHead"
import Exercise from "./screens/Exercise";
import TrainBackCare from "./screens/TrainBackCare";
import Aboutus from "./screens/Aboutus";
import HowtoUse from "./screens/HowtoUse";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/backcare" element={<BackCare />} />
        <Route path="/eyecare" element={<EyeCare />} />
        <Route path="/teethcare" element={<Teethcare />} />
        <Route path="/headcare" element={<HeadCare />} />
        <Route path="/bonecare" element={<BoneCare />} />
        <Route path="/earcare" element={<EarCare />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/teachbackcare" element={<TrainBackCare />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/howtouse" element={<HowtoUse />} />
      </Routes>
      <SpeedDial
        ariaLabel="Navigation speed dial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen />
        {/* <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="Print"
          tooltipOpen
        /> */}
        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle="Share"
          tooltipOpen
        />
      </SpeedDial>
    </BrowserRouter>
  );
}

export default App;
