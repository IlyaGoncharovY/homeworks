import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Ms. Smith',
    message: 'Hello mr. Smith',
    time: '22:00',
}

const alternativeMessageData ={
    avatar: "https://avatars.mds.yandex.net/i?id=d13209a8b36b06bba1ef120d1706d2fc-5883964-images-thumbs&n=13",
    name: "Mr. Smith",
    message: "Hello ms. Smith",
    time: "22:01"
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1