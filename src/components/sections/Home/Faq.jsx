import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What is SkillForge?",
    answer:
      "SkillForge is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On SkillForge, you’ll find inspiration from hands-on classes and teachers at the top of their creative fields, so you can take the next step in your creative journey.",
  },
  {
    question: "What is included in my SkillForge membership?",
    answer:
      "Your SkillForge membership includes access to thousands of classes, offline viewing, and access to a vibrant community of learners.",
  },
  {
    question: "What can I learn from SkillForge?",
    answer:
      "You can learn a wide range of skills including illustration, design, photography, video, freelancing, and much more.",
  },
  {
    question: "What happens after my trial is over?",
    answer:
      "After your trial, you’ll be billed for a full membership unless you cancel your subscription before the trial ends.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your SkillForge subscription anytime through your account settings.",
  },
];

function FAQ() {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#FAFAFA", 
        p: 2,
        backgroundSize: "cover",
        py: 20, 
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 6 } }}>
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              bgcolor: "#000", 
              color: "#FAFAFA",
              borderBottom: "1px solid gray", 
              backgroundColor: "#121212", 
              mb: 1, 
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#FAFAFA" }} />}
            >
              <Typography variant="h6" fontWeight="bold">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}

export default FAQ;
