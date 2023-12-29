import React, { useState } from "react";

interface addSleepRecordModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (sleepingRecord: SleepRecord) => void;
}

export interface SleepRecord {
  SleepStart: string;
  SleepEnd: string;
  Wakeups: number;
  SleepQuality: number;
  SleepNotes: string;
  DateTime: string;
}

const formatDateForInput = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, '0');
  const day = `${now.getDate()}`.padStart(2, '0');
  const hours = `${now.getHours()}`.padStart(2, '0');
  const minutes = `${now.getMinutes()}`.padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const AddSleepRecordModal = ({
  isVisible,
  onClose,
  onSubmit,
}: addSleepRecordModalProps) => {
  const [sleepStart, setSleepStart] = useState("");
  const [sleepEnd, setSleepEnd] = useState("");
  const [wakeups, setWakeups] = useState(0);
  const [sleepQuality, setSleepQuality] = useState(0);
  const [sleepNotes, setSleepNotes] = useState("");
  const [dateTime, setDateTime] = useState(formatDateForInput());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sleepRecord: SleepRecord = {
      SleepStart: sleepStart,
      SleepEnd: sleepEnd,
      Wakeups: wakeups,
      SleepQuality: sleepQuality,
      SleepNotes: sleepNotes,
      DateTime: dateTime,
    };
    onSubmit(sleepRecord);
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
            <label htmlFor="sleepStart" className="block mb-2">
              Sleep Start
            </label>
            <input
              type="datetime-local"
              id="sleepStart"
              value={sleepStart}
              onChange={(e) => setSleepStart(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sleepEnd" className="block mb-2">
              Sleep End
            </label>
            <input
              type="datetime-local"
              id="sleepEnd"
              value={sleepEnd}
              onChange={(e) => setSleepEnd(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="wakeups" className="block mb-2">
              Wakeups
            </label>
            <input
              type="number"
              id="wakeups"
              value={wakeups}
              onChange={(e) => setWakeups(parseInt(e.target.value))}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sleepQuality" className="block mb-2">
              Sleep Quality
            </label>
            <input
              type="number"
              id="sleepQuality"
              value={sleepQuality}
              onChange={(e) => setSleepQuality(parseInt(e.target.value))}
              className="w-full p-2 border rounded"
              required
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
              Add Sleep Record
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

export default AddSleepRecordModal;
