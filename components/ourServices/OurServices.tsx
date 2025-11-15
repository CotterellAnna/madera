import { Grid, Image, List, Stack, Text, Title } from "@mantine/core";

export default function OurServices() {
    return (
        <Stack mx={{ base: "30px", md: "0px" }} py={{ base: "0", md: "5rem" }} bg={"white"}>
            <Grid gutter={0}>
                <Grid.Col span={{ base: 12, md: 7 }} >
                    <Image src={"/images/our_services.jpg"} alt="our services" h={"100%"} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 5 }} ps={{base:0, md: "md"}} pe={{base: "30px", md : "60px"}}>
                    <Image src={"/images/our_services2.png"} alt="our services"/>
                    <Stack maw={{base: "100%", md: "80%"}}>
                        <Title mt={"md"} tt={"uppercase"} order={3}>What makes us speacial</Title>
                        <Text fw={"300"}>Handcrafted wood furniture that blends artistry, precision, and sustainability, where modern design meets natural elegance.</Text>
                        <List mt={"md"} fz={{base: "20px", md: "28px"}} icon={<></>} styles={{
                            itemWrapper: {
                                borderTop: "1px solid var(--mantine-color-madera-0)",
                                padding: "1rem",
                                width: "100%",
                                fontWeight: 500
                            },
                            root:{
                                padding:0,
                            }
                        }}>
                            <List.Item>Minimalistic Collections</List.Item>
                            <List.Item>Custom Wood Furniture</List.Item>
                            <List.Item>Sculptural Designs</List.Item>
                            <List.Item>Luxury Wood Finishes</List.Item>
                        </List>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}
