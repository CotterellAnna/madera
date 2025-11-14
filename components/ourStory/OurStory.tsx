import { Button, Flex, Grid, Image, Stack, Text, Title } from "@mantine/core";
import Header from "./Header";
import { fontClassNames } from "../../styles/font";

export default function OurStory() {
    return (
        <Stack my={{ base: "md", md: "5rem" }}>
            <Header />
            <Grid py={{ base: "md", md: "60px" }}>
                <Grid.Col span={{ base: 12, md: 4.5 }}>
                    <Title tt={"uppercase"}>Our Story</Title>
                    <Text fz={"20px"} fw={300} lh={2}>
                        MADERA, meaning 'wood' in Spanish, embodies a deep appreciation for natural materials, craftsmanship, and timeless design. It stands for warmth, durability, and the artistry of crafting pieces that endure for generations.
                    </Text>
                    <Button my={"md"}>
                        ABOUT US
                    </Button>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 7.5 }}>
                    <Flex align={"flex-end"}>
                        <Image src={"/images/our_story.jpg"} w={450} h={600} />
                        <Text className={fontClassNames.cormorantGaramond} ms={"lg"} fz={"48px"} fw={700}>
                            TIMELESS <br /> 
                            FURNITURE <br /> 
                            DESIGNED <br /> 
                            <Text td={"underline dotted"} fz={"48px"} fw={700} span>
                                JUST FOR YOU
                            </Text>
                        </Text>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}