import React, { Component } from 'react'
import {WorkSection, WorkTitle, WorkPart, Icon, Span, PartDesc, PartTitle, Line} from './style.js'
import axios from 'axios'



class Work extends Component {



    state = {
        works : []
    }

    componentDidMount(){    
        axios.get('js/data.json')
        .then(response => {
            // console.log(response.data.works)
            this.setState({
                works: response.data.works
            })
        })
    }

    render(){
    
    const {works} = this.state
    
    const WorksList = works.map( (worksItem) => {
        return(
            <WorkPart first={worksItem.id} key={worksItem.id}> 
            <Icon className={worksItem.icon_name}></Icon>
            <PartTitle>{worksItem.title}</PartTitle>
            <Line />
            <PartDesc>
                {worksItem.body}
            </PartDesc> 
        </WorkPart>
        )
    } )

    return(
        <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {WorksList}    
            </div>
        </WorkSection>
    )
}

}

export default Work