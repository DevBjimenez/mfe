import React, { useEffect, useRef } from 'react'
import { mount } from 'authApp/AuthIndex'
import { useHistory } from 'react-router-dom'

export default ({ onSignIn }) => {
    const ref = useRef(null)
    const history = useHistory()
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname: currentPathname } = history.location
                if (currentPathname !== nextPathname) {
                    history.push(nextPathname)
                }
            },
            onSignIn
        })

        history.listen(onParentNavigate)
    }, [])


    return <div ref={ref} />
}