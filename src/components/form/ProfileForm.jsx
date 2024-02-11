import {useState} from "react"
import {
    FormControl,
    FormLabel,
    Input,
    Avatar,
    InputGroup,
    Textarea,
    Flex,
    AvatarBadge
} from "@chakra-ui/react"
import {NotAllowedIcon} from "@chakra-ui/icons";
import Select, {components, OptionProps} from "react-select"
import {DietOption, DietOptions} from "../../data/diet.ts"
import {EditButton} from "./CustomButton";

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

export default function ProfileForm() {
    const [nameFirst, setNameFirst] = useState("")
    const [nameLast, setNameLast] = useState("")
    const [bio, setBio] = useState("")
    return (
        <>
            <FormControl>
                <FormLabel fontSize={24}>Avatar</FormLabel>
                <Flex justify="center">
                    <Avatar size="2xl" name="Christian Nwamba" src="https://bit.ly/code-beast">{" "}
                        <AvatarBadge border="0" boxSize="1em"><EditButton/></AvatarBadge>
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
                        value={nameFirst}
                        onChange={(e) => setNameFirst(e.target.value)}
                    />
                    <Input
                        ml={2}
                        bg="gray.50"
                        type="text"
                        placeholder="Last Name"
                        value={nameLast}
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
                />
            </FormControl>
        </>
    )
}
