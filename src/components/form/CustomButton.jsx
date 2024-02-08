import { DeleteIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"
import PropTypes from "prop-types"

PrimaryButton.propTypes = {
  clickFunction: PropTypes.func,
  text: PropTypes.string,
}

export function PrimaryButton(props) {
  return (
    <Button colorScheme="blue" ml={6} onClick={props.clickFunction}>
      {props.text}
    </Button>
  )
}

SecondaryButton.propTypes = {
  clickFunction: PropTypes.func,
  text: PropTypes.string,
}

export function SecondaryButton(props) {
  return (
    <Button border="1px" borderColor="gray.200" ml={6} onClick={props.clickFunction}>
      {props.text}
    </Button>
  )
}

TertiaryButton.propTypes = {
  clickFunction: PropTypes.func,
  text: PropTypes.string,
}

export function TertiaryButton(props) {
  return (
    <Button border="1px" borderColor="gray.200" ml={6} onClick={props.clickFunction}>
      {props.text}
    </Button>
  )
}

DeleteButton.propTypes = {
  deleteFunction: PropTypes.func,
}

export function DeleteButton(props) {
  return (
    <Button
      colorScheme="red"
      border="1px"
      borderColor="gray.200"
      size="xs"
      onClick={props.deleteFunction}
    >
      <DeleteIcon boxSize={3} />
    </Button>
  )
}
