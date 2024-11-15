import './App.css'

function App() {

return (
  <div className="flex flex-col">
  {/* Header Section: Our Love Story */}
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
</div>
);
}
export default App;
