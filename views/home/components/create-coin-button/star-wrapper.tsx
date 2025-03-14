import { Div } from '@stylin.js/elements';
import { FC } from 'react';

const StarContainer: FC = () => {
  return (
    <>
      <Div
        top="20%"
        left="20%"
        zIndex={-5}
        height="auto"
        width="1.563rem"
        className="star1"
        position="absolute"
        filter="drop-shadow(0 0 0 #fffdef)"
        transition="all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96)"
      >
        <img src="./first-star.svg" alt="first start" />
      </Div>
      <Div
        top="45%"
        left="45%"
        zIndex={-5}
        height="auto"
        width="0.938rem"
        className="star2"
        position="absolute"
        filter="drop-shadow(0 0 0 #fffdef)"
        transition="all 1s cubic-bezier(0, 0.4, 0, 1.01)"
      >
        <img src="./second-star.svg" alt="second start" />
      </Div>
      <Div
        top="40%"
        left="40%"
        zIndex={-5}
        height="auto"
        width="0.313rem"
        className="star3"
        position="absolute"
        filter="drop-shadow(0 0 0 #fffdef)"
        transition="all 1s cubic-bezier(0, 0.4, 0, 1.01)"
      >
        <img src="./third-star.svg" alt="third start" />
      </Div>
      <Div
        top="20%"
        left="40%"
        zIndex={-5}
        height="auto"
        width="0.5rem"
        className="star4"
        position="absolute"
        filter="drop-shadow(0 0 0 #fffdef)"
        transition="all .8s cubic-bezier(0, 0.4, 0, 1.01)"
      >
        <img src="./fourth-star.svg" alt="fourth start" />
      </Div>
      <Div
        top="25%"
        left="45%"
        zIndex={-5}
        height="auto"
        width="0.938rem"
        className="star5"
        position="absolute"
        filter="drop-shadow(0 0 0 #fffdef)"
        transition="all .6s cubic-bezier(0, 0.4, 0, 1.01)"
      >
        <img src="./fiveth-star.svg" alt="fiveth start" />
      </Div>
      <Div
        top="5%"
        left="50%"
        zIndex={-5}
        height="auto"
        width="0.5rem"
        className="star6"
        position="absolute"
        transition="all .8s ease"
        filter="drop-shadow(0 0 0 #fffdef)"
      >
        <img src="./sixth-star.svg" alt="sixth start" />
      </Div>
    </>
  );
};

export default StarContainer;
