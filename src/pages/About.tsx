import {TableScrollArea} from "../components/table";
import {Container, Text} from "@mantine/core";
import {Top_Images} from "../components/top_image";

export const About = () => {
  const d = [
    {
      name: "人口",
      value: "279.9万人",
      other: "R2年国勢調査, 県HPより",
    },
    {
      name: "面積",
      value: "8479平方㎞",
      other: "国土地理院 R4年面積調より"
    },
    {
      name: "面積が最大の市区町",
      value: "庄原市(1246.49平方㎞)",
      other: "同上"
    },
    {
      name: "人口が最大の市町",
      value: "広島市 (118.9万人)",
      other: "R4年, 県HPより"
    },
    {
      name: "人口が最大の区",
      value: "安佐南区 (24.4万人)",
      other: "同上"
    },
    {
      name: "信号機のない横断歩道で車が一時停止する確率",
      value: "24.1%",
      other: "2021, JAFより"
    }
  ]

  return (
    <>
      <Top_Images title={"広島県について"}></Top_Images>
      <Container>
        <Text size={"xl"} mt={"1em"} mb={"1em"} weight={"bold"}>統計情報</Text>
        <TableScrollArea data={d}></TableScrollArea>
      </Container>
    </>
  )
}
