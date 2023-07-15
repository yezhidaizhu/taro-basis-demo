import Taro, { useLoad } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import { useCallback } from "react";
import useSystem from "@/hooks/useSystem";

const actionBoxWidth = 40;

export default function Headers({
  title = "",

  hiddenBack = false,
  onBack,
}) {
  const { statusBarHeight, menuButtonDistanceRight, navHeight } = useSystem();
  useLoad(async () => {});

  const handleBack = useCallback(() => {
    if (onBack) {
      onBack?.();
    } else {
      const pages = Taro.getCurrentPages();
      if (pages.length > 1) {
        Taro.navigateBack();
      } else {
        Taro.redirectTo({ url: "/pages/index/index" });
      }
    }
  }, [onBack]);

  return (
    <View className={` `}>
      {/* 状态栏 */}
      <View style={{ height: statusBarHeight }} />

      {/* nav */}
      <View
        style={{
          // background: "green",
          padding: `0 ${menuButtonDistanceRight}px`,
          display: "flex",
          alignItems: "center",
          height: navHeight,
        }}
      >
        {/* 左 */}
        <View style={{ width: actionBoxWidth }}>
          {!hiddenBack && (
            <AtIcon value="chevron-left" onClick={handleBack}></AtIcon>
          )}
        </View>

        {/* 中 */}
        <View
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {title}
        </View>

        {/* 右边 */}
        <View style={{ width: actionBoxWidth }}></View>
      </View>
    </View>
  );
}
