import React, { useState } from "react";

interface addFeedingRecordModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (feedingRecord: FeedingRecord) => void;
}

export interface FeedingRecord {
  FeedType: string;
  FeedAmount: string;
  FeedNotes: string;
  DateTime: string;
}

const formatDateForInput = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");
  const hours = `${now.getHours()}`.padStart(2, "0");
  const minutes = `${now.getMinutes()}`.padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const feedTypes = ["Bottle", "Breast", "Solid", "Formula"];

const AddFeedingRecordModal = ({
  isVisible,
  onClose,
  onSubmit,
}: addFeedingRecordModalProps) => {
  const [feedType, setFeedType] = useState("Bottle");
  const [feedAmount, setFeedAmount] = useState("");
  const [feedNotes, setFeedNotes] = useState("");
  const [dateTime, setDateTime] = useState(formatDateForInput());

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

  const renderFeedAmountInput = () => {
    switch (feedType) {
      case "Bottle":
      case "Formula":
        return (
          <div className="mb-4">
            <label htmlFor="feedAmount" className="block mb-2">
              Ounces Fed
            </label>
            <input
              type="number"
              id="feedAmount"
              placeholder="Amount in ounces"
              value={feedAmount}
              onChange={(e) => setFeedAmount(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        );
      case "Breast":
        return (
          <div className="mb-4">
            <label htmlFor="feedAmount" className="block mb-2">
              Time Fed
            </label>
            <input
              type="number"
              id="feedAmount"
              placeholder="Time feeding (minutes)"
              value={feedAmount}
              onChange={(e) => setFeedAmount(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        );
      case "Solid":
        return (
          <div className="mb-4">
            <label htmlFor="feedAmount" className="block mb-2">
              Type of Solid Food
            </label>
            <input
              type="text"
              id="feedAmount"
              placeholder="Type of solid food"
              value={feedAmount}
              onChange={(e) => setFeedAmount(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        );
      default:
        return null;
    }
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
          {renderFeedAmountInput()}
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
