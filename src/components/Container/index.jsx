import { View } from "@tarojs/components";
import Headers from "../Header";
import "./container.scss";

export default function Container({
  // 布局相关
  layoutProps,
  layoutClassName,

  className,
  children,

  // 导航相关
  hiddenNav = false,
  title = "",
  hiddenBack = false,
  onBack,
}) {
  return (
    <View
      className={[
        "my-custom-layout",
        layoutClassName,
        layoutClassName?.className,
      ]}
      {...layoutProps}
    >
      {/* header */}
      {!hiddenNav && (
        <Headers title={title} onBack={onBack} hiddenBack={hiddenBack} />
      )}

      {/* container */}
      <View className={["my-custom-container", className]}>{children}</View>
    </View>
  );
}
