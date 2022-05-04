const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const AcademicMember = require('./models/AcademicMember');
const HR = require('./models/HR');
const AcademicMemberTracking = require('./models/AcademicMemberTracking');
const AcademicMemberLeaveRequest = require('./models/AcademicMemberLeaveRequest');
const HRTracking = require('./models/HRTracking');

require('dotenv').config({
  path: path.join(__dirname, './.env'),
});
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.DATABASE_URL;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(URL, connectionParams)
  .then(() => {
    console.log('Connected to the Database successfully');
  })
  .catch((err) => console.error('error connecting to the database :/', err));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log('Server is listening on Port:', PORT);
});

exports.scheduling = async (req, res, next) => {
  const allAcademicMembers = await AcademicMember.find({});

  for (let i = 0; i < allAcademicMembers.length; i++) {
    const academicMemberId = allAcademicMembers[i].uniId;
    const academicMember = AcademicMember.findOne({ uniId: academicMemberId });
    const attendanceRecords = await AcademicMemberTracking.find({ academicMemberId }).sort({ createdAt: 'asc' });

    let currentDate = new Date();

    currentDate.setDate(currentDate.getDate());

    let daysAttendance = [];

    for (let j = 0; j < attendanceRecords.length; j++) {
      recordsOfADay = attendanceRecords.filter((e) => {
        return e.createdAt.getDate() === j;
      });
      daysAttendance(records);
    }

    let isCheckIn = true;
    let missingDays = 0;
    let missingHours = 0;
    let extraHours = 0;

    let timeSoFar = 0;
    let lastCheckInDate = null;
    let lastCheckOutDate = null;

    let lastCheckIn = false;
    let lastDate = null;

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    for (let j = 0; j < daysAttendance.length; j++) {
      for (let k = 0; k < daysAttendance[j].length; k++) {
        lastDate = daysAttendance[j][k].createdAt;
        isCheckIn = element.trackingType === 'in';
        if (isCheckIn && !lastCheckIn) {
          lastCheckInDate = lastDate;
          lastCheckIn = true;
        } else if (!isCheckIn && lastCheckIn) {
          lastCheckOutDate = lastDate;
          if (lastCheckInDate.getHours() >= 7 && lastCheckOutDate.getHours() <= 19) {
            timeSoFar = (lastCheckOutDate - lastCheckInDate) / 36e5;
          } else if (lastCheckInDate.getHours() < 7 && lastCheckOutDate.getHours() <= 19) {
            let sinceSeven = new Date(
              lastCheckInDate.getFullYear(),
              lastCheckInDate.getMonth(),
              lastCheckIn.getDate(),
              7
            );
            timeSoFar = (lastCheckOutDate - sinceSeven) / 36e5;
          } else if (lastCheckInDate.getHours() >= 7 && lastCheckOutDate.getHours() > 19) {
            let tillSeven = new Date(
              lastCheckInDate.getFullYear(),
              lastCheckInDate.getMonth(),
              lastCheckIn.getDate(),
              19
            );
            timeSoFar += (tillSeven - lastCheckInDate) / 36e5;
          } else if (lastCheckInDate.getHours() < 7 && lastCheckOutDate.getHours() > 19) {
            timeSoFar += 12;
          }
          lastCheckIn = true;
        }
      }

      if (timeSoFar === 0) {
        if (days[lastDate.getDay()] !== academicMember.dayOff) {
          let requests = await AcademicMemberLeaveRequest.find({ academicMemberId, status: 'accepted' });

          let filteredRequests = requests.filter((e) => {
            return (
              e.requestedDate.getDate() === lastDate.getDate() &&
              e.requestedDate.getMonth() === lastDate.getMonth() &&
              e.requestedDate.getFullYear() === lastDate.getFullYear()
            );
          });

          if (filteredRequests.length === 0) {
            missingDays++;
          }
        }
      } else if (timeSoFar < 8.24) {
        missingHours += 8.24 - timeSoFar;
      } else if (timeSoFar > 8.24) {
        extraHours += timeSoFar - 8.24;
      }
      lastCheckIn = false;
      timeSoFar = 0;
    }
    if (extraHours > missingHours) {
      extraHours = extraHours - missingHours;
    } else if (extraHours < missingHours) {
      missingHours = missingHours - extraHours;
    } else {
      extraHours = 0;
      missingHours = 0;
    }

    academicMember.missingHours = missingHours;
    academicMember.missingDays = missingDays;
    academicMember.extraHours = extraHours;
    await academicMember.save();
  }

  const allHRs = await HR.find({});

  for (let i = 0; i < allHRs.length; i++) {
    const hrId = allHRs[i].uniId;
    const hr = HR.findOne({ uniId: hrId });
    const attendanceRecords = await HRTracking.find({ hrId }).sort({ createdAt: 'asc' });

    let currentDate = new Date();

    currentDate.setDate(currentDate.getDate());

    let daysAttendance = [];

    for (let j = 0; j < attendanceRecords.length; j++) {
      recordsOfADay = attendanceRecords.filter((e) => {
        return e.createdAt.getDate() === j;
      });
      daysAttendance(records);
    }

    let isCheckIn = true;
    let missingDays = 0;
    let missingHours = 0;
    let extraHours = 0;

    let timeSoFar = 0;
    let lastCheckInDate = null;
    let lastCheckOutDate = null;

    let lastCheckIn = false;
    let lastDate = null;

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    for (let j = 0; j < daysAttendance.length; j++) {
      for (let k = 0; k < daysAttendance[j].length; k++) {
        lastDate = daysAttendance[j][k].createdAt;
        isCheckIn = element.trackingType === 'in';
        if (isCheckIn && !lastCheckIn) {
          lastCheckInDate = lastDate;
          lastCheckIn = true;
        } else if (!isCheckIn && lastCheckIn) {
          lastCheckOutDate = lastDate;
          if (lastCheckInDate.getHours() >= 7 && lastCheckOutDate.getHours() <= 19) {
            timeSoFar = (lastCheckOutDate - lastCheckInDate) / 36e5;
          } else if (lastCheckInDate.getHours() < 7 && lastCheckOutDate.getHours() <= 19) {
            let sinceSeven = new Date(
              lastCheckInDate.getFullYear(),
              lastCheckInDate.getMonth(),
              lastCheckIn.getDate(),
              7
            );
            timeSoFar = (lastCheckOutDate - sinceSeven) / 36e5;
          } else if (lastCheckInDate.getHours() >= 7 && lastCheckOutDate.getHours() > 19) {
            let tillSeven = new Date(
              lastCheckInDate.getFullYear(),
              lastCheckInDate.getMonth(),
              lastCheckIn.getDate(),
              19
            );
            timeSoFar += (tillSeven - lastCheckInDate) / 36e5;
          } else if (lastCheckInDate.getHours() < 7 && lastCheckOutDate.getHours() > 19) {
            timeSoFar += 12;
          }
          lastCheckIn = true;
        }
      }

      if (timeSoFar === 0) {
        if (days[lastDate.getDay()] !== academicMember.dayOff) {
          missingDays++;
        }
      } else if (timeSoFar < 8.24) {
        missingHours += 8.24 - timeSoFar;
      } else if (timeSoFar > 8.24) {
        extraHours += timeSoFar - 8.24;
      }
      lastCheckIn = false;
      timeSoFar = 0;
    }
    if (extraHours > missingHours) {
      extraHours = extraHours - missingHours;
    } else if (extraHours < missingHours) {
      missingHours = missingHours - extraHours;
    } else {
      extraHours = 0;
      missingHours = 0;
    }

    hr.missingHours = missingHours;
    hr.missingDays = missingDays;
    hr.extraHours = extraHours;
    await hr.save();
  }
};
