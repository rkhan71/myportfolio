import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

function ProjectCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex= { index } onSelect={ handleSelect }>
      {images.map((slide, i) => {
        return (
          <Carousel.Item>
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default ProjectCarousel;
