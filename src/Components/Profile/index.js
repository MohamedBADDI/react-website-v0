import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {ProfileSkillsSection,ProfileSection,ProfileList,ProfileItem,Span,SpanWeb,SkillsSection,SkillsDesc,BarSkills,
    TitleSkills,PercSkill,ParentSkill,SpanPercentage,ProfileTitle,SkillsTitle,ProfileTitleSpan,SkillsTitleSpan} from './style.js'

const Profile = () => {
        // hooks
        const [skillInfos, setSkillInfos] = useState([])
        const [profileInfos, setProfileInfo] = useState([])

        useEffect (() => {
            axios.get('js/data.json')
            .then(response => {
                console.log(response.data.profile)
                
                setProfileInfo(response.data.profile)
            })
        }, [])

        useEffect (() => {
            axios.get('js/data.json')
            .then(response => {
                console.log(response.data.skills)
                setSkillInfos(response.data.skills)
            })
        }, [])

    const SkillsInfo = skillInfos.map((SkillItem) => {
        return(
            <BarSkills key={SkillItem.id}>
                <TitleSkills>{SkillItem.skillName}</TitleSkills>
                <PercSkill>{SkillItem.percentage}%</PercSkill>
                <ParentSkill>
                    <SpanPercentage percentage={SkillItem.percentage}></SpanPercentage>
                </ParentSkill>
            </BarSkills>
        )
    })

    const profileInfo = profileInfos.map((infoItem) => {
        return (
            <ProfileList key={infoItem.id}>
                        <ProfileItem>
                            <Span>Name</Span>
                            {infoItem.name}
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            {infoItem.birthday}
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            {infoItem.address}
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            {infoItem.Phone}
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            {infoItem.email}
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>{infoItem.website}</SpanWeb>
                        </ProfileItem>
                 </ProfileList>

        )
    })

    return(   
        <ProfileSkillsSection>
            <div className="container">
            <ProfileSection>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    {profileInfo}
                </ProfileSection>
                <SkillsSection>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    {SkillsInfo}
                   

                </SkillsSection>
                
            </div>
        </ProfileSkillsSection>
    )
}

export default Profile