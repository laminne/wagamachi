import {Center, Container, Text} from "@mantine/core"
export const Omake = () => {
  return (
    <>

        <Container ml={"20%"}>
          <Text size={"lg"}>技術的詳細ページ (おまけ)</Text>
          <p>
            このサイトは <a href={"https://ja.reactjs.org"} color={"#119992"}>React</a> + TypeScriptをベースに、<br/>
            UIライブラリとしてMantine、UIコンポーネントとしてMantine UIを使って構築しました。<br/>
            バンドラーはViteです。
          </p>
          <p>

          </p>
        </Container>

    </>
  );
}
