import Taro from "@tarojs/taro";

const { statusBarHeight = 20, screenWidth, screenHeight, safeArea } = Taro.getSystemInfoSync?.() ?? {};
const { top, height, right } = Taro.getMenuButtonBoundingClientRect(); // 胶囊位置

const { bottom  }  = safeArea || {};

const menuButtonDistanceRight = screenWidth - right; // 胶囊右边距离右边边界距离

const navHeight = (top - statusBarHeight) * 2 + height; // 导航栏高度

const bottomSafeHeight = screenHeight - bottom;

export default function useSystem(){
  
  return {
    // 状态栏
    statusBarHeight,
    // 导航栏
    navHeight,
    // 胶囊
    menuButtonDistanceRight,
    // 底部安全距离
    bottomSafeHeight,
  }
}