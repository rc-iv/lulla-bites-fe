import React from 'react';

interface RecordCardProps {
  title: string;
  onAddClick: () => void;
  children: React.ReactNode;
}

const RecordCard: React.FC<RecordCardProps> = ({ title, onAddClick, children }) => {
  return (
    <div className="bg-gradient-radial dark:from-jetstream-700 dark:to-jetstream-800 rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
      <div className="mt-4">
        <button onClick={onAddClick} className="dark:bg-graystel-700 dark:hover:bg-graystel-800 rounded-lg p-2">
          Add Record
        </button>
      </div>
    </div>
  );
};

export default RecordCard;
