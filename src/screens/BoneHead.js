import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import PieChart from "../components/charts/PieChart";
import "../css/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/core/Modal";
import Typewriter from "typewriter-effect";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function BoneCare() {
  const [showModal, setShowModal] = useState();

  const [expanded, setExpanded] = useState(false);

  const accordionChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
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
                    .typeString("Bone Pain")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("Problems and Solutions")
                    .pauseFor(500)
                    .start()
                    .deleteAll()
                    .typeString("Bone Pain");
                }}
              />
            </h1>
            {/* <div className="graph"> */}
            {/* <PieChart></PieChart> */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={(event, isExpanded) =>
                accordionChange(isExpanded, "panel1")
              }
              style={{ marginTop: "1rem" }}
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Long Bone</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Long-term use of corticosteroid medications, such as prednisone, cortisone, prednisolone and dexamethasone, is damaging to bone. Other drugs that might increase the risk of osteoporosis include aromatase inhibitors to treat breast cancer, selective serotonin reuptake inhibitors, methotrexate, some anti-seizure medications, such as phenytoin (Dilantin) and phenobarbital, and proton pump inhibitors.
                </Typography>
               
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={(event, isExpanded) =>
                accordionChange(isExpanded, "panel2")
              }
              style={{ marginTop: "1rem" }}
            >
              <AccordionSummary
                id="panel2-header"
                aria-controls="panel2-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Short Bone</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                The bones of the body come in a variety of sizes and shapes. The four principal types of bones are long, short, flat and irregular. Bones that are longer than they are wide are called long bones. They consist of a long shaft with two bulky ends or extremities. They are primarily compact bone but may have a large amount of spongy bone at the ends or extremities. Long bones include bones of the thigh, leg, arm, and forearm.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{ marginTop: "1rem" }}
              expanded={expanded === "panel3"}
              onChange={(event, isExpanded) =>
                accordionChange(isExpanded, "panel3")
              }
            >
              <AccordionSummary
                id="panel3-header"
                aria-controls="panel3-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Flat Bone</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Flat bones are made up of a layer of spongy bone between two thin layers of compact bone. They have a flat shape, not rounded. Examples include the skull and rib bones. Flat bones have marrow, but they do not have a bone marrow cavity.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={(event, isExpanded) =>
                accordionChange(isExpanded, "panel4")
              }
              style={{ marginTop: "1rem" }}
            >
              <AccordionSummary
                id="panel4-header"
                aria-controls="panel4-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Irregullar Bone</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                The irregular bones are: the vertebrae, sacrum, coccyx, temporal, sphenoid, ethmoid, zygomatic, maxilla, mandible, palatine, inferior nasal concha, and hyoid.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={(event, isExpanded) =>
                accordionChange(isExpanded, "panel5")
              }
              style={{ marginTop: "1rem" }}
            >
              <AccordionSummary
                id="panel5-header"
                aria-controls="panel5-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Sesamoid</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                A sesamoid bone is a small round bone that is imbedded within a tendon, whose purpose is to reinforce and decrease stress on that tendon. You will mostly find sesamoid bones in the knee, thumb, and big toe1. Others in the hand and feet are much smaller.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={(event, isExpanded) =>
                accordionChange(isExpanded, "panel6")
              }
              style={{ marginTop: "1rem" }}
            >
              <AccordionSummary
                id="panel6-header"
                aria-controls="panel6-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Irregullar Bone</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                The irregular bones are: the vertebrae, sacrum, coccyx, temporal, sphenoid, ethmoid, zygomatic, maxilla, mandible, palatine, inferior nasal concha, and hyoid.
                </Typography>
              </AccordionDetails>
            </Accordion>
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
              <img
                src="./assets/cartoon/smileydev.svg"
                style={{ width: "50%" }}
              ></img>
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

export default BoneCare;
