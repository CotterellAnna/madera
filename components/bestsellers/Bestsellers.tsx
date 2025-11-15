import { Container, SimpleGrid, Stack } from "@mantine/core";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { products } from "./data";

export default function Bestsellers() {
    return (
        <Stack mx={{ base: "-md", md: "-40px" }} py={{ base: "md", md: "5rem" }} px={{ base: "md", md: "40px" }} bg={"white"} >
            <Header />
            <SimpleGrid cols={{ base: 1, md: 3 }} mt={"md"}>
                {
                    products.map((props, index) => (
                        <ProductCard {...props} key={index} />
                    ))
                }
            </SimpleGrid>
        </Stack>
    )
}