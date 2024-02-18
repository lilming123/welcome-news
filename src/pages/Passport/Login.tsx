import { View, Text } from "@tarojs/components";
import { getStorageSync, navigateTo, useLoad, setStorage } from "@tarojs/taro";
import "./index.less";

definePageConfig({
  navigationBarTitleText: "登陆",
});
export default function Login() {
  useLoad(() => {
    // 第一次进入没有缓存，是undefined，进入引导页
    const isFirstTime = getStorageSync("isFirstTime");
    if (isFirstTime === undefined) {
      navigateTo({
        url: "/pages/Welcome/index",
      });
      setStorage({
        key: "isFirstTime",
        data: false,
      });
    }
  });

  return <View>

  </View>;
}
