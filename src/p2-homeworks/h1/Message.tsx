import React from 'react'
import s from "./Message.module.css"
type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
};

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={props.avatar}
                 className={s.avatar}
                 alt={"image"}/>

           {/* <div className={s.angle}/>*/}

            <div className={s.content}>
                <div className={s.name}>
                    {props.name}</div>
                <div className={s.text}>
                    {props.message}</div>
                <div className={s.time}>
                    {props.time}</div>
            </div>
        </div>
    )
}

export default Message