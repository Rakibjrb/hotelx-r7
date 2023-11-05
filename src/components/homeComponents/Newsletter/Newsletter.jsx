import newsLetter from "../../../assets/icons/newsLetter.svg";

const Newsletter = () => {
  return (
    <div className="bg-red-400">
      <div className="max-w-6xl mx-auto px-3 xl:px-0 mb-24 py-14">
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-0">
          <div className="flex-[2]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl mb-5 text-white">
                Subcribe our newsletter
              </h2>
              <div className="flex justify-center">
                <div className="w-24 h-[6px] bg-gray-300 rounded-xl"></div>
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-white text-center xl:text-left">
              Get the Hottest News Delivered to Your Inbox
            </h2>
            <form className="flex justify-center py-8">
              <div className="flex items-center">
                <input
                  className="py-2 px-3 text-xl rounded-l-lg"
                  type="email"
                  placeholder="Enter your name"
                />
                <button className="py-[10px] px-5 bg-gray-300 hover:bg-white transition-colors rounded-r-lg uppercase">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center">
            <img src={newsLetter} alt="newsletter image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
