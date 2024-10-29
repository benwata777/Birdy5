"use client";
import { FC } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Slot: FC<{ status: string }> = ({ status }) => {
  let colorClass;

  if (status === "available") {
    colorClass = "bg-green-500";
  } else if (status === "inUse") {
    colorClass = "bg-yellow-500";
  } else if (status === "reserved") {
    colorClass = "bg-red-500";
  } else {
    colorClass = "bg-gray-300"; // default color if status is unknown
  }

  return <div className={`w-5 h-5 rounded-md ${colorClass}`}></div>;
};

const countSlots = (
  slots: string[]
): { availableCount: number; inUseCount: number; reservedCount: number } => {
  let availableCount = 0;
  let inUseCount = 0;
  let reservedCount = 0;

  slots.forEach((status) => {
    if (status === "available") {
      availableCount++;
    } else if (status === "inUse") {
      inUseCount++;
    } else if (status === "reserved") {
      reservedCount++;
    }
  });

  return { availableCount, inUseCount, reservedCount };
};

const LaneStatus: FC = () => {
  const topLaneSlots = new Array(43).fill(null).map((_, index) => {
    // สุ่มสถานะค่อยแก้จาก server ทีหลัง
    return index % 3 === 0
      ? "inUse"
      : index % 4 === 0
      ? "reserved"
      : "available";
  });

  const bottomLaneSlots = new Array(43).fill(null).map((_, index) => {
    // สุ่มสถานะค่อยแก้จาก server ทีหลัง
    return index % 3 === 0
      ? "inUse"
      : index % 4 === 0
      ? "reserved"
      : "available";
  });

  const {
    availableCount: topAvailable,
    inUseCount: topInUse,
    reservedCount: topReserved,
  } = countSlots(topLaneSlots);
  const {
    availableCount: bottomAvailable,
    inUseCount: bottomInUse,
    reservedCount: bottomReserved,
  } = countSlots(bottomLaneSlots);

  const totalAvailable = topAvailable + bottomAvailable;
  const totalInUse = topInUse + bottomInUse;
  const totalReserved = topReserved + bottomReserved;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <Navbar />
      <div className="w-full max-w-lg p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg text-center mt-4">
        <h1 className="text-2xl font-bold mb-4">สถานะเลน</h1>

        <div className="flex items-center justify-between border p-4 rounded-md mb-4">
          <div className="w-1/2">
            <Image
              src="/home-bg.png"
              alt="Golf Image"
              width={150}
              height={100}
              className="rounded-md"
            />
          </div>
          <div className="text-lg font-semibold">
            <div>
              ว่าง{" "}
              <span className="text-green-500 text-2xl">{totalAvailable}</span>{" "}
              เลน
            </div>
            <div>
              ใช้งานอยู่{" "}
              <span className="text-yellow-500 text-lg">{totalInUse}</span> เลน
            </div>
            <div>
              ติดจอง{" "}
              <span className="text-red-500 text-lg">{totalReserved}</span> เลน
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium mb-2">ชั้นบน</div>
          <div className="flex gap-1 justify-center mb-4">
            {topLaneSlots.map((status, index) => (
              <Slot key={`top-${index}`} status={status} />
            ))}
          </div>

          <div className="text-sm font-medium mb-2">ชั้นล่าง</div>
          <div className="flex gap-1 justify-center">
            {bottomLaneSlots.map((status, index) => (
              <Slot key={`bottom-${index}`} status={status} />
            ))}
          </div>
        </div>

        <div className="text-xs text-red-600 border border-red-600 p-2 rounded-md mt-4">
          *หากสนใจสามารถติดต่อได้ โดยการ walk-in มาที่สนามของเรา
        </div>
      </div>
    </div>
  );
};

export default LaneStatus;
