import { Accordion, Grid, SimpleGrid } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { FaqItem } from "./FaqItem"

export default function FaqSection(props) {
  return (
    <Accordion allowToggle>
      <SimpleGrid columns={{ sm: 1, lg: 2 }}>
        {props.items.map(function (data) {
          return <FaqItem key={data.id} question={data.question} answer={data.answer} />
        })}
      </SimpleGrid>
    </Accordion>
  )
}
FaqSection.propTypes = {
  items: PropTypes.array,
}
