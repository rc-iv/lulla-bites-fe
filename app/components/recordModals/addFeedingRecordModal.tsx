import React, { useState } from "react";

interface addFeedingRecordModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (feedingRecord: FeedingRecord) => void;
}

export interface FeedingRecord {
  FeedType: string;
  FeedAmount: number;
  FeedNotes: string;
  DateTime: string;
}

const feedTypes = ["bottle", "breast", "solid", "formula"];
const defaultFeedType = "bottle";

const AddFeedingRecordModal = ({
  isVisible,
  onClose,
  onSubmit,
}: addFeedingRecordModalProps) => {
  const [feedType, setFeedType] = useState("bottle");
  const [feedAmount, setFeedAmount] = useState(0);
  const [feedNotes, setFeedNotes] = useState("");
  const [dateTime, setDateTime] = useState(new Date().toISOString());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const feedingRecord: FeedingRecord = {
      FeedType: feedType,
      FeedAmount: feedAmount,
      FeedNotes: feedNotes,
      DateTime: dateTime,
    };
    onSubmit(feedingRecord);
    onClose();
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
      <div className="bg-white w-full md:w-1/3 p-8 lg:p-20 rounded-md">
        <h2 className="text-lg font-bold mb-4">Add Feeding Record</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="feedType" className="block mb-2">
              Feed Type
            </label>
            <select
              id="feedType"
              value={feedType}
              onChange={(e) => setFeedType(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              {feedTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="feedAmount" className="block mb-2">
              Feed Amount (ounces)
            </label>
            <input
              type="number"
              id="feedAmount"
              value={feedAmount}
              onChange={(e) => setFeedAmount(parseInt(e.target.value))}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedNotes" className="block mb-2">
              Feed Notes
            </label>
            <input
              type="text"
              id="feedNotes"
              value={feedNotes}
              onChange={(e) => setFeedNotes(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateTime" className="block mb-2">
              Date and Time
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 mx-2 rounded"
            >
              Add Feeding Record
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeedingRecordModal;
