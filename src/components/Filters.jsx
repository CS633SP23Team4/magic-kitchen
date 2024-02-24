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
  onChangeFunc: PropTypes.func,
}

export function Filter(props) {
  const [value, setValue] = useState("2880")

  const emitChange = (value) => {
    setValue(value)
    props.onChangeFunc(value)
  }
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
            <RadioGroup onChange={(e) => emitChange(e)} value={value}>
              <Stack>
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
