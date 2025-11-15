import { AppShell, Group, Burger, UnstyledButton, Image, BackgroundImage, Container, Flex, ActionIcon, Stack, Button } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();
    const [scroll] = useWindowScroll();
    return (
        <AppShell
            header={{ height: "7vh" }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
            pos={"relative"}
        >
            <AppShell.Header bg={"transparent"} px={"xl"} style={{
                backgroundColor:
                    scroll.y > 50 ? "var(--mantine-color-madera-9)" : "transparent",
            }}>
                <Group h="98%" px="md">
                    <Group justify="space-between" flex={1}>
                        <Group gap={0}>
                            <ActionIcon variant="transparent" onClick={toggle}>
                                <Image src={"../images/icons/hamburger.svg"} alt="menu" />
                            </ActionIcon>
                        </Group>
                        <Image w={100} src={"./images/logo.svg"} alt="madera" />
                        <Flex ml="xl" gap={"lg"} w={"auto"} visibleFrom="md">
                            <ActionIcon variant="transparent">
                                <Image src={"./images/icons/search.svg"} alt="search" />
                            </ActionIcon>
                            <ActionIcon variant="transparent">
                                <Image src={"./images/icons/shopping_cart.svg"} alt="search" />
                            </ActionIcon>
                            <ActionIcon variant="transparent">
                                <Image src={"./images/icons/user.svg"} alt="search" />
                            </ActionIcon>
                        </Flex>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4} bg={"madera.9"}>
                <Stack ml="xl" gap={"lg"} w={"auto"}>
                    <Button justify="flex-start" c={"madera.1"} variant="transparent" leftSection={<Image src={"./images/icons/search.svg"} alt="search" />}>
                        Search Madera
                    </Button>
                    <Button justify="flex-start"  c={"madera.1"} variant="transparent" leftSection={<Image src={"./images/icons/shopping_cart.svg"} alt="search" />}>
                        Madera Cart
                    </Button>
                    <Button justify="flex-start"  c={"madera.1"} variant="transparent" leftSection={<Image src={"./images/icons/user.svg"} alt="search" />}>
                        Profile
                    </Button>
                </Stack>
            </AppShell.Navbar>

            <AppShell.Main px={0}>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}