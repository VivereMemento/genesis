import React from "react";
import Slider from "react-slick";

import slide from './QueenOfGolf1.jpg';

class SimpleSlider extends React.Component {
	state = {
		slides: [slide, slide, slide]
	}
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
		};
		const { slides } = this. state;
    return (
			<React.Fragment>
				<Slider {...settings}>
					{
						slides.map( (slide, idx) => (
							<div key={idx}>
								<figure style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
									<img src={ slide } alt="slide"/>
									<figcaption style={{padding: '30px 0', textAlign: 'center', color: 'white'}}>
										Wangari has mastered the art of the perfect swing and she’s still in primary school! Those of you heading to the course should take a quick lesson from these amazing pictures of Wangari in action!
									</figcaption>
								</figure>
							</div>
						))
					}
				</Slider>
			</React.Fragment>
    );
  }
};

export default SimpleSlider;