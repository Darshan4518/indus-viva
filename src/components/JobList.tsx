

const jobs = [
  {
    title: "Administrative Assistant",
    level: "Junior",
  },
  {
    title: "Human Resources (HR)",
    level: "Senior",
  },
  {
    title: "IT & Technical Support",
    level: "System Administrator",
  },
  {
    title: "Marketing & Sales",
    level: "Sales Executive",
  },
];

export default function JobList() {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-sm flex items-center justify-between hover:shadow-md transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
              <p className="text-gray-600">{job.level}</p>
            </div>
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-md shadow">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
