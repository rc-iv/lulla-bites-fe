import React from 'react';
import {FeedRecordPayload} from '../../dashboard/page';


interface FeedingRecordCardProps {
  record: FeedRecordPayload;
}

const FeedingRecordCard: React.FC<FeedingRecordCardProps> = ({ record }) => {
  return (
    <div className="p-4 border rounded-lg mb-2">
      <p>Type: {record.FeedType}</p>
      <p>Amount: {record.FeedAmount}</p>
      <p>Notes: {record.FeedNotes}</p>
      <p>Date: {new Date(record.DateTime).toLocaleString()}</p>
    </div>
  );
}

export default FeedingRecordCard;
