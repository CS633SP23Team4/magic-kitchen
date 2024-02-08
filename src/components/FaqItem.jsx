import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"
import PropTypes from "prop-types"

export const FaqItem = (props) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" pr={2}>
              {props.question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{props.answer}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

FaqItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}
