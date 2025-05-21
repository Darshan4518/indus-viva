import { ArrowUpRight, Clock, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import cc from "@/assets/img/new/CC.png";

const WeAreHelp = () => {
  return (
    <section className="bg-[#eff9f8]   grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className=" space-y-6 mx-auto w-full flex flex-col items-center justify-center md:max-w-md p-3 ">
        <p className="text-sm text-teal-700 font-medium flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-teal-600" /> GET SERVICE NOW
        </p>

        <h2 className="text-4xl font-bold text-gray-900">
          We are here to help you
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <PhoneCall className="text-teal-600 mt-1" />
            <div>
              <p className="font-semibold text-teal-700">
                Indusviva Customer Care Number
              </p>
              <p className="text-gray-800">18001034916</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="text-teal-600 mt-1" />
            <div>
              <p className="font-semibold text-teal-700">Working Hours</p>
              <p className="text-gray-800">
                Monday to Friday – 09:30 AM to 06:00 PM <br />
                Saturday – 09:30 AM to 01:30 PM
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-xs">
          For any assistance please speak to our customer care executive or
          create a service request. Please note down the service request to
          track the status.
        </p>

        <div className="flex flex-wrap gap-4">
         <Link to="/service-request">
          <Button  className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-6  flex items-center gap-2 ">
            Create Service Request <ArrowUpRight size={16} />
          </Button>
         </Link>
          <Link to="/track-service">
          <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-6 flex items-center gap-2">
            Track Service Request <ArrowUpRight size={16} />
          </Button>
          </Link>
        </div>
      </div>
      <div className="block">
        <img
          src={cc}
          alt="We Are Help"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default WeAreHelp;
