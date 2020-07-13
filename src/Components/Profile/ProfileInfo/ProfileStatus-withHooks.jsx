import React, {useState} from 'react';
import { useEffect } from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus ] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }

        return (
            <div>
                {props.isOwner && !editMode &&
                    <div>
                        <span onDoubleClick={ activateEditMode }>{props.status || 'You can change status'}</span>
                    </div>
                }
                {props.isOwner && editMode &&
                    <div>
                        <input onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } value={status} />
                    </div>
                }
                {!props.isOwner &&
                    <div>
                        <span>{props.status}</span>
                    </div>}
            </div>
        )
    }

export default ProfileStatusWithHooks;