import { BackgroundImage, Badge, Card, Text } from "@mantine/core";
import { Product } from "./data";

export default function ProductCard({imgSrc, title, price}:Product) {
    return (
        <Card bg={"madera.0"} h={550} miw={{base: "100%", md: 400}}>
            <BackgroundImage src={imgSrc} h={420} my={"md"} style={{backgroundPosition: "bottom"}}>
                <Badge size="xl" fw={400} bg={"#342A25CC"} m={"xl"} tt={"capitalize"}>Bestseller</Badge>
            </BackgroundImage>
            <Text fw={600} fz={"24px"} lts={-1} tt={"capitalize"}>{title}</Text>
            <Text fz={"24px"} fw={400}lts={-1}>from ${price}</Text>
        </Card>
    )
}