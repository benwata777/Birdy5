// app/components/LaneStatus.tsx
type Lane = {
  id: number;
  status: "available" | "booked" | "in-use";
};

// สร้างเลน 60 ตัว (30 เลนต่อชั้น)
const lanes: Lane[] = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  status: index % 3 === 0 ? "available" : index % 3 === 1 ? "in-use" : "booked",
}));

const LaneStatus: React.FC = () => {
  // แยกเลนออกเป็นชั้นบนและชั้นล่าง
  const upperLaneStatus = lanes.slice(0, 30);
  const lowerLaneStatus = lanes.slice(30, 60);

  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">Lane Status</h2>

      {/* ชั้นบน */}
      <h3 className="text-xl mb-2">Upper Level</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        {upperLaneStatus.map((lane) => (
          <div
            key={lane.id}
            className={`p-4 rounded shadow-lg ${
              lane.status === "available"
                ? "bg-green-200"
                : lane.status === "booked"
                ? "bg-red-200"
                : "bg-yellow-200"
            }`}
          >
            <p>Lane {lane.id}</p>
            <p>Status: {lane.status}</p>
          </div>
        ))}
      </div>

      {/* ชั้นล่าง */}
      <h3 className="text-xl mb-2">Lower Level</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {lowerLaneStatus.map((lane) => (
          <div
            key={lane.id}
            className={`p-4 rounded shadow-lg ${
              lane.status === "available"
                ? "bg-green-200"
                : lane.status === "booked"
                ? "bg-red-200"
                : "bg-yellow-200"
            }`}
          >
            <p>Lane {lane.id}</p>
            <p>Status: {lane.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaneStatus;
