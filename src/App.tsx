import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [prev_scrolling, set_prev_scrolling] = useState<any>(0);
  const [scrolling, set_scrolling] = useState<any>(undefined);
  const handleScroll = (e: React.UIEvent) => {
    console.log("scrolling", scrolling, e.currentTarget.scrollTop);
    if (scrolling == undefined) {
      set_scrolling({
        value: e.currentTarget.scrollTop,
        el: e.currentTarget,
      });
    }
  };
  useEffect(() => {
    if (scrolling != undefined) {
      let direction = undefined;
      if (scrolling?.value > prev_scrolling) {
        direction = 1;
      } else if (scrolling?.value < prev_scrolling) {
        direction = -1;
      }

      if (direction != undefined) {
        let height = scrolling?.el?.clientHeight;
        let prune_value = Math.floor(scrolling?.el?.scrollTop / height);
        console.log(direction, prune_value, height, prune_value * height);
        scrolling?.el?.scrollTo({ top: direction === 1 ? (prune_value + 1) * height : prune_value * height, behavior: "smooth" });
        setTimeout(() => {
          set_prev_scrolling(scrolling?.value);
          set_scrolling(undefined);
        }, 500);
      }
    }
  }, [prev_scrolling, scrolling]);
  return [
    <div style={{ maxHeight: "100vh", overflow: "auto" }} onScroll={handleScroll}>
      <div className="section header-section">
        <div className="header-content">
          <img className="header-avatar" />
          <div className="header-texts">
            <div className="header-text-intro">Hi, I'm</div>
            <div className="header-text-name">Cecilio Frederico D. Deticio</div>
            <div className="header-text-job-title">Web Developer</div>
            <div className="header-text-btn-container">
              <button className="header-text-btn">Download CV</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section about-me-section"></div>
      <div className="section about-me-section"></div>
      <div className="section about-me-section"></div>
      <div className="section about-me-section"></div>
    </div>,
  ];
  // return [
  //   <Layout className="layout-main-root">
  //     <Header style={headerStyle}>
  //       <Menu
  //         className="nav-header"
  //         theme="dark"
  //         mode="horizontal"
  //         defaultSelectedKeys={["2"]}
  //         items={nav_menu.map((menu, index) => {
  //           const key = index + 1;
  //           return {
  //             key,
  //             label: menu,
  //           };
  //         })}
  //       />
  //     </Header>
  //     <Content style={contentStyle} className="layout-main-content"></Content>
  //     {/* <Footer style={footerStyle}>Footer</Footer> */}
  //   </Layout>,
  // ];
}

export default App;
