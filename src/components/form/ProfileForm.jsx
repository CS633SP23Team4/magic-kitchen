import {useEffect, useState} from "react"
import PropTypes from "prop-types";
import {
    FormControl,
    FormLabel,
    Input,
    Avatar,
    InputGroup,
    Textarea,
    Flex,
    AvatarBadge,
    Text
} from "@chakra-ui/react"
import {NotAllowedIcon} from "@chakra-ui/icons";
import Select, {components, OptionProps} from "react-select"
import {DietOption, DietOptions} from "../../data/diet.ts"
import {pushUserData} from "../../firebaseInit";
import {EditButton, PrimaryButton, TertiaryButton} from "./CustomButton";


const Option = (props: OptionProps<DietOption>) => {
    return (
        <div
            style={{
                padding: "2px",
                display: "flex",
                alignItems: "center",
                border: "1px solid",
                justifyContent: "space-between"
            }}
        >
            <NotAllowedIcon color='red.500'/>
            <components.Option {...props}/>
        </div>
    );
};

const updateUserData = async (user, data) => {
    const response = await pushUserData(user, data)
    return response
}

ProfileForm.propTypes = {
    user: PropTypes.string,
    userData: PropTypes.any
}

export default function ProfileForm(props) {
    const [nameFirst, setNameFirst] = useState("")
    const [nameLast, setNameLast] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [editable, setEditable] = useState(false)
    const [message, setMessage] = useState("")
    const [messageColor, setMessageColor] = useState("green")


    const editProfile = () => {
        setEditable(true)
    }
    useEffect(() => {
        setEmail(props.userData.email)
        setNameFirst(props.userData.nameFirst)
        setNameLast(props.userData.nameLast)
        setBio(props.userData.bio)
    }, [props.user, props.userData])

    const handleSubmit = async () => {
        const userData = {
            nameFirst: nameFirst,
            nameLast: nameLast,
            bio: bio,
        }
        try {
            await updateUserData(props.user, userData)
            setMessage("Success! Your profile has been updated.")
            setMessageColor("green")
            setEditable(false)
        } catch (e) {
            console.error(e)
            setMessage(e)
            setMessageColor("red")
        }

    }

    return (
        <>
            <FormControl>
                <FormLabel fontSize={24}>Avatar</FormLabel>
                <Flex justify="center">
                    <Avatar size="2xl" name={nameFirst} src="https://bit.ly/tioluwani-kolawole">{" "}
                        
                    </Avatar>
                </Flex>
            </FormControl>
            <FormControl pt={4}>
                <FormLabel fontSize={24}>Name</FormLabel>
                <InputGroup pt={2}>
                    <Input
                        bg="gray.50"
                        type="text"
                        placeholder="First Name"
                        disabled={!editable}
                        value={nameFirst}
                        onChange={(e) => setNameFirst(e.target.value)}
                    />
                    <Input
                        ml={2}
                        bg="gray.50"
                        type="text"
                        placeholder="Last Name"
                        value={nameLast}
                        disabled={!editable}
                        onChange={(e) => setNameLast(e.target.value)}
                    />
                </InputGroup>
            </FormControl>
            <FormControl pt={4}>
                <FormLabel fontSize={24}>Dietary Restrictions</FormLabel>
                <Select
                    closeMenuOnSelect={false}
                    components={{Option}}
                    styles={{
                        option: (base) => ({
                            ...base
                        })
                    }}
                    isMulti
                    isDisabled={!editable}
                    options={DietOptions}
                />
            </FormControl>
            <FormControl pt={4}>
                <FormLabel fontSize={24}>Bio</FormLabel>
                <Textarea
                    bg="gray.50"
                    placeholder="(optional) Enter a few lines about yourself"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    disabled={!editable}
                />
            </FormControl>
            {!editable &&
                <TertiaryButton clickFunction={editProfile} text="Edit Profile"/>
            }

            {editable &&
                <PrimaryButton
                    bg="brand.900"
                    color="gray.50"
                    width="full"
                    mt={4}
                    type="submit"
                    text="Submit"
                    clickFunction={
                        handleSubmit
                    }
                />
            }
            <Text color={messageColor}>{message}</Text>

        </>
    )
}
