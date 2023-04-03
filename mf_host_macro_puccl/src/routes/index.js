// Remote wrapper
import RemoteWrapper from 'components/RemoteWrapper'
import Home from 'pages/Home'

const mfApplications = {
  loginInformation: {
    module: './LoginApp',
    scope: 'login',
    remoteUrl: `http://localhost:3001/remoteEntry.js`,
  },
}

const routes = {
  socialWifi: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: RemoteWrapper,
      mf: mfApplications.loginInformation,
    },
  ],
}

export default routes
