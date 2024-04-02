// eslint-disable-next-line no-unused-vars
import { Button, Form, Image, Input } from "@taroify/core";
import { user } from "@/ts/core/Passport";
import { FormValidError } from "@taroify/core/form";
import { View, Text, BaseEventOrig, FormProps } from "@tarojs/components";
import Taro, { getStorageSync, useLoad } from "@tarojs/taro";
import logo from "../../assets/logo.png";
import cls from "./index.module.less";

definePageConfig({
  navigationBarTitleText: "登陆",
});
export default function Login() {
  useLoad(() => {
    const userId = getStorageSync("userId");
    if (userId) {
      console.log(userId);
      Taro.switchTab({
        url: "/pages/Game/index",
      });
    }
  });

  const onLogin = (event: BaseEventOrig<FormProps.onSubmitEventDetail>) => {
    user
      .login(event.detail.value!.phone, event.detail.value!.password)
      .then(() => {
        Taro.showToast({
          title: "登录成功",
          icon: "success",
          duration: 2000,
        });
        Taro.switchTab({
          url: "/pages/Game/index",
        });
      })
      .catch((res) => {
        Taro.showToast({
          title: res,
          icon: "error",
          duration: 2000,
        });
      });
  };
  const onValidate = (errors: FormValidError[]) => {
    console.log(errors);
    const message = errors.map((error) => error.errors[0]).join("\n");
    Taro.showToast({
      title: message,
      icon: "error",
      duration: 2000,
    });
  };

  return (
    <View className={cls.container}>
      <View className={`${cls.Circle} ${cls.Circle__One}`}></View>
      <View className={`${cls.Circle} ${cls.Circle__Two} `}></View>
      <View className={`${cls.Circle} ${cls.Circle__Three} `}></View>
      <View className={`${cls.Circle} ${cls.Circle__Four} `}></View>
      <View className={cls.Top}>
        <Image src={logo} className={cls.Top__Img} />
        <Text className={cls.Top__Text}>登录</Text>
      </View>
      <View className={cls.FormBox}>
        <Form onSubmit={onLogin} onValidate={onValidate}>
          <Text className={cls.FormBox__Text}>邮箱/手机号</Text>
          <Form.Item
            name="phone"
            className={`${cls.FormBox__Item}`}
            rules={[{ required: true, message: "请输入邮箱/手机号" }]}
          >
            <Form.Control>
              <Input placeholder="" />
            </Form.Control>
          </Form.Item>
          <Text className={cls.FormBox__Text}>密码</Text>
          <Form.Item
            name="password"
            className={`${cls.FormBox__Item}`}
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Form.Control>
              <Input password placeholder="" />
            </Form.Control>
          </Form.Item>
          <Button
            shape="round"
            block
            color="primary"
            formType="submit"
            className={`${cls.FormBox__Button}`}
          >
            登录
          </Button>
        </Form>
      </View>
      <View className={cls.Register}>
        <Text>没有账号？</Text>
        <Button
          className={cls.Register__Text}
          variant="text"
          color="primary"
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/Passport/Register",
            });
          }}
        >
          点击注册
        </Button>
      </View>
    </View>
  );
}
