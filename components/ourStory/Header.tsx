import { Container, Text } from "@mantine/core";

export default function Header() {

    return (
        <Container fluid bg={"madera.4"} p={"40px"}>
            <Text ta={"center"} mx={"auto"} fw={500} fz={{ base: "md", md: "40px" }} maw={{base: "90%", md: "80%"}}>
                <Text fw={500} fz={{ base: "md", md: "40px" }} span td={"underline dotted"}>At MADERA</Text>, we believe in preserving the art of traditional woodcraft, <Text fz={{ base: "md", md: "40px" }} c={"madera.5"} span fw={500}>blending precision with soul to create furniture that lasts generations.</Text>
            </Text>
        </Container>
    )
}