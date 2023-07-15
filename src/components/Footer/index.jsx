import { View, Image, Text } from "@tarojs/components";
import useSystem from "@/hooks/useSystem";
import Taro from "@tarojs/taro";
import { memo, useMemo } from "react";

import "./footer.scss";

const tabs = [
  {
    label: "首页",
    icon: "https://picsum.photos/200/200",
    activeIcon: "https://picsum.photos/300/300",
    page: "/pages/index/index",
  },
  {
    label: "搜索",
    icon: "https://picsum.photos/200/200",
    activeIcon: "https://picsum.photos/300/300",
    page: "/pages/demo/index",
  },
  {
    label: "我的",
    icon: "https://picsum.photos/200/200",
    activeIcon: "https://picsum.photos/300/300",
    page: "/pages/mine/index",
  },
];

function Footer() {
  const { bottomSafeHeight } = useSystem();

  return (
    <View>
      {/* tab */}
      <View
        style={{
          height: 120 + "rpx",
        }}
        className="my-custom-footer my-custom-footer-tab-box"
      >
        {tabs.map((tabItem, index) => (
          <FooterTab key={index} {...tabItem} />
        ))}
      </View>

      {/* 安全底部高度 */}
      <View style={{ height: bottomSafeHeight }}></View>
    </View>
  );
}

export default memo(Footer);

function FooterTab({ label = "", icon = "", activeIcon, page }) {
  const router = Taro.useRouter();
  const isActive = useMemo(() => {
    console.log(router.path, page, router.path === page);
    return router.path === page;
  }, [router, page]);

  return (
    <View
      className={`my-custom-footer-tab ${
        isActive ? "my-custom-footer-tab-active" : ""
      }`}
      onClick={() => Taro.redirectTo({ url: page })}
    >
      <Image
        src={isActive ? activeIcon : icon}
        className="my-custom-footer-tab-icon"
        mode="aspectFit"
      />
      <Text>{label}</Text>
    </View>
  );
}
