import Taro, { useLoad } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import { useCallback } from "react";

const { statusBarHeight = 20, windowWidth } = Taro.getSystemInfoSync?.() ?? {};

// 胶囊位置
const { top, height, right } = Taro.getMenuButtonBoundingClientRect();

const menuButtonRight = windowWidth - right; // 胶囊右边距离右边边界距离

const navHeight = (top - statusBarHeight) * 2 + height; // 导航栏高度
const actionBoxWidth = 40; // 左右操作宽度

export default function Headers({
  title = "",

  hiddenBack = false,
  onBack,
}) {
  useLoad(async () => {});

  const handleBack = useCallback(() => {
    onBack ? onBack?.() : Taro.navigateBack();
  }, [onBack]);

  return (
    <View className={` `}>
      {/* 状态栏 */}
      <View style={{ height: statusBarHeight }} />

      {/* nav */}
      <View
        style={{
          // background: "green",
          padding: `0 ${menuButtonRight}px`,
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
