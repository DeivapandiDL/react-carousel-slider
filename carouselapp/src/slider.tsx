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

const Slider: React.FC<ChildProps> = (sliders) =>{
    let sliderobj:sliders;
    let initialLoad = 0;
    let [currentSliderGrid,setCurrentSliderGrid] = useState<sliderList>({});
    let [sliderGrid,setSliderGrid] = useState<sliderList>({})
    let sliderCount = 0;
    useEffect(() =>{
        if(initialLoad == 0){ 
    sliderobj = sliders.sliders;
    if(sliderobj.sliderList && sliderobj.sliderList.length > 0){
        setCurrentSliderGrid(sliderobj.sliderList[sliderCount]);
        // sliderCount = sliderCount + 1;
        startSlider();
    }
    initialLoad = initialLoad + 1;
        }
    },[])

    
    let interval:any;
    const startSlider = () =>{
        interval = setInterval(() =>{
            if(sliderCount < sliderobj.sliderList.length){
                setCurrentSliderGrid(sliderobj.sliderList[sliderCount]);
                sliderCount = sliderCount + 1;
            }
            else{
                sliderCount = 0;
                setCurrentSliderGrid(sliderobj.sliderList[sliderCount]);
            }
        },sliderobj.sliderInterval);
    }

const pauseInterval = () => {
    clearInterval(interval)
}

    

return (
    currentSliderGrid && currentSliderGrid.id != '' ?
    <div className='sliderGrid' onMouseOver={pauseInterval}>
        {currentSliderGrid.content}
    </div>
: 
<></>
)
}

export default Slider;
