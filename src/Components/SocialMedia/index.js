import React, {useEffect,useState} from 'react'
import {SocialMediaSection,SocialDiv,Icon,SocialParag,SpanInfo1,SpanInfo2} from './style'
import axios from 'axios'


const SocialMedia = () => {

    const [SMnfos, setSMInfos] = useState([])

        useEffect (() => {
            axios.get('js/data.json')
            .then(response => {
                console.log(response.data.social)
                
                setSMInfos(response.data.social)
            })
        }, [])

        const SMList = SMnfos.map((itemInfo) => {
            return(
                <SocialDiv item={itemInfo.id} key={itemInfo.id}>
                    <Icon className={itemInfo.icon}></Icon>
                    <SocialParag>
                        <SpanInfo1>{itemInfo.title}</SpanInfo1>
                        <SpanInfo2>{itemInfo.body}</SpanInfo2>
                    </SocialParag>
                </SocialDiv>
            )
        })


    return(
        <SocialMediaSection>
            {SMList}
        </SocialMediaSection>
    )
}

export default SocialMedia