// O(nlog(n)) time
function mergeRanges(meetings){
  const numMeetings = meetings.length;
  let meetingRange = null;
  
  if (numMeetings < 2) return meetings;  
  
  return meetings.slice().sort((a, b) => {
    return a.startTime - b.startTime;
  })
  .reduce((mergedMeetings, currentMeeting, index) => {
    if (index === 0) {
      meetingRange = resetMeetingRange(currentMeeting);
    } else {
      if (currentMeeting.startTime <= meetingRange.endTime) {
        meetingRange.endTime = Math.max(currentMeeting.endTime, meetingRange.endTime);
        if (index === numMeetings - 1) mergedMeetings.push(meetingRange);
      } else {
        mergedMeetings.push(meetingRange);
        meetingRange = resetMeetingRange(currentMeeting);
      }
    }
    
    return mergedMeetings;
    
  }, []);
}

function resetMeetingRange(meeting) {
  if (!meeting) return null;
  return {startTime: meeting.startTime, endTime: meeting.endTime};
}

// test cases

var meetings1 = [
    {startTime: 0,  endTime: 1},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
];

var meetings2 = [{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}];

var meetings3 = [{startTime: 1, endTime: 2}, {startTime: 1, endTime: 2}]

var meetings4 = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}];

var meetings5 = [{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}];

var meetings6 = [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
];

mergeRanges(meetings6);
