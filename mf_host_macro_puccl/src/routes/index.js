// Remote wrapper
import RemoteWrapper from "components/RemoteWrapper";
import Home from "pages/Home";
import CoreApp from "../components/MF/CoreApp";

const mfApplications = {
  loginInformation: {
    module: "./LoginApp",
    scope: "login",
    remoteUrl: `http://localhost:3001/remoteEntry.js`,
  },
};

const routes = [
  {
    path: "/",
    component: CoreApp,
  },
  {
    path: "/login",
    component: RemoteWrapper,
    mf: mfApplications.loginInformation,
  },
];

export default routes;
