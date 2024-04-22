import React from 'react';
import { highLightPoint } from '../constants/high-light-point';
import Image from 'next/image';

interface HighLightPointPropsType {}

const HighLightPoint = ({}: HighLightPointPropsType) => {
  return (
    <section>
      <div className="flex justify-between items-center p-2">
        {highLightPoint.map((item) => (
          <div key={item.id} className="flex items-center gap-5">
            <div>
              <Image src={item.element} alt="icon" width={30} height={30} />
            </div>
            <div>
              <p className="font-bold">{item.title}</p>
              <p>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighLightPoint;
