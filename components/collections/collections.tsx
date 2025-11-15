import { Image, SimpleGrid } from "@mantine/core";

export default function Collections(){
    return(
        <SimpleGrid cols={{base: 1, md: 3}} my={{base: "3rem", md: "5rem"}} px={{base: "30px", md: "40px"}}>
            <Image src={"/images/collections1.png"} alt="furniture" h={"400"}  />
            <Image src={"/images/collections2.png"} alt="furniture" h={"400"}  />
            <Image src={"/images/collections3.jpg"} alt="furniture" h={"400"}  />
        </SimpleGrid>
    )
}