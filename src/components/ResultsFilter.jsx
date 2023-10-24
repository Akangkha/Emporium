import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import StarIcon from "@mui/icons-material/Star";


const ResultsFilter = () => {
  return (
    <div className="ResultsFilter">
       <h2>Search Results</h2>
      <Accordion style={{ outline:"trasparent",border:"tranparent"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="font">BRAND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Mango" id="font"
            />
            <FormControlLabel required control={<Checkbox />} label="H&M" id="font"/>
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
          <div >  <FormControlLabel
              control={<Checkbox defaultChecked />}
            />Under 500</div>
           <div> <FormControlLabel control={<Checkbox />} />1000 - 3000</div>
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
              <StarIcon style={{ color: "#FDD33D" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#FDD33D" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
            </div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} />{" "}
              <StarIcon style={{ color: "#FDD33D" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#FDD33D" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#FDD33D" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#FDD33D" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#CDCCC8",fontSize:"1.2rem" }} />
            </div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} />{" "}
              <StarIcon style={{ color: "#FDD33D" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
              <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8",fontSize:"1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8" ,fontSize:"1.2rem"}} />
            </div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} />{" "}
              <StarIcon style={{ color: "#FDD33D" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#FDD33D" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#CDCCC8" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#CDCCC8" ,fontSize:"1.2rem"}} />
              <StarIcon style={{ color: "#CDCCC8" ,fontSize:"1.2rem"}} />
            </div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} />{" "}
              <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8",fontSize:"1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8",fontSize:"1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8",fontSize:"1.2rem" }} />
              <StarIcon style={{ color: "#CDCCC8" ,fontSize:"1.2rem"}} />
            </div>
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ResultsFilter;
