import NavigationHeroSection from "@/components/NavigationHeroSection";
import { FileText } from "lucide-react";

const documents = [
  {
    title: "NON-GMO",
    image: "https://magicads.ae/indus-viva/assets/img/blog/blog-post-01.jpg",
    pdf: "https://magicads.ae/indus-viva/assets/img/new/pdf/NON-GMO-25.pdf",
  },
  {
    title: "Coffee Board Registration",
    image: "https://magicads.ae/indus-viva/assets/img/blog/blog-post-01.jpg",
    pdf: "https://magicads.ae/indus-viva/assets/img/new/pdf/NON-GMO-25.pdf",
  },
  {
    title: "Certified Compensation Plan",
    image: "https://magicads.ae/indus-viva/assets/img/blog/blog-post-01.jpg",
    pdf: "https://magicads.ae/indus-viva/assets/img/new/pdf/NON-GMO-25.pdf",
  },
  {
    title: "Certificate of Incorporation",
    image: "https://magicads.ae/indus-viva/assets/img/blog/blog-post-01.jpg",
    pdf: "https://magicads.ae/indus-viva/assets/img/new/pdf/NON-GMO-25.pdf",
  },
];

export default function ComplianceSection() {
  return (
    <section className=" bg-white">
      <NavigationHeroSection
        title="Compliance Documents"
        path="Compliance Documents"
      />
      <div className="container mx-auto px-4 max-w-7xl text-center py-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Compliance Documents
        </h2>
        <p className="text-gray-600 mt-2 mb-10">
          Building Confidence Through Compliance
          <br />
          senectus cursus vivamus volutpat penatibus
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-md flex flex-col"
            >
              <img
                src={doc.image}
                alt={doc.title}
                className="w-full object-cover h-50"
              />
              <div className="bg-teal-700 text-white p-4 flex flex-col flex-1 justify-between">
                <h3 className="text-lg font-medium mb-4">{doc.title}</h3>
                <a
                  href={doc.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 transition"
                >
                  View <FileText className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
