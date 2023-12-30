"use client";
import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/store";
import AddFeedingRecordModal from "../components/recordModals/addFeedingRecordModal";
import { FeedingRecord } from "../components/recordModals/addFeedingRecordModal";
import AddSleepRecordModal, {
  SleepRecord,
} from "../components/recordModals/addSleepRecordModal";
import RecordCard from "../components/records/recordCard";
import FeedingRecordCard from "../components/records/feedingRecord";

interface SleepRecordPayload {
  UserID: string;
  SleepStart: string;
  SleepEnd: string;
  Wakeups: number;
  SleepQuality: number;
  SleepNotes: string;
  DateTime: string;
}

export interface FeedRecordPayload {
  UserID: string;
  FeedType: string;
  FeedAmount: string;
  FeedNotes: string;
  DateTime: string;
}

const Dashboard = () => {
  const [isAddFeedingRecordModalVisible, setIsAddFeedingRecordModalVisible] =
    useState<boolean>(false);
  const [isAddSleepRecordModalVisible, setIsAddSleepRecordModalVisible] =
    useState<boolean>(false);
  const user = useAppSelector((state) => state.user);
  const userId = user.userId;

  const [feedingRecords, setFeedingRecords] = useState([]);

  const openAddFeedingRecordModal = () => {
    setIsAddFeedingRecordModalVisible(true);
  };

  const closeAddFeedingRecordModal = () => {
    setIsAddFeedingRecordModalVisible(false);
  };

  const openAddSleepRecordModal = () => {
    setIsAddSleepRecordModalVisible(true);
  };

  const closeAddSleepRecordModal = () => {
    setIsAddSleepRecordModalVisible(false);
  };

  const addFeedingRecord = async (feedingRecord: FeedingRecord) => {
    const payload: FeedRecordPayload = {
      UserID: userId,
      FeedType: feedingRecord.FeedType,
      FeedAmount: feedingRecord.FeedAmount,
      FeedNotes: feedingRecord.FeedNotes,
      DateTime: feedingRecord.DateTime,
    };

    console.log(JSON.stringify(payload));
    const addFeedingRecordUrl =
      "https://ml5d6fgpi8.execute-api.us-east-1.amazonaws.com/dev/addFeedingRecord";
    const addRecord = async () => {
      const response = await fetch(addFeedingRecordUrl, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      console.log(`response: ${response.status}`);
      const data = await response.json();
      console.log(`data: ${JSON.stringify(data)}`);
    };
    addRecord();
  };

  const addSleepRecord = async (sleepRecord: SleepRecord) => {
    const payload: SleepRecordPayload = {
      UserID: userId,
      SleepStart: sleepRecord.SleepStart,
      SleepEnd: sleepRecord.SleepEnd,
      Wakeups: sleepRecord.Wakeups,
      SleepQuality: sleepRecord.SleepQuality,
      SleepNotes: sleepRecord.SleepNotes,
      DateTime: sleepRecord.DateTime,
    };

    const addSleepRecordUrl =
      "https://ml5d6fgpi8.execute-api.us-east-1.amazonaws.com/dev/addSleepRecord";
    const addRecord = async () => {
      const response = await fetch(addSleepRecordUrl, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      console.log(`response: ${response.status}`);
      const data = await response.json();
      console.log(`data: ${JSON.stringify(data)}`);
    };
    addRecord();
  };



  useEffect(() => {
    // Function to fetch feeding records
    const fetchFeedingRecords = async () => {
      const apiUrl = 'https://ml5d6fgpi8.execute-api.us-east-1.amazonaws.com/dev/getFeedingRecordByDate';
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify({
            UserID: userId,
            Date: new Date().toISOString().split('T')[0] // Fetch records for the current date
          }),
        });
        const data = await response.json();
        setFeedingRecords(data.Items || []);
      } catch (error) {
        console.error('Error fetching feeding records:', error);
      }
    };

    fetchFeedingRecords();
  }, [userId]);

  return (
    <div className="h-screen">
      {user.isLoggedIn && (
        <div className="flex h-full">
          <div className="flex-none w-1/4 p-4 dark:bg-gradient-radial dark:from-graystel-800 dark:to-graystel-900">
            <h2 className="text-center text-xl">User Info Panel</h2>
            <p>UserName: {user.userId}</p>
          </div>
          <div className="flex-grow p-4">
            <div className="mb-8">
              <RecordCard
                title="Feeding Records"
                onAddClick={openAddFeedingRecordModal}
              >
                {feedingRecords.map((record:FeedRecordPayload) => (
                  <FeedingRecordCard record={record} />
                ))}
              </RecordCard>
            </div>
            <div>
              <RecordCard
                title="Sleeping Records"
                onAddClick={openAddSleepRecordModal}
              >
                Test 345
              </RecordCard>
            </div>
          </div>
        </div>
      )}
      <AddFeedingRecordModal
        isVisible={isAddFeedingRecordModalVisible}
        onClose={closeAddFeedingRecordModal}
        onSubmit={addFeedingRecord}
      />
      <AddSleepRecordModal
        isVisible={isAddSleepRecordModalVisible}
        onClose={closeAddSleepRecordModal}
        onSubmit={addSleepRecord}
      />
    </div>
  );
};

export default Dashboard;
