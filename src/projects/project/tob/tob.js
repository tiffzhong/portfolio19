import React from "react";
import "../ProjectStyle.css";
const imgUrls = [
  "https://i.ibb.co/X8w459d/AaJlx6Z.jpg",
  "https://i.ibb.co/Mh7tDLq/cBSBUBv.jpg",
  "https://i.ibb.co/YkQqsZj/cVFddOC.png"
];

export default class TOBImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div style={{ flexDirection: "row" }} className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph={<i class="fas fa-chevron-left" />}
        />
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph={<i class="fas fa-chevron-right" />}
        />
      </div>
    );
  }
}

const Arrow = ({ direction, clickFunction, glyph }) => {
  const style = {
    justifyContent: "center",
    alignItems: "center",
    width: "35px"
  };
  return (
    <div
      className={`slide-arrow ${direction}`}
      onClick={clickFunction}
      style={style}
    >
      {glyph}
    </div>
  );
};

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`
  };
  return <div className="image-slide" style={styles} />;
};
