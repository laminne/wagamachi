import {Top_Images} from "../components/top_image";
import {Center, Container, Text} from "@mantine/core"
import {ImageActionBanner} from "../components/banner";


export const TopPage = () => {
  const button = {
    title: "",
    link: ""
  }
  return (
    <>
      <Top_Images  title={"広島県"}/>

      <Container w={"90%"}>
          <Text size={"sm"}>Image: 竹原市 町並み保存地区</Text>

          <ImageActionBanner title={"広島県について"} description={"人口、面積などの情報"} image={"/public/ekimae.jpg"} action={{label: "詳しく", link:"/about"}} mt={"1em"} />
          <Container m={"2em"}></Container>
          <ImageActionBanner title={"県内観光スポット？ギャラリー"} description={"人口、面積などの情報"} image={"/public/hondori-eki.jpg"} action={{label: "詳しく", link:"/about"}}></ImageActionBanner>
      </Container>
    </>
  );
}

