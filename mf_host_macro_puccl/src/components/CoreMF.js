/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */

import { mount } from 'core/CoreMF';
import React, {useEffect, useRef} from 'react';

export default () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current)
    })

    return <div ref={ref} />
}
