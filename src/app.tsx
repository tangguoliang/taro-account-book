import { FC, ReactNode } from "react";
import "taro-ui/dist/style/index.scss"; // 全局引入一次即可
import "./app.less";

type AppProps = {
  children: ReactNode;
};

const App: FC<AppProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default App;
