import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const App = () => {
  return (
    <Layout>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default App;
