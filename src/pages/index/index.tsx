import { useState } from "react";
import { View } from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";
import { AtTabBar, AtAvatar } from "taro-ui";
import "./index.less";

const Index = () => {
  const [current, setCurrent] = useState<number>(0);

  const onTabClick = (value) => {
    if (value === 1) {
      navigateTo({
        url: "/pages/my/index",
      });
    }
    setCurrent(value);
  };
  return (
    <View className="wrapper">
      <AtAvatar circle text="实验室"></AtAvatar>
      <AtTabBar
        fixed
        selectedColor="#1678ff"
        tabList={[
          { title: "首页", iconType: "home", text: "new" },
          { title: "统计", iconType: "camera" },
          { title: "我的", iconType: "folder", text: "100", max: 99 },
        ]}
        onClick={onTabClick}
        current={current}
      />
    </View>
  );
};

export default Index;
