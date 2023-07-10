import Container from "@/components/Container";
import { Text, Button } from "@tarojs/components";
import { useLoad, navigateTo } from "@tarojs/taro";
import { useRecoilValue } from "recoil";

import { appAtom } from "../../store/appStore";

import "./index.scss";

export default function Index() {
  const appState = useRecoilValue(appAtom);
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <Container title="首页" hiddenBack>
      <Text>test: {appState?.count}</Text>

      <Button
        type="primary"
        onClick={() => {
          navigateTo({ url: "/pages/demo/index" });
        }}
      >
        Demo123 页面
      </Button>
    </Container>
  );
}
