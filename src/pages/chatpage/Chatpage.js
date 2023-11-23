// import { useEffect,  } from 'react'
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Chatpage = () => {
    const [chats, setChats] = useState([]);
    const fatchChats = async () => {
        const datas = await axios.get(`/api/chat/`);
        // const {datas} = await axios.get(`/api/chat/`);
        // console.log(datas);
        // console.log(datas.data);
        setChats(datas.data);

    }

    useEffect(() => {
        fatchChats();


    }, [])
    return (
        <>
            {/* < h1 > hell cha</h1 > */}
            <div>
                {chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)}</div>

        </>
    )
}

export default Chatpage