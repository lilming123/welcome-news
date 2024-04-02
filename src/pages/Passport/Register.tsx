import Taro from "@tarojs/taro";
import React from "react";
import { BaseEventOrig, FormProps, Text, View } from "@tarojs/components";
import { user } from "@/ts/core/Passport";
import { FormValidError } from "@taroify/core/form";
import { Button, Form, Image, Input } from "@taroify/core";
import cls from "./index.module.less";
import logo from "../../assets/logo.png";

definePageConfig({
  navigationBarTitleText: "注册",
});
const Register: React.FC = () => {
  const onRegister = (event: BaseEventOrig<FormProps.onSubmitEventDetail>) => {
    //TODO 校验
    user
      .register(
        event.detail.value!.username,
        event.detail.value!.phone,
        event.detail.value!.password
      )
      .then((res) => {
        Taro.showToast({
          title: res,
          icon: "success",
          duration: 2000,
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
        <Text className={cls.Top__Text}>注册</Text>
      </View>
      <View className={cls.FormBox}>
        <Form onSubmit={onRegister} onValidate={onValidate}>
          <Text className={cls.FormBox__Text}>姓名</Text>
          <Form.Item
            name="username"
            className={`${cls.FormBox__Item}`}
            rules={[{ required: true, message: "请输入真实姓名" }]}
          >
            <Form.Control>
              <Input placeholder="" />
            </Form.Control>
          </Form.Item>
          <Text className={cls.FormBox__Text}>手机号</Text>
          <Form.Item
            name="phone"
            className={`${cls.FormBox__Item}`}
            rules={[{ required: true, message: "请输入手机号" }]}
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
          <Text className={cls.FormBox__Text}>请再次输入密码</Text>
          <Form.Item
            name="password_again"
            className={`${cls.FormBox__Item}`}
            rules={[{ required: true, message: "请再次输入密码" }]}
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
            注册并登录
          </Button>
        </Form>
      </View>{" "}
      <View className={cls.Register}>
        <Text>已有账号？</Text>
        <Button
          className={cls.Register__Text}
          variant="text"
          color="primary"
          onClick={() => {
            Taro.navigateBack();
          }}
        >
          返回登录
        </Button>
      </View>
    </View>
  );
};

export default Register;
