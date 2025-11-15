import { Button, Flex, Grid, Image, Stack, Text, Title } from "@mantine/core";
import Header from "./Header";
import { fontClassNames } from "../../styles/font";

export default function OurStory() {
    return (
        <Stack my={{ base: "3rem", md: "5rem" }}>
            <Header />
            <Grid py={{ base: "40px", md: "60px" }} px={{base: "30px", md: "40px"}} gutter={0}>
                <Grid.Col span={{ base: 12, md: 4.5 }}>
                    <Title tt={"uppercase"}>Our Story</Title>
                    <Text>
                        MADERA, meaning &apos;wood&apos; in Spanish, embodies a deep appreciation for natural materials, craftsmanship, and timeless design. It stands for warmth, durability, and the artistry of crafting pieces that endure for generations.
                    </Text>
                    <Button my={"md"}>
                        ABOUT US
                    </Button>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 7.5 }}>
                    <Flex align={"flex-end"} direction={{base: "column", md: "row"}}>
                        <Image src={"./images/our_story.jpg"} alt="our story" w={450} h={{base: 500, md: 600}} />
                        <Text className={fontClassNames.cormorantGaramond} ms={"lg"} mt={{base: "md", md: 0}} fz={{base: "28px", md: "48px"}} fw={700}>
                            TIMELESS <br /> 
                            FURNITURE <br /> 
                            DESIGNED <br /> 
                            <Text td={"underline dotted"} fz={{base: "28px", md: "48px"}} fw={700} span>
                                JUST FOR YOU
                            </Text>
                        </Text>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}