import React from "react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="grid grid-cols-4 gap-1 max-w-xl">
      {/* Large left image - spans 2 columns */}
      <div className="col-span-2 row-span-2">
        <Image
          src="/Daniel2.jpg"
          alt="Daniel George"
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>
      <div>
        <Image
          src="/Daniel4.jpg"
          alt="Daniel George 2"
          width={150}
          height={95}
          className="w-full h-full object-cover "
        />
      </div>
      {/* Top right image */}
      <div>
        <Image
          src="/Daniel.png"
          alt="Daniel George 2"
          width={150}
          height={95}
          className="w-full h-full object-cover rounded-tr-2xl"
        />
      </div>

      {/* Bottom right image */}
      <div className="relative col-span-2">
        <Image
          src="/Daniel3.JPG"
          alt="Daniel George 3"
          width={150}
          height={95}
          className="w-full h-full object-cover rounded-br-2xl"
        />
      </div>
    </div>
  );
};

export default ImageSection;
