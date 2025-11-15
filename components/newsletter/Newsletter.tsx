import { Button, Container, Flex, SimpleGrid, Stack, Text, TextInput } from "@mantine/core";

export default function Newsletter() {
    return (
        <SimpleGrid
            cols={{base: 1, md: 2}}
            bg={"madera.4"}
            mih={"30vh"}
            py={{ base: "3rem", md: "5rem" }}
            px={{ base: "30px", md: "40px" }}
            >

            <Text fw={400} fz={{ base: "20px", md: "28px" }} maw={500}>
                Subscribe for weekly design inspiration and interior nuggets
            </Text>

            <Flex align={"center"} gap={"sm"}>
                <TextInput
                    miw={{ base: "auto", md: 400 }}
                    aria-label="email"
                    placeholder="email"
                    variant="filled" size="md"
                    styles={{
                        wrapper: {
                            border: "1px solid var(--mantine-color-madera-8)"
                        }
                    }} />
                <Button >Submit</Button>
            </Flex>
        </SimpleGrid>
    )
}