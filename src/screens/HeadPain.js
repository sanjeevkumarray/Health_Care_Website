import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import PieChart from "../components/charts/PieChart";
import "../css/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/core/Modal";
import Typewriter from "typewriter-effect";
import {
  TabPanel,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import { Tab, Box } from "@mui/material";
function HeadCare() {
  const [showModal, setShowModal] = useState();

  const [tabValue, setTabValue] = useState("1");
  const tabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Head Pain")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("Problems and Solutions")
                    .pauseFor(500)
                    .start()
                    .deleteAll()
                    .typeString("Head Pain");
                }}
              />
            </h1>
            {/* <div className="graph"> */}
            {/* <PieChart></PieChart> */}
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="primary">
                  Parietal
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <img  src="./Images/Frontal.jpeg" />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="primary">
                  Ethmoid
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                
                  <img  height="10000000000000000000%" src="./Images/pall.jpg" />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="primary">
                 Frontal
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {/* <TimelineConnector />  */}
                </TimelineSeparator>
                <TimelineContent>
                <img  src="./Images/Ethmoid.jpg" />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            {/* </div> */}
          </main>
          <div className="cards-container">
            <div className="card">
              <p className="fw-bold fs-lg">How it works?</p>
              <p className="fs-sm mb-md">Find out how this feature works</p>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Find out
              </button>
            </div>
            <div className="card">
              <p className="fw-bold fs-lg">Take new pics</p>
              <p className="fs-sm mb-md">
                Will help the app to determine whether you are sitting in
                correct posture or not
              </p>
              <Link to="/teachbackcare">
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  Take pics
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal>
          <div className="onboarding-name">
            <div
              className="flex flex-justify-between flex-items-center"
              style={{ position: "relative" }}
            >
              <i
                class="fa-solid fa-xmark"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                }}
                onClick={() => setShowModal(false)}
              ></i>
              <h2 className="fs-xl" style={{ flexGrow: "1" }}>
                Back Care
              </h2>
              
                style={{ width: "50%" }}
              >
              <img  src="./Images/Frontal.jpg" />
            </div>

            <div>
              <div className="flex flex-col flex-wrap fs-sm steps">
                <p className="mb-sm">
                  <i class="fa-solid fa-camera"></i>Take pictures of good and
                  bad posture{" "}
                </p>
                <p className="mb-sm">
                  <i class="fa-brands fa-leanpub"></i>App will learn the
                  difference between them
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-bell"></i>Notify you if you are in bad
                  posture
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-items-end">
              <button
                style={{ background: "var(--clr-primary-500) " }}
                onClick={() => setShowModal(false)}
              >
                Done
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default HeadCare;
