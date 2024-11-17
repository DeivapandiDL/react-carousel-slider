import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './slider';
import SliderVone from './sliderVone';

interface sliderList {
  id?:string,
  content?:string,
  imgUrl?:string,
  hyperBtn?:string

}


function App() {

  const sliderList = [
    {id:'slider1',content:"First Content",imgUrl:"https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg",hyperBtn:""},
    {id:'slider2',content:"Second Content",imgUrl:"https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg",hyperBtn:""},
    // {id:'slider3',content:"Third Content",imgUrl:"https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg",hyperBtn:""},
    // {id:'slider4',content:"Fourth Content",imgUrl:"https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg",hyperBtn:""},
    // {id:'slider5',content:"Fifth Content",imgUrl:"https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg",hyperBtn:""},
  ]

  const sliders = {sliderType:'carousel',sliderList:sliderList,sliderInterval:3000,autoplay:true}

  return (
    <div className="App">
      {/* <Slider sliders={sliders}/> */}
      <SliderVone sliders={sliders}></SliderVone>
    </div>
  );
}

export default App;
