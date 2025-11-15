import { Button, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";

export default function Header(){
    return(
        <SimpleGrid cols={{base:1, md: 2}}>
            <Stack>
                <Title order={3} fz={"48px"} tt={"uppercase"} fw={700}>
                    Designs that define us
                </Title>
                <Text>Explore our bestselling pieces — where artistry meets timeless craftsmanship. These are the creations our customers return to, again and again.</Text>
            </Stack>
            <Group justify="flex-end">
                <Button tt={"uppercase"}>Browse our best sellers</Button>
            </Group>
        </SimpleGrid>
    )
}