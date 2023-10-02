import React from "react";
import image2 from "../../../public/image2.jpg";
import Image from "next/image";
const ImageCompo = () => {
  return (
    <div className="text-lg font-semibold text-orange-700">
      <h1>
        Image here is used here by import from file so the file doesn&apos;t
        need any width or height to render also you can use placeholder blur to
        load the image with blur. No need for a blured out image.
      </h1>
      <Image
        width={600}
        placeholder="blur"
        src={image2}
        alt="image of a woman"
      />
      <div>
        <h1>
          In here image is getting loaded direactly by url so you have to use
          width and height statically must to load the image. for placeholder
          blur use data blur property
        </h1>
        <Image
          width={600}
          blurDataURL="/blurImage.jpg"
          height={400}
          src={"/image2.jpg"}
          alt="image of a woman"
        />
      </div>
        
    </div>
  );
};

export default ImageCompo;
