import { BackgroundImage, Grid, Group, Stack, Text, Title, } from "@mantine/core";
import { Titan_One } from "next/font/google";

export default function Testimonials() {
    return (
        <Grid gutter={0}>
            <Grid.Col span={{ base: 12, md: 7 }}>
                <BackgroundImage src={"/images/bedroom.jpg"} h={{base: "50vh", md: "90vh"}} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }} px={{ base: "30px", md: "40px" }} pb={{base: "5rem", md: 0}}>
                <Stack h={"100%"} justify="center" gap={0}>
                    <Title order={3} fz={"48px"} fw={700} tt={"uppercase"}>
                        Voices of Madera
                    </Title>
                    <Text >
                        The craftsmanship is impeccable , It&apos;s like bringing a piece of art into my living space. Guests always ask where I got my furniture. It feels luxurious, warm, and uniquely mine.
                    </Text>
                    <Text fw={400} mt={"md"}>
                            — Amaka I., Interior Designer
                        </Text>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}