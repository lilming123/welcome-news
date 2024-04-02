import React from "react";
import {
  View,
  Text,
  Navigator,
  Swiper,
  SwiperItem,
  Image,
  ScrollView,
  Block,
} from "@tarojs/components";
import { AtIcon, AtTag } from "taro-ui";
import "./index.less";
import clear from "../../assets/chat/clear.png";

definePageConfig({
  navigationBarTitleText: "发现",
});
const Post: React.FC = () => {
  const data = {
    banner: [
      { id: 1, url: "https://img01.yzcdn.cn/vant/apple-1.jpg" },
      { id: 2, url: "https://img01.yzcdn.cn/vant/apple-1.jpg" },
      { id: 3, url: "https://img01.yzcdn.cn/vant/apple-1.jpg" },
    ],
    channel: [
      { id: 1, name: "特价好物", iconUrl: clear },
      { id: 2, name: "美食团购", iconUrl: clear },
      { id: 3, name: "休闲玩乐", iconUrl: clear },
      { id: 4, name: "电影演出", iconUrl: clear },
      { id: 5, name: "火车票机票", iconUrl: clear },
    ],
    couponList: [
      {
        id: 1,
        tag: "优惠",
        discount: "100",
        min: 50,
        name: "111",
        desc: "222",
        days: 7,
        startTime: "2024-3-31",
        endTime: "2024-4-7",
      },
      {
        id: 1,
        tag: "优惠",
        discount: "100",
        min: 100,
        name: "111",
        desc: "222",
        days: 7,
        startTime: "2024-3-31",
        endTime: "2024-4-7",
      },
      {
        id: 1,
        tag: "123",
        discount: "100",
        min: 80,
        name: "111",
        desc: "222",
        days: 7,
        startTime: "2024-3-31",
        endTime: "2024-4-7",
      },
    ],
    grouponList: [
      {
        id: 1,
        picUrl: "https://img01.yzcdn.cn/vant/apple-2.jpg",
        name: "枕头",
        grouponMember: 3,
        expireTime: 7,
        brief: "简介",
        retailPrice: 100,
        grouponPrice: 80,
      },
      {
        id: 1,
        picUrl: "https://img01.yzcdn.cn/vant/apple-2.jpg",
        name: "枕头",
        grouponMember: 3,
        expireTime: 7,
        brief: "简介",
        retailPrice: 100,
        grouponPrice: 80,
      },
      {
        id: 1,
        picUrl: "https://img01.yzcdn.cn/vant/apple-2.jpg",
        name: "枕头",
        grouponMember: 3,
        expireTime: 7,
        brief: "简介",
        retailPrice: 100,
        grouponPrice: 80,
      },
      {
        id: 1,
        picUrl: "https://img01.yzcdn.cn/vant/apple-2.jpg",
        name: "枕头",
        grouponMember: 3,
        expireTime: 7,
        brief: "简介",
        retailPrice: 100,
        grouponPrice: 80,
      },
    ],
  };
  return (
    // <View>
    //   <Swiper className={cls.imageSwiper} lazyRender autoplay={4000}>
    //     <Swiper.Indicator />
    //     <Swiper.Item>
    //       <Image
    //         className={cls.image}
    //         src="https://img01.yzcdn.cn/vant/apple-1.jpg"
    //       />
    //     </Swiper.Item>
    //     <Swiper.Item>
    //       <Image
    //         className={cls.image}
    //         src="https://img01.yzcdn.cn/vant/apple-2.jpg"
    //       />
    //     </Swiper.Item>
    //     <Swiper.Item>
    //       <Image
    //         className={cls.image}
    //         src="https://img01.yzcdn.cn/vant/apple-3.jpg"
    //       />
    //     </Swiper.Item>
    //     <Swiper.Item>
    //       <Image
    //         className={cls.image}
    //         src="https://img01.yzcdn.cn/vant/apple-4.jpg"
    //       />
    //     </Swiper.Item>
    //   </Swiper>
    //   <View className={cls.newList}>
    //     <View className={cls.newItem}>
    //       <Image
    //         className={cls.newImage}
    //         src="https://img01.yzcdn.cn/vant/apple-4.jpg"
    //       ></Image>
    //       <View className={cls.newContext}>
    //         <View className={cls.newTitle}>标题</View>
    //         <View className={cls.newUser}>
    //           <View className={cls.user}>
    //             <Image className={cls.useImage}></Image>
    //             <View>用户1</View>
    //           </View>
    //           <View className={cls.newTime}>10分钟前</View>
    //         </View>
    //       </View>
    //     </View>
    //     <View className={cls.line}></View>
    //     <View className={cls.newItem}>
    //       <Image
    //         className={cls.newImage}
    //         src="https://img01.yzcdn.cn/vant/apple-4.jpg"
    //       ></Image>
    //       <View className={cls.newContext}>
    //         <View className={cls.newTitle}>标题</View>
    //         <View className={cls.newUser}>
    //           <View className={cls.user}>
    //             <Image className={cls.useImage}></Image>
    //             <View>用户1</View>
    //           </View>
    //           <View className={cls.newTime}>10分钟前</View>
    //         </View>
    //       </View>
    //     </View>
    //     <View className={cls.line}></View>{" "}
    //     <View className={cls.newItem}>
    //       <Image
    //         className={cls.newImage}
    //         src="https://img01.yzcdn.cn/vant/apple-4.jpg"
    //       ></Image>
    //       <View className={cls.newContext}>
    //         <View className={cls.newTitle}>标题</View>
    //         <View className={cls.newUser}>
    //           <View className={cls.user}>
    //             <Image className={cls.useImage}></Image>
    //             <View>用户1</View>
    //           </View>
    //           <View className={cls.newTime}>10分钟前</View>
    //         </View>
    //       </View>
    //     </View>
    //     <View className={cls.line}></View>
    //     <View className={cls.newItem}>
    //       <Image
    //         className={cls.newImage}
    //         src="https://img01.yzcdn.cn/vant/apple-4.jpg"
    //       ></Image>
    //       <View className={cls.newContext}>
    //         <View className={cls.newTitle}>标题</View>
    //         <View className={cls.newUser}>
    //           <View className={cls.user}>
    //             <Image className={cls.useImage}></Image>
    //             <View>用户1</View>
    //           </View>
    //           <View className={cls.newTime}>10分钟前</View>
    //         </View>
    //       </View>
    //     </View>
    //     <View className={cls.line}></View>{" "}
    //   </View>
    // </View>
    <Block>
      <View className="bar-container container">
        <View className="search">
          <View className="input">
            <AtIcon className="icon" size="18" color="#666" value="search" />
            <Text className="txt">商品搜索, 共0款好物</Text>
          </View>
        </View>
        <Swiper
          className="banner"
          indicatorDots
          autoplay
          interval={3000}
          duration={100}
        >
          {data.banner &&
            data.banner.map((item) => {
              return (
                <SwiperItem key={item.id}>
                  <Image className="img" src={item.url} />
                </SwiperItem>
              );
            })}
        </Swiper>
        <View className="m-menu">
          {data.channel &&
            data.channel.map((item) => {
              return (
                <View key={item.id} className="item">
                  <Image className="img" src={item.iconUrl} />
                  <Text className="txt">{item.name}</Text>
                </View>
              );
            })}
        </View>

        {data.couponList && data.couponList.length > 0 && (
          <View className="a-section a-coupon">
            <View className="b">
              {data.couponList.map((item) => {
                return (
                  <View data-index={item.id} className="item" key={item.id}>
                    <View className="tag">{item.tag}</View>
                    <View className="content">
                      <View className="left">
                        <View className="discount">{item.discount}元</View>
                        <View className="min"> 满{item.min}元使用</View>
                      </View>
                      <View className="right">
                        <View className="name">{item.name}</View>
                        <View className="desc">{item.desc}</View>
                        {item.days != 0 ? (
                          <View className="time">有效期：{item.days}天</View>
                        ) : (
                          <View className="time">
                            {" "}
                            有效期：{item.startTime} - {item.endTime}
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {data.grouponList && data.grouponList.length > 0 && (
          <View className="a-section a-groupon">
            <View className="b">
              {data.grouponList.map((item) => {
                return (
                  <View className="item" key={item.id}>
                    <Navigator url={`/pages/goods/goods?id=${item.id}`}>
                      <Image className="img" src={item.picUrl}></Image>
                      <View className="right">
                        <View className="Text">
                          <View className="header">
                            <Text className="name">{item.name}</Text>
                            <AtTag
                              customStyle={{ background: "antiquewhite" }}
                              className="tag"
                              size="small"
                              active
                              type="primary"
                            >
                              {item.grouponMember}人成团
                            </AtTag>
                          </View>
                          <View className="expire">
                            <AtTag className="expireTag" size="small" circle>
                              有效期 {item.expireTime}
                            </AtTag>
                          </View>
                          <Text className="desc">{item.brief}</Text>
                          <View className="price">
                            <View className="counterPrice">
                              现价：￥{item.retailPrice}
                            </View>
                            <View className="retailPrice">
                              团购价：￥{item.grouponPrice}
                            </View>
                          </View>
                        </View>
                      </View>
                    </Navigator>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {/*{data.newGoodsList && data.newGoodsList.length > 0 && (*/}
        {/*  <View className="a-section a-new">*/}
        {/*    <View className="h">*/}
        {/*      <View>*/}
        {/*        <Navigator url="../newGoods/newGoods">*/}
        {/*          <Text className="txt">周一周四 · 新品首发</Text>*/}
        {/*        </Navigator>*/}
        {/*      </View>*/}
        {/*    </View>*/}
        {/*    <View className="b">*/}
        {/*      {data.newGoodsList.map((item) => {*/}
        {/*        return (*/}
        {/*          <View className="item" key={item.id}>*/}
        {/*            <Navigator url={`../goods/goods?id=${item.id}`}>*/}
        {/*              <Image className="img" src={item.picUrl}></Image>*/}
        {/*              <Text className="name">{item.name}</Text>*/}
        {/*              <Text className="price">￥{item.retailPrice}</Text>*/}
        {/*            </Navigator>*/}
        {/*          </View>*/}
        {/*        );*/}
        {/*      })}*/}
        {/*    </View>*/}
        {/*  </View>*/}
        {/*)}*/}

        {/*{data.brandList && data.brandList.length > 0 && (*/}
        {/*  <View className="a-section a-brand">*/}
        {/*    <View className="h">*/}
        {/*      <Navigator url="../brand/brand">*/}
        {/*        <Text className="txt">品牌制造商直供</Text>*/}
        {/*      </Navigator>*/}
        {/*    </View>*/}
        {/*    <View className="b">*/}
        {/*      {data.brandList.map((item) => {*/}
        {/*        return (*/}
        {/*          <View className="item item-1" key={item.id}>*/}
        {/*            <Navigator*/}
        {/*              url={`/pages/brandDetail/brandDetail?id=${item.id}`}*/}
        {/*            >*/}
        {/*              <View className="wrap">*/}
        {/*                <Image*/}
        {/*                  className="img"*/}
        {/*                  src={item.picUrl}*/}
        {/*                  mode="aspectFill"*/}
        {/*                ></Image>*/}
        {/*                <View className="mt">*/}
        {/*                  <Text className="brand">{item.name}</Text>*/}
        {/*                  <Text className="price">{item.floorPrice}</Text>*/}
        {/*                  <Text className="unit">元起</Text>*/}
        {/*                </View>*/}
        {/*              </View>*/}
        {/*            </Navigator>*/}
        {/*          </View>*/}
        {/*        );*/}
        {/*      })}*/}
        {/*    </View>*/}
        {/*  </View>*/}
        {/*)}*/}

        {/*{data.hotGoodsList && data.hotGoodsList.length > 0 && (*/}
        {/*  <View className="a-section a-popular">*/}
        {/*    <View className="h">*/}
        {/*      <View>*/}
        {/*        <Navigator url="../hotGoods/hotGoods">*/}
        {/*          <Text className="txt">人气推荐</Text>*/}
        {/*        </Navigator>*/}
        {/*      </View>*/}
        {/*    </View>*/}
        {/*    <View className="b">*/}
        {/*      {data.hotGoodsList.map((item) => {*/}
        {/*        return (*/}
        {/*          <View className="item" key={item.id}>*/}
        {/*            <Navigator url={`/pages/goods/goods?id=${item.id}`}>*/}
        {/*              <Image className="img" src={item.picUrl}></Image>*/}
        {/*              <View className="right">*/}
        {/*                <View className="Text">*/}
        {/*                  <Text className="name">{item.name}</Text>*/}
        {/*                  <Text className="desc">{item.brief}</Text>*/}
        {/*                  <Text className="price">￥{item.retailPrice}</Text>*/}
        {/*                </View>*/}
        {/*              </View>*/}
        {/*            </Navigator>*/}
        {/*          </View>*/}
        {/*        );*/}
        {/*      })}*/}
        {/*    </View>*/}
        {/*  </View>*/}
        {/*)}*/}

        {/*{data.topicList && data.topicList.length > 0 && (*/}
        {/*  <View className="a-section a-topic">*/}
        {/*    <View className="h">*/}
        {/*      <View>*/}
        {/*        <Navigator url="/pages/topic/topic">*/}
        {/*          <Text className="txt">专题精选</Text>*/}
        {/*        </Navigator>*/}
        {/*      </View>*/}
        {/*    </View>*/}
        {/*    <View className="b">*/}
        {/*      <ScrollView scrollX className="list">*/}
        {/*        {data.topicList.map((item) => {*/}
        {/*          return (*/}
        {/*            <View className="item" key={item.id}>*/}
        {/*              <Navigator*/}
        {/*                url={`../topicDetail/topicDetail?id=${item.id}`}*/}
        {/*              >*/}
        {/*                <Image className="img" src={item.picUrl}></Image>*/}
        {/*                <View className="np">*/}
        {/*                  <Text className="name">{item.title}</Text>*/}
        {/*                  <Text className="price">￥{item.price}元起</Text>*/}
        {/*                </View>*/}
        {/*                <Text className="desc">{item.subtitle}</Text>*/}
        {/*              </Navigator>*/}
        {/*            </View>*/}
        {/*          );*/}
        {/*        })}*/}
        {/*      </ScrollView>*/}
        {/*    </View>*/}
        {/*  </View>*/}
        {/*)}*/}

        {/*{data.floorGoodsList &&*/}
        {/*  data.floorGoodsList.length > 0 &&*/}
        {/*  data.floorGoodsList.map((item) => {*/}
        {/*    return (*/}
        {/*      <View className="good-grid" key={item.id}>*/}
        {/*        <View className="h">*/}
        {/*          <Text>{item.name}</Text>*/}
        {/*        </View>*/}
        {/*        <View className="b">*/}
        {/*          {item.goodsList &&*/}
        {/*            item.goodsList.map((good, index) => {*/}
        {/*              return (*/}
        {/*                <Block key={good.id}>*/}
        {/*                  <View*/}
        {/*                    className={`item ${index % 2 == 0 ? "" : "item-b"}`}*/}
        {/*                  >*/}
        {/*                    <Navigator*/}
        {/*                      url={`../goods/goods?id=${good.id}`}*/}
        {/*                      className="a"*/}
        {/*                    >*/}
        {/*                      <Image className="img" src={good.picUrl}></Image>*/}
        {/*                      <Text className="name">{good.name}</Text>*/}
        {/*                      <Text className="price">*/}
        {/*                        ￥{good.retailPrice}*/}
        {/*                      </Text>*/}
        {/*                    </Navigator>*/}
        {/*                  </View>*/}
        {/*                </Block>*/}
        {/*              );*/}
        {/*            })}*/}
        {/*        </View>*/}
        {/*        <Navigator*/}
        {/*          url={`/pages/category/category?id=${item.id}`}*/}
        {/*          className="t"*/}
        {/*        >*/}
        {/*          <View className="txt">{"更多" + item.name + "好物 >"}</View>*/}
        {/*        </Navigator>*/}
        {/*      </View>*/}
        {/*    );*/}
        {/*  })}*/}
      </View>
    </Block>
  );
};

export default Post;
