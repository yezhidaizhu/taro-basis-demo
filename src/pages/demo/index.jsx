import Container from "@/components/Container";
import { appAtom } from "@/store/appStore";
import { useRecoilState } from "recoil";
import { Button } from "@tarojs/components";

export default function Demo() {
  const [appState, setAppState] = useRecoilState(appAtom);
  return (
    <Container title="demo">
      test: {appState.count}
      <Button onClick={() => setAppState({ count: appState.count + 1 })}>
        add
      </Button>
    </Container>
  );
}
