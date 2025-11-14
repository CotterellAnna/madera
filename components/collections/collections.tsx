import { Image, SimpleGrid } from "@mantine/core";

export default function Collections(){
    return(
        <SimpleGrid cols={{base: 1, md: 3}} my={{base: "md", md: "5rem"}}>
            <Image src={"/images/collections1.png"} h={"400"}  />
            <Image src={"/images/collections2.png"} h={"400"}  />
            <Image src={"/images/collections3.jpg"} h={"400"}  />
        </SimpleGrid>
    )
}