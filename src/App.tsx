import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
};

const contentStyle: React.CSSProperties = {
  overflow: "auto",
};
const nav_menu = ["About Me", "Education", "Projects", "Contacts"];
function App() {
  return [
    <Layout className="layout-main-root">
      <Header style={headerStyle}>
        <Menu
          className="nav-header"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={nav_menu.map((menu, index) => {
            const key = index + 1;
            return {
              key,
              label: menu,
            };
          })}
        />
      </Header>
      <Content style={contentStyle} className="layout-main-content"></Content>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>,
  ];
}

export default App;
