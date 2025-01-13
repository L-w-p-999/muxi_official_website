import { useState } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import First from "./components/first/first";
import Header from "./components/header/header";
import routes from "./routes";
import "./styles/base.scss";

function App() {
  //todo: 小神秘啊，居然写了移动端都没人说，后端完全没部署，找个人修一修
  // 检测是否为移动设备
  // if (/Mobi|Android/i.test(navigator.userAgent)) {
  //   // 执行移动设备重定向
  //   window.location.href = "http://m.muxi-tech.xyz";
  // }
  const element = useRoutes(routes);
  return (
    <div className="App">
      {element}
      <Outlet />
      <div className="beian">
        <a href="http://www.beian.miit.gov.cn/">鄂ICP备19024133号</a>
      </div>
    </div>
  );
}

export default App;
