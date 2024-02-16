import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Button, IconButton } from "@chakra-ui/react"
import PropTypes from "prop-types"

PrimaryButton.propTypes = {
  clickFunction: PropTypes.func,
  text: PropTypes.string,
}

export function PrimaryButton(props) {
  return (
    <Button
      isRound={true}
      bg="brand.900"
      color="gray.50"
      width="12em"
      mt={4}
      onClick={props.clickFunction}
    >
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
    <Button isRound={true} border="1px" borderColor="gray.200" ml={6} onClick={props.clickFunction}>
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
    <IconButton
      variant="solid"
      colorScheme="red"
      aria-label="Delete"
      fontSize="20px"
      icon={<DeleteIcon />}
      onClick={props.deleteFunction}
    />
  )
}

EditButton.propTypes = {
  editFunction: PropTypes.func,
}

export function EditButton(props) {
  return (
    <IconButton
      isRound={true}
      variant="solid"
      aria-label="Edit"
      fontSize="20px"
      icon={<EditIcon />}
      onClick={props.editFunction}
    />
  )
}