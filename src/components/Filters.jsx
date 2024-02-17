import PropTypes from "prop-types"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Radio,
  RadioGroup,
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
    <Box shadow="md">
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
            <RadioGroup onChange={setValue} value={value}>
              <Stack>
                <Radio key="0" value="0">
                  All
                </Radio>
                {props.options.map(function (data) {
                  return (
                    <Radio key={data.value} value={data.value}>
                      {data.label}
                    </Radio>
                  )
                })}
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
