import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {
  render() {
    const images = [
      {
        original: "/img/photos/original/a.png",
        thumbnail: "/img/photos/thumb/a.png",
      },
      {
        original: "/img/photos/original/b.png",
        thumbnail: "/img/photos/thumb/b.png",
      },
      {
        original: "/img/photos/original/c.png",
        thumbnail: "/img/photos/thumb/c.png",
      },
      {
        original: "/img/photos/original/d.png",
        thumbnail: "/img/photos/thumb/d.png",
      },
      {
        original: "/img/photos/original/e.png",
        thumbnail: "/img/photos/thumb/e.png",
      },
      {
        original: "/img/photos/original/f.png",
        thumbnail: "/img/photos/thumb/f.png",
      },
      {
        original: "/img/photos/original/g.png",
        thumbnail: "/img/photos/thumb/g.png",
      },
      {
        original: "/img/photos/original/h.png",
        thumbnail: "/img/photos/thumb/h.png",
      },
      {
        original: "/img/photos/original/i.png",
        thumbnail: "/img/photos/thumb/i.png",
      },
      {
        original: "/img/photos/original/j.png",
        thumbnail: "/img/photos/thumb/j.png",
      },
      {
        original: "/img/photos/original/k.png",
        thumbnail: "/img/photos/thumb/k.png",
      },
      {
        original: "/img/photos/original/l.png",
        thumbnail: "/img/photos/thumb/l.png",
      },
      {
        original: "/img/photos/original/m.png",
        thumbnail: "/img/photos/thumb/m.png",
      },
      {
        original: "/img/photos/original/n.png",
        thumbnail: "/img/photos/thumb/n.png",
      },
    ];
    return <ImageGallery items={images} autoPlay={true} />;
  }
}
