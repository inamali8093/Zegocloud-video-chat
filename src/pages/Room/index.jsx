import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams()

   const myMeetings = async (element)=>{
    const APP_ID = 1554756746
    const serverSecret = "28201b84de529f645cbe789421c0cf65"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(APP_ID,serverSecret,roomId,Date.now().toString(),"Ali Inam")
    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
        container: element,
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false
    })
   }

  return (
    <div>
      <div ref={myMeetings}/>
    </div>
  )
}

export default RoomPage
