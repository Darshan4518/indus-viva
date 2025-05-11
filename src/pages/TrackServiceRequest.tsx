import NavigationHeroSection from "@/components/NavigationHeroSection";
import { SendIcon } from "lucide-react";

const TrackServiceRequest = () => {
  return (
    <section>
      <NavigationHeroSection
        title="Track Service Request"
        path="Track Service Request"
      />
      <div className="bg-[#eef7f6] flex flex-col items-center justify-center px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Track Service Request
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Your service request is registered. We are working on it for a quick
            solution.
            <br />
            Put your Service Request number in the box below to check the
            current status.
          </p>
        </div>

        <div className="bg-[#55c3a5] w-full max-w-5xl rounded-2xl p-20 flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="flex-1 text-white text-5xl font-semibold">
            Track <span className="font-bold ">Service.</span>
          </div>

          <div className="flex-1 flex items-center border-b border-white py-2 relative w-full">
            <input
              type="text"
              placeholder="Enter Your Service Request No*"
              className="bg-transparent w-full placeholder-white text-white focus:outline-none"
            />
            <SendIcon className="absolute right-2 text-white w-5 h-5" />
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackServiceRequest;
