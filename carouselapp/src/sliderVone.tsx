import React, { useEffect, useState } from 'react';

interface sliderList {
    id?:string;
    content?:string;
    imgUrl?:string;
    hyperBtn?:string;
}

interface sliders {
    sliderType?:string;
    sliderList: sliderList[];
    autoplay?:boolean;
    sliderInterval?:number;
  }

interface ChildProps {
    sliders:sliders;
}
const style = `
.imgUrl{max-width:100%;}
.bannerContainer {
    transform: translateX(100%);
    transition: all 0.3s linear;
}
.bannerContainer.carouselOn{transform:translateX(0)}
#bannerContainer{
width:100%;overflow:hidden;
}
`


const SliderVone: React.FC<ChildProps> = (sliders) =>{
    let initialLoad = 0;
    let sliderobj:sliders;
    let [sliderList,setSliderList] = useState<sliderList[]>([])
    useEffect(() =>{
        if(initialLoad == 0){
            sliderobj = sliders.sliders;
            sliderList = sliders.sliders.sliderList;
            setSliderList(sliders.sliders.sliderList);
            startSlider()
        }
    },[])
let sliderCount = 0;
const startSlider = () =>{
    console.log(sliderList.length);
    setTimeout(() =>{
    let sliderDiv = document.querySelectorAll(".bannerContainer");
    if(sliderDiv && sliderDiv.length > 0){
        let slider = sliderDiv[sliderCount];
        slider.classList.add("carouselOn");
    }
    },1000);
}
    
    return(
        <div>
            <div><style>{style}</style></div>
            <div id='bannerContainer'>
            {sliderList.map((item, index) => (
            <div key={index} className='bannerContainer'>
                <img className='imgUrl' src={item.imgUrl}></img>
                <div className='bannerContent'>{item.content}</div>
            </div>
            ))}
            </div>
        </div>
    )

}
export default SliderVone;