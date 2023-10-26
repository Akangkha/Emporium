import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import StarIcon from "@mui/icons-material/Star";

const ResultsFilter = ({ onFilterChange }) => {
  const [checkboxStates, setCheckboxStates] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });
  const handleCheckboxChange = (value) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [value]: !prevStates[value], // Toggle the checkbox state
    }));

    onFilterChange({ ...checkboxStates, [value]: !checkboxStates[value] });
  };

  return (
    <div className="ResultsFilter">
      <h2>Search Results</h2>
      <Accordion style={{ outline: "trasparent", border: "tranparent" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="font">BRAND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxStates["option1"]}
                  onChange={() => handleCheckboxChange("option1")}
                />
              }
              label="Bolongaro Trevor"
              id="font"
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  checked={checkboxStates["option2"]}
                  onChange={() => handleCheckboxChange("option2")}
                />
              }
              label="Calvin Klein"
              id="font"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography id="font">PRICE RANGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <div>
              {" "}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxStates["option3"]}
                    onChange={() => handleCheckboxChange("option3")}
                  />
                }
              />
              Under 100
            </div>
            <div>
              {" "}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxStates["option4"]}
                    onChange={() => handleCheckboxChange("option4")}
                  />
                }
              />
              100 - 500
            </div>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography id="font">RATINGS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} />{" "}
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
            </div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} />{" "}
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
            </div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} />{" "}
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
            </div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} />{" "}
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
            </div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} />{" "}
              <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8", fontSize: "1.2rem" }} />
            </div>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ResultsFilter;
