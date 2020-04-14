import React, {useState, useEffect} from 'react'
import { PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,OverlaySpan,Overlay,ImageWrapper,Image } from './style.js'
import axios from 'axios'

const Portfolio = () => {

    // hooks
    const [images, setImages] = useState([])

    useEffect (() => {
        axios.get('js/data.json')
        .then(response => {
            // console.log(response.data.portfolio)
            setImages(response.data.portfolio)
        })
    }, [])

    const portfolioImages = images.map((imageItem) => {
        return(
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })


    return(
   
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                
                {portfolioImages}

            </div>
            
        </PortfolioSection>
    )
}

export default Portfolio