import { Anchor, Flex, Image, List, SimpleGrid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Footer() {
    const isMobile = useMediaQuery('(max-width: 36em)');

    return (
        <Stack mih={"70vh"} mb={"-md"}
            p={{ base: "30px", md: "100px" }}
            justify="space-between"
            style={{
                backgroundColor: "var(--mantine-color-madera-9)",
                backgroundImage: "url('./images/madera_footer.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: isMobile ? "contain" : "cover",
                backgroundPosition: isMobile ? "0% 100%" : "50% 60%"
            }}>
            <SimpleGrid cols={{ base: 1, md: 3 }} c={"madera.1"} spacing={{base: "30px", md: "auto"}}>
                <Stack>
                    <Text tt={"uppercase"} c={"madera.1"} fw={500}>
                        Collections
                    </Text>
                    <Text tt={"uppercase"} c={"madera.1"} fw={500}>
                        Custom
                    </Text>
                    <Text tt={"uppercase"} c={"madera.1"} fw={500}>
                        About us
                    </Text>
                    <Text tt={"uppercase"} c={"madera.1"} fw={500}>
                        Journals
                    </Text>
                </Stack>

                <Stack gap={"30px"}>
                    <Stack>
                        <Text tt={"uppercase"} c={"madera.1"} fw={500}>
                            Phone
                        </Text>
                        <Text tt={"uppercase"} c={"madera.1"} fw={400} fz={"18px"}>
                            +234 567 234 2189
                        </Text>
                    </Stack>
                    <Stack>
                        <Text tt={"uppercase"} c={"madera.1"} fw={500}>
                            Email
                        </Text>
                        <Text tt={"uppercase"} c={"madera.1"} fw={400} fz={"18px"}>
                            MADERA@REACHUS.COM
                        </Text>
                    </Stack>
                </Stack>

                <Stack gap={"30px"}>
                    <Stack>
                        <Text tt={"uppercase"} c={"madera.1"} fw={500}>
                            Office
                        </Text>
                        <Text tt={"uppercase"} c={"madera.1"} fw={400} fz={"18px"}>
                            65 JAIYE X2 ROAD OFF BOULEVARD CRESCENT FCT, ABUJA
                        </Text>
                    </Stack>
                    <Flex gap={"md"}>
                        <Anchor href="#" p={"xs"} bd={"1px solid var(--mantine-color-madera-1)"}>
                            <Image src={"./images/icons/facebook.svg"} alt="facebook" />
                        </Anchor>
                        <Anchor href="#" p={"xs"} bd={"1px solid var(--mantine-color-madera-1)"}>
                            <Image src={"./images/icons/instagram.svg"} alt="facebook" />
                        </Anchor>
                        <Anchor href="#" p={"xs"} bd={"1px solid var(--mantine-color-madera-1)"}>
                            <Image src={"./images/icons/x.svg"} alt="facebook" />
                        </Anchor>
                        <Anchor href="#" p={"xs"} bd={"1px solid var(--mantine-color-madera-1)"}>
                            <Image src={"./images/icons/pintrest.svg"} alt="facebook" />
                        </Anchor>
                    </Flex>
                </Stack>
            </SimpleGrid>
            <SimpleGrid cols={{ base: 1, md: 3 }}>
                <Text fz={"14px"} c={"madera.1"}>
                    ©25 MADERA – All rights reserved
                </Text>
                <Text fz={"14px"} c={"madera.1"}>
                    Privacy Policy
                </Text>
                <Text fz={"14px"} c={"madera.1"}>
                    Site By: Cre8tiveally
                </Text>
            </SimpleGrid>
        </Stack>
    )
}