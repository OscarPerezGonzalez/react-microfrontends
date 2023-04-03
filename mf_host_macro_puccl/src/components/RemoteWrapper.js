/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import useScript from 'utils/useScript'

const RemoteWrapper = ({ scope, module, remoteUrl }) => {
  const { failed, ready } = useScript(remoteUrl)

  const ref = React.useRef(null)

  const history = useHistory()

  const application = async () => {
    // eslint-disable-next-line no-undef
    await __webpack_init_sharing__('default')

    const container = window[scope]

    // eslint-disable-next-line no-undef
    await container.init(__webpack_share_scopes__.default)
    const factory = await window[scope].get(module)
    const { mount } = factory()

    const { onParentNavigate } = mount(ref.current, {
      initialPath: {
        location: history.location.pathname,
        pathname: history.location.pathname,
        search: history.location.search,
      },
      onNavigate: ({ pathname: nextPathname, search: nextSearch }) => {
        const { pathname } = history.location

        if (pathname !== nextPathname) {
          history.push({ pathname: nextPathname, search: nextSearch })
        }
      },
    })

    history.listen(onParentNavigate)
  }

  useEffect(() => {
    if (ready) {
      application()
    }
  }, [ready])

  if (failed) {
    return <h1>Contenido no disponible</h1>
  }

  return <div ref={ref} />
}

export default RemoteWrapper
