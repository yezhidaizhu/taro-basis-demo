import Container from "@/components/Container";
import { Text } from "@tarojs/components";
import { useLoad, navigateTo } from "@tarojs/taro";
import { AtButton } from "taro-ui";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <Container
      title="首页"
      hiddenBack
      onBack={() => {
        console.log(4567);
      }}
    >
      <Text>Hello world demo demo demo demo test !!!!!</Text>
      <AtButton
        type="primary"
        onClick={() => {
          navigateTo({ url: "/pages/demo/index" });
        }}
      >
        demo
      </AtButton>
    </Container>
  );
}
