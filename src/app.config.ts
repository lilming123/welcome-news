export default defineAppConfig({
  pages: [
    "pages/Passport/Login",
    "pages/Passport/Register",
    "pages/Game/index",
    "pages/Post/index",
    "pages/Chats/index",
    "pages/Setting/index",
  ],
  tabBar: {
    list: [
      {
        pagePath: "pages/Game/index",
        text: "游戏",
        iconPath: "assets/tab/game.png",
        selectedIconPath: "assets/tab/game_active.png",
      },
      {
        pagePath: "pages/Post/index",
        text: "发现",
        iconPath: "assets/tab/wiki.png",
        selectedIconPath: "assets/tab/wiki_active.png",
      },
      {
        pagePath: "pages/Chats/index",
        text: "班级圈",
        iconPath: "assets/tab/chat.png",
        selectedIconPath: "assets/tab/chat_active.png",
      },
      {
        pagePath: "pages/Setting/index",
        text: "我的",
        iconPath: "assets/tab/my.png",
        selectedIconPath: "assets/tab/my_active.png",
      },
    ],
    color: "#000",
    selectedColor: "#f1bf45",
    backgroundColor: "#f8f8f8",
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
