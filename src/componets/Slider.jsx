import React, {useState} from 'react';
import './Slider.less'
import ImgComp from "./compArr/ImgComp";
import i1 from "./compArr/pics/1.jpeg"
import i2 from "./compArr/pics/2.jpeg"
import i3 from "./compArr/pics/3.jpeg"
import i4 from "./compArr/pics/4.jpeg"
import i5 from "./compArr/pics/5.jpeg"

const Slider = () => {

    let sliderArr = [
        <ImgComp src={i1} text="Gravity Falls"/>,
        <ImgComp src={i2} text="Awesome waterfall"/>,
        <ImgComp src={i3} text="It's Dipper"/>,
        <ImgComp src={i4} text="Rain"/>,
        <ImgComp src={i5} text="The end"/>
    ];
    const [x, setX] = useState(0)
    const [touchstart, settouch] = useState(0)
    const goLeft = () => {
        (x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100));
    };
    const goRight = () => {
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
    };

    function rasn(a) {
        let temp = touchstart;
        let r = (a - temp) / 10;
        if(a!==temp){
            console.log(a, temp);
            if(r< 0){
                (x === -100 * (sliderArr.length-1)) ? setX(0) : setX(x - 100);
            }
            else{

                (x === 0 ? setX(-100 * (sliderArr.length-1)) : setX(x + 100))
            }
        }
    }


    return (
        <div className="slider"  onMouseDown={(e)=>settouch(e.nativeEvent.offsetX)} onMouseUp={(e)=>rasn(e.nativeEvent.offsetX)}>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }


            <button className="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left"/>
            </button>
            <button className="goRight" onClick={goRight}>
                <i className="fas fa-chevron-right"/>
            </button>

        </div>
    );
};

export default Slider;
