import PropTypes from "prop-types"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react"
import { useState } from "react"

Filter.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
}

export function Filter(props) {
  const [value, setValue] = useState("0")
  return (
    <Box shadow="md" bg="white" mb={4}>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {props.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CheckboxGroup onChange={setValue} value={value}>
              <Stack>
                {props.options.map(function (data) {
                  return (
                    <Checkbox key={data.value} value={data.value}>
                      {data.label}
                    </Checkbox>
                  )
                })}
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
