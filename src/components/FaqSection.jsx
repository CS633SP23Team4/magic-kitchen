import { Accordion, Grid } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { FaqItem } from "./FaqItem"

export default function FaqSection(props) {
  return (
    <Accordion allowToggle>
      <Grid templateColumns="repeat(2, 1fr)">
        {props.items.map(function (data) {
          return <FaqItem key={data.id} question={data.question} answer={data.answer} />
        })}
      </Grid>
    </Accordion>
  )
}
FaqSection.propTypes = {
  items: PropTypes.array,
}
