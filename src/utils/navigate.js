import Taro from "@tarojs/taro";
import { stringify } from "qs";

/**
 * @param {string | number} path 路劲或者返回层数（负数），例如 -1 返回上一层
 * @param {*} opts 
 */

export default function navigate(
  path = "",
  opts = {
    params: {},
    replace: false,
    fail: () => {},
    success: () => {},
    complete: () => {},
  }
) {
  const { params = {}, replace, ...other } = opts || {};

  const paramsStr = stringify(params);

  const pathStr = paramsStr ? path + "?" + params : path;

  if (replace) {
    // 当前页面跳转
    Taro.redirectTo({
      url: pathStr,
      ...other,
    });
  } else {
    if (typeof path === "number") {
      if(path<0){
        return console.error("[navigate]: path为数字时，需要传入负数，path<0");
      }
      // 返回
      navigateBack(-path, other);
    } else {
      Taro.navigateTo({
        url: pathStr,
        ...other,
      });
    }
  }
}

function navigateBack(delta = 1, opts = {}) {
  // 注意，navigateBack 里的 delta 为正数 
  if (Taro.getCurrentPages().length > delta) {
    Taro.navigateBack({ delta, ...opts });
  }else{
    Taro.redirectTo({ url: "/pages/index/index" });
  }
}
