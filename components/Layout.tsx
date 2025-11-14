import { AppShell, Group, Burger, UnstyledButton, Image, BackgroundImage, Container, Flex, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: "7vh" }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
            pos={"relative"}
        >
            {/* <Container fluid
                pos={"absolute"}
                h={"75vh"}
                w={"100vw"}
                style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(23, 22, 22, 0.76), rgba(2, 2, 2, 0.06)), url('/images/hero_section_bg.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 80%",
                    zIndex: 0,
                }} /> */}
            <AppShell.Header bg={"transparent"} px={"xl"}>
                <Group h="100%" px="md">
                    <Group justify="space-between" flex={1}>
                        <Group gap={0}>
                            <ActionIcon variant="transparent" onClick={toggle}>
                                <Image src={"/images/icons/hamburger.svg"} alt="menu" />
                            </ActionIcon>
                        </Group>
                        <Image w={100} src={"/images/logo.svg"} alt="madera" />
                        <Flex ml="xl" gap={"lg"} w={"auto"}>
                            <ActionIcon variant="transparent">
                                <Image src={"/images/icons/search.svg"} alt="search" />
                            </ActionIcon>
                            <ActionIcon variant="transparent">
                                <Image src={"/images/icons/shopping_cart.svg"} alt="search" />
                            </ActionIcon>
                            <ActionIcon variant="transparent">
                                <Image src={"/images/icons/user.svg"} alt="search" />
                            </ActionIcon>
                        </Flex>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <Image src={"/images/icons/search.svg"} alt="search" />
                <UnstyledButton>Blog</UnstyledButton>
                <UnstyledButton>Contacts</UnstyledButton>
                <UnstyledButton>Support</UnstyledButton>
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}