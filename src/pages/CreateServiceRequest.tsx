import NavigationHeroSection from "@/components/NavigationHeroSection";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateServiceRequest = () => {
  return (
    <section>
      <NavigationHeroSection
        title="Create Service Request"
        path="Create Service Request"
      />
      <div className="bg-[#0e7f7614] flex items-center justify-center md:py-30 py-10 mx-auto">
        <div className="w-full max-w-6xl text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Create Service Request
          </h2>

          <div className="mb-6 text-left">
            <Label
              htmlFor="role"
              className="block text-xl font-bold text-[#006e6e] mb-2"
            >
              You are an{" "}
              <span className="font-bold text-[#006e6e]">IndusViva</span>{" "}
              ______?
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white py-5">
                <SelectValue placeholder="Default Sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default Sorting</SelectItem>
                <SelectItem value="lowToHigh">Low to High</SelectItem>
                <SelectItem value="highToLow">High to Low</SelectItem>
                <SelectItem value="newAdded">New Added</SelectItem>
                <SelectItem value="onSale">On Sale</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateServiceRequest;
