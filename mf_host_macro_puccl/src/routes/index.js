/* eslint-disable import/no-unresolved */
// Remote wrapper
import RemoteWrapper from 'components/RemoteWrapper'
import Home from 'pages/Home'
import CoreMF from 'components/CoreMF'

// import Clients from 'mf_remote_clients_puccl/Clients'

const mfApplications = {
  loginInformation: {
    module: './LoginApp',
    scope: 'login',
    remoteUrl: `http://localhost:3001/remoteEntry.js`,
  },
}

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/clients',
    component: CoreMF,
  },
  {
    path: '/login',
    component: RemoteWrapper,
    mf: mfApplications.loginInformation,
  },
]

export default routes
