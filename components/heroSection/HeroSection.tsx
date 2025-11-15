import { Button, Container, Grid, Group, Image, Text, Title } from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";

const textStyle = {
    "--cut": "70%",
    backgroundImage: "linear-gradient(to bottom, white 0%, white var(--cut), #412119 var(--cut))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    letterSpacing: -5,
    textBoxTrim: "trim-both",
    textBoxEdge: "cap alphabetic",
}

export default function HeroSection() {
    const isMobile = useMediaQuery('(max-width: 36em)');
    const { ref: textRef, height: textHeight } = useElementSize();
    const bgHeight = `calc(${isMobile ? "65vh" : "76vh"} - (0.3 * ${textHeight}px) )`;

    return (
        <Container fluid w={"100vw"} h={isMobile ? "90vh" : "93vh"} my={"-md"} px={{base: "30px", md: "40px"}}>
            <Container fluid
                pos={"absolute"}
                h={bgHeight}
                w={"100vw"}
                top={0}
                left={0}
                style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(23, 22, 22, 0.76), rgba(2, 2, 2, 0.06)), url('./images/hero_section_bg.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 80%",
                    zIndex: 0,
                }} />
            <Grid w={"100%"} px={"40px"} py={"0px"} mb={"0rem"} pos={"absolute"} left={0} top={0}>
                <Grid.Col span={8}>
                    <Group align="flex-end" h={isMobile ? "65vh" : "76vh"}>
                        <Title ref={textRef} order={2} tt={"uppercase"} fz={{base: "5.5rem", md: "12rem"}} fw={"lighter"} style={textStyle}>
                            Madera
                        </Title>
                    </Group>
                </Grid.Col>
                <Grid.Col span={4} visibleFrom="md">
                    <Group gap={"md"} align="flex-end" justify="flex-end" h={"100%"}>
                        <Image src={"./images/chair.png"} alt="chair" h={"80px"} w={"80px"} />
                        <Image src={"./images/table.jpg"} alt="table" h={"80px"} w={"80px"} />
                        <Image src={"./images/room.jpg"} alt="room" h={"80px"} w={"80px"} />
                    </Group>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 8}} mt={"3rem"}>
                    <Text fw={500} fz={{base: "20px", md:  "35px"}} style={{ letterSpacing: -2, lineHeight: 1.2 }}>
                        Experience hand-finished woodwork, designed to enrich your space with warmth and character
                    </Text>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Group justify={isMobile? "flex-start" : "flex-end"} align="end" h={"100%"}>
                        <Button w={"fit-content"} tt={"uppercase"}>Explore our collection</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Container>
    )
}
