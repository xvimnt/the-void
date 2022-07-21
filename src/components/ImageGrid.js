import React from "react";
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.png';

const ImageGrid = () => {
    return (
        <>
            <div className="container max-w-8xl mx-auto">
                
                <div className="flex flex-wrap">
                    
                    <div className="md:w-2/6 sm:w-full p-8">
                        <img alt='first-img' src={img1} className="mx-auto h-80 w-full" />
                    </div>
                    <div className="md:w-2/6 sm:w-full p-8">
                        <img alt='first-img' src={img1} className="mx-auto h-80 w-full" />
                    </div>
                    <div className="md:w-2/6 sm:w-full p-8">
                        <img alt='first-img' src={img2} className="mx-auto h-80 w-full" />
                    </div>
                </div>
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div className="md:w-2/6 sm:w-1/2 p-8">
                        <img alt='first-img' src={img2} className="mx-auto h-80 w-full" />
                    </div>
                    <div className="md:w-2/6 sm:w-1/2 p-8">
                        <img alt='first-img' src={img1} className="mx-auto h-80 w-full" />
                    </div>
                    <div className="md:w-2/6 sm:w-1/2 p-8">
                        <img alt='first-img' src={img1} className="mx-auto h-80 w-full" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageGrid