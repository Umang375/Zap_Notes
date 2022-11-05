
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInital=[
        
            {
              "_id": "6363ee2dd369c931e47e98d6",
              "user": "635c38ec55cd5c2420f33322",
              "title": "hd updation tv",
              "description": "all (this too updated have hd tv",
              "tag": "hdd",
              "date": "2022-11-03T16:37:01.240Z",
              "__v": 0
            },
            {
              "_id": "63668e2c4257880f6d64d27c",
              "user": "635c38ec55cd5c2420f33322",
              "title": "hd tv",
              "description": "all  ghfghf ghfh have hd tv",
              "tag": "hdd",
              "date": "2022-11-05T16:24:12.870Z",
              "__v": 0
            },
            {
              "_id": "63668e2f4257880f6d64d27e",
              "user": "635c38ec55cd5c2420f33322",
              "title": "hd kl hjghj tv",
              "description": "all  ghfghf ghfh have hd tv",
              "tag": "hdd",
              "date": "2022-11-05T16:24:15.500Z",
              "__v": 0
            },
            {
              "_id": "63668e2f4257880f6d64d280",
              "user": "635c38ec55cd5c2420f33322",
              "title": "hd kl hjghj tv",
              "description": "all  ghfghf ghfh have hd tv",
              "tag": "hdd",
              "date": "2022-11-05T16:24:15.879Z",
              "__v": 0
            },
            {
              "_id": "63668e304257880f6d64d282",
              "user": "635c38ec55cd5c2420f33322",
              "title": "hd kl hjghj tv",
              "description": "all  ghfghf ghfh have hd tv",
              "tag": "hdd",
              "date": "2022-11-05T16:24:16.421Z",
              "__v": 0
            },
            {
              "_id": "63668e474257880f6d64d284",
              "user": "635c38ec55cd5c2420f33322",
              "title": "hd kl hjghj tv",
              "description": "all  ghfghf ghfh have hd tv",
              "tag": "hdd",
              "date": "2022-11-05T16:24:39.838Z",
              "__v": 0
            }
          
        ]

        const [notes,setNotes]=useState(notesInital);

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;