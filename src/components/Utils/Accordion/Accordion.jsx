import React from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

const StyledAccordion = styled(MuiAccordion)({
  marginBottom: "10px",
});

const Accordion = ({ id, expanded, setExpanded, title, children }) => {
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledAccordion expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <h3>{title}</h3>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default Accordion;
