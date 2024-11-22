import './App.css'
import audiomusic from './assets/bg.mp3'
import React, {useRef,useState, useEffect } from 'react';

function BackgroundAudio(props) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset to the beginning

    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <audio ref={audioRef} src={props.audioSrc} />
  );
}


function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);
  const audioRef = useRef(null);

  const handleYes = () => {
    setIsAudioPlaying(true);
  };

  const handleNo = () => {
    setIsBlackAndWhite(true);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      const audio = audioRef.current;
      audio.loop = true;
      audio.play();
    }
  }, [isAudioPlaying]);
return (      
<div>
  {/* Header Section: Our Love Story */}
  
  <BackgroundAudio/>
  <div className="bg-[#c98dc0] h-[90vw] md:h-[40vh] flex items-center justify-center text-4xl md:text-5xl text-[#fffefb] font-bold">
    <h1>Our Love Story</h1>
    
  </div>

  {/* Subheader Section: Will You Be Mine? */}
  <div className="bg-[#b38cb7] h-[50vw] md:h-[35vh] text-3xl flex flex-col items-center justify-center p-4 shadow-lg text-[#fffbfe] my-0.9">
    <span className="text-center">Will you Be Mine?</span>
    <p className="text-center mt-2 text-lg md:text-xl">
      A journey of love, memories, and a proposal that will last forever
    </p>
  </div>

  {/* Journey Section */}
  <div className="flex flex-col items-center justify-center text-center h-auto px-4 py-6 mt-20">
    <h1 className="text-[#9379a0] text-4xl md:text-5xl">Our Journey</h1>
    <p className="text-[#726e73] w-full md:w-[60vw] mt-4 text-lg md:text-xl">
      From the very first moment our eyes met, we knew something special was in the air. We've laughed, cried, and made countless memories together. This website is our way of sharing our love story, our adventures, and the beautiful future we are ready to build. Forever starts now.
    </p>
  </div>

  {/* Proposal Section */}
  <div className="flex flex-col items-center justify-center text-center h-auto px-4 py-6">
    <h1 className="text-[#9379a0] text-4xl md:text-5xl font-semibold">THE PROPOSAL</h1>
    <p className="text-[#726e73] w-full md:w-[60vw] mt-4 text-lg md:text-xl">
      As we stand here today, I can't imagine my life without you. You are my heart, my soul, and my everything. So, I ask you: Will you marry me, and spend forever with me?
    </p>
  </div>
  <div className='flex flex-col items-center justify-center text-center h-auto px-4 py-6 bg-[#f5e1f4]'>
    <h1 className=' text-3xl text-[#9c7a9d]'>Would you accept my proposal</h1>

         
          <AcceptingProposal/>
    
       
  </div>
</div>
);
}


function AcceptingProposal() {
  const [showProposal, setShowProposal] = useState(true);

  const handleResponse = (response) => {
    if (response === 'No') {
      // Repeat the proposal
      <div>
        Ek tarfaa pyar bhot dard deta hai 🥹
      </div>
      setShowProposal(true);
    } else {
      // Stop the proposal
      handleYesResponse();
      setShowProposal(false);
    }
  };

  const handleYesResponse = () => {
    const whatsappNumber = '+918168251855'; // Replace with the actual Indian number
    const message = 'I accept your love!';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  };

  return (
    <div className="bg-pink-100 p-8 rounded-lg">
      {showProposal && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-600">Will you accept my love?</h2>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleResponse('Yes')}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
              onClick={() => handleResponse('No')}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}




export default App;
