import React, {Fragment} from 'react'
import HeaderLogged from '../../../components/header_logged'
import Notes from '../../../components/notes'
function NotesScreen() {
    return (
        <Fragment>
            <HeaderLogged/>
            <Notes />
        </Fragment>
    )
}

export default NotesScreen
