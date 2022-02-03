import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Ms. Smith',
    message: 'Hello!',
    time: '22:00',
}

const messageDataAlternative = {
    avatar: 'http://st.gde-fon.com/wallpapers_original/621485_minenyi_studiya-piksar_multgeroi_7332x8299_www.Gde-Fon.com.jpg',
    name: 'Mr. Smith',
    message: 'Hello!!',
    time: '22:01',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageDataAlternative.avatar}
                name={messageDataAlternative.name}
                message={messageDataAlternative.message}
                time={messageDataAlternative.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
