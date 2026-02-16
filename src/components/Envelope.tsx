import { useState } from 'react';

interface EnvelopeProps {
  id: number;
  children: React.ReactNode; 
}

const Envelope: React.FC<EnvelopeProps> = ({ children }) => {
  const [isFolded, setIsFolded] = useState(true);
  const toggleFold = () => setIsFolded(!isFolded);

  return (
    <div
      className={`envelope w-[270px] mx-auto my-[150px] mb-[40px] h-[170px] relative bg-pink-200 cursor-pointer shadow-md shadow-red-400 ${
        isFolded ? 'fold' : ''
      }`}
      onClick={toggleFold}
    >
      <div className="top"></div>
      <div className="left"></div>
      <div className="back">
        <div className="w-11/12 h-[90%] bg-yellow-50 mt-1.5 mx-auto mb-0 shadow-md transition-all duration-300 ease-out absolute left-2/4 -translate-x-1/2 rounded flex flex-col p-5 box-border text-2xl text-center font-serif">
          {children}
        </div>
      </div>
      <div className="right"></div>
      <div className="bottom"></div>
    </div>
  );
};

export default Envelope;
