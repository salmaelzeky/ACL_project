# ACL Project

## Project Setup

- The file needed to run the project is `index.js`. To setup and run the project run the commands:

```bash

npm install

npm start

```

The server is running at **port 3000**

## Routes

### /user

- Functionality: HR adds a user to the system
- Route: /user
- Request type: POST
- Request body:

```JSON
{
    "email":"",
    "name":"",
    "gender":"",
    "officeId":"",
    "facultyId":"",
    "departmentId":"",
    "salary"
}
```

Note: to create another user, simply add `"role":"hr"` to the request body above

### /login

- Functionality: log in user in the system
- Route: /login
- Request type: POST
- Request body:

```JSON
{
    "email":"",
   "password:""
}
```

### /logout

- Functionality: log out user out of the system
- Route: /logout
- Request type: POST

### /hr/:hrId

- Functionality: logged in HR gets their profile info
- Route: /hr/:hrId
- Request type: GET
- Parameters: hrId is the logged-in user's ID ( must have the HR role set)
- example: /hr/hr-1

### /academicMember/:academicMemberId

- Functionality: logged in HR can delete another academic user's account
- Route: /academicMember/:academicMemberId
- Request type: DELETE
- Parameters: academicMemberId is the ID of the user's account to be deleted.
- example: /academicMember/ac-1 (while user with id hr-2 is logged-in)

### /resetPassword

- Functionality: reset the user's password by sending the user a new password in the response
- Route: /resetPassword
- Request type: POST

### /checkIn

- Functionality: Check In user
- Route: /checkIn
- Request type: POST

### /checkOut

- Functionality: Check Out user
- Route: /checkOut
- Request type: POST

### /getMissingHoursAM

- Functionality: get the number of missing hours for an academic member
- Route:/getMissingHoursAM
- Request type: GET

### /getMissingHoursHR

- Functionality: get the number of missing hours for an HR
- Route:/getMissingHoursHR
- Request type: GET

### /getExtraHoursAM

- Functionality: get the number of extra hours for an academic member
- Route:/getExtraHoursAM
- Request type: GET

### /getExtraHoursHR

- Functionality: get the number of missing hours for an HR
- Route:/getExtraHoursHR
- Request type: GET

### /getAttendanceRecordsAM

- Functionality: get the number of attendance records of an academic member
- Route:/getExtraHoursHR
- Request type: GET

### /getAttendanceRecordsHR

- Functionality: get the number of attendance records for an HR
- Route:/getExtraHoursHR
- Request type: GET

### /getAttendanceRecordsAMByHR/:academicMemberId

- Functionality: get the number of missing hours for an HR
- Route:/getAttendanceRecordsAMByHR/:academicMemberId
- Request type: GET
- parameters: academicMemberId is the id of an academic member
- example: /getAttendanceRecordsAMByHR/ac-1

### /getAttendanceRecordsHRByHR/:academicMemberId

- Functionality: get the number of missing hours for an HR, by HR
- Route:/getAttendanceRecordsAMByHR/:academicMemberId
- Request type: GET
- parameters: academicMemberId is the id of an academic member
- example: /getAttendanceRecordsAMByHR/ac-1

### /checkInHR/:hrId

- Functionality: check in HR for another HR
- Route:/checkInHR/:hrId
- Request type: POST
- parameters: hrId is the id of an HR
- example: /checkInHR/hr-1
- Request body:

```JSON
{
    "date":"3 12 2020"
}
```

Note: the date is in MM-DD-YYYY

### /checkOutHR/:hrId

- Functionality: check out HR by another HR
- Route:/checkInHR/:hrId
- Request type: POST
- parameters: hrId is the id of another HR
- example: /checkOutHR/hr-1
- Request body:

```JSON
{
    "date":"3 12 2020"
}
```

Note: the date is in MM-DD-YYYY

### checkInAM/:academicMemberId

- Functionality: check in academic Member by another academic
- Route: /checkInAM/:academicMemberId
- Request type: POST
- parameters: academicMemberId is the id of an academic member
- example: /checkOutHR/hr-1
- Request body:

```JSON
{
    "date":"3 12 2020"
}
```

Note: the date is in MM-DD-YYYY

### checkOutAM/:academicMemberId

- Functionality: check out academic Member by another academic
- Route:/checkOutAM/:academicMemberId
- Request type: POST
- parameters: academicMemberId is the id of an academic member
- example: /checkOutAM/ac-1
- Request body:

```JSON
{
    "date":"3 12 2020"
}
```

Note: the date is in MM-DD-YYYY

### /staffWithMissingAttendance

- Functionality: get staff with missing attendance
- Route:/getExtraHoursHR
- Request type: GET

### /addLocation

- Functionality: add location to the system
- Route: /addLocation
- Request type: POST
- Request body:

```JSON
{
    "name":"",
    "type":"",
    "fullCapacity":"",
}
```

### Update /location/:locationId

- Functionality: update location
- Route: /location/:locationId
- Request type: PUT
- parameters: id of the location we're going to update
- Request body:

```JSON
{
    "name":"",
    "type":"",
    "fullCapacity":"",
    "currentCapacity":""
}
```

### Delete /location/:locationId

- Functionality: delete location
- Route: /location/:locationId
- Request type: DELETE
- parameters: id of the location we're going to delete

### /addFaculty/

- Functionality: adds faculty
- Route: /addFaculty/
- Request type: POST
- Request body:

```JSON

{
    "name":"Medicine"
}
```

### Update /faculty/:facultyId

- Functionality: update faculty
- Route: /faculty/:facultyId
- Request type: POST
- parameters: id of the faculty for which we'll update the name
- Request body:

```JSON
{
    "name":"Dentistry"
}
```

### Delete /faculty/:facultyId

- Functionality: delete faculty
- Route: /faculty/:facultyId
- Request type: DELETE
- parameters: id of the faculty we're going to delete

<!-- add department -->

### /addDepartment

- Functionality: adds department
- Route: /addDepartment
- Request type: POST
- Request body:

```JSON
{
    "name":"Dentistry",
    "facultyId":""
}
```

<!-- update department -->

### update /department/:departmentId

- Functionality: update department
- Route: /department/:departmentId
- Request type: PUT
- Request body:

```JSON
{
    "name":"Dentistry",
    "facultyId":""
}
```

### delete /department/:departmentId

- Functionality: delete department
- Route: /department/:departmentId
- Request type: DELETE
- parameters: id of the department we want to delete

### /viewStaffInADepartmentByCI

- Functionality: course instructor views the staff's department
- Route:/viewStaffInADepartmentByCI
- Request type: GET

### /viewStaffInADepartmentByHOD

- Functionality: Head Of department views the staff's department
- Route:/viewStaffInADepartmentByCI
- Request type: GET

### /viewDayOffInADepartmentByHOD

- Functionality: Head Of department views the staff's day off department
- Route:/viewStaffInADepartmentByCI
- Request type: GET

### /addCourse

- Functionality: adds course
- Route: /addCourse
- Request type: POST
- Request body:

```JSON
{
"name":"Software Engineering",
"departmentId":""
}
```

### update /course/:courseId

- Functionality: update course
- Route: /course/:courseId
- Request type: PUT
- parameters: courseId is the id of the course we want to update
- Request body:

```JSON
{
    "name":"",
    "departmentId":""
}
```

### delete /course/:courseId

- Functionality: delete course
- Route: /course/:courseId
- Request type: DELETE
- parameters: id of the course we want to delete

### /getCourseCoverage

- Functionality: get course coverage ( assigned slots/available slots)
- Route:/getCourseCoverage
- Request type: GET

### viewStaffInACourseByCI

- Functionality: Course instructor views staff in a course
- Route:/getCourseCoverage
- Request type: GET

### /assignCourseCoordinator

- Functionality: assign Course Coordinator. must be done by course Instructor
- Route: /assignCourseCoordinator
- Request type: POST
- Request body:

```JSON
{
    "academicMemberId":"",
    "courseId":""
}
```

### /assignCourseToAM

- Functionality: assign Course to academic member
- Route: /assignCourseToAM
- Request type: POST
- Request body:

```JSON
{
    "academicMemberId":"",
    "courseId":""
}
```

### /deleteCourseAM

- Functionality: remove academic member from course
- Route: /assignCourseToAM
- Request type: POST
- Request body:

```JSON
{
    "academicMemberId":"",
    "courseId":""
}
```

### /getAllCoursesCoverageInDepartment

- Functionality: get course coverage ( assigned slots/available slots) for all courses
- Route:/getCourseCoverage
- Request type: GET

### /assignCourseInstructor

- Functionality: assign course Instructor by Head of department
- Route: /assignCourseToAM
- Request type: POST
- Request body:

```JSON
{
    "academicMemberId":"",
    "courseId":""
}
```

### /deleteCourseInstructor

- Functionality: delete course instructor from the course
- Route: /deleteCourseInstructor
- Request type: POST
- Request body:

```JSON
{
    "academicMemberId":"",
    "courseId":""
}
```

### /viewStaffInACourseByHOD

- Functionality: View staff in course. Can be called by head of department
- Route: /viewStaffInACourseByHOD
- Request type: POST
- Request body:

```JSON
{
    "courseId":""
}
```

### /getSchedule

- Functionality: get Schedule for an academic member. Contains substitute tutorials
- Route:/getSchedule
- Request type: GET

### /sendChangeDayOffRequest

- Functionality: send request to change the day off
- Route: /sendChangeDayOffRequest
- Request type: POST
- Request body:

```JSON
{
    "dayOff":"tuesday"
}
```

Note: dayOff is an enum, can be ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']

### /viewChangeDayOffRequests

- Functionality: send request to change the day off
- Route: /viewChangeDayOffRequests
- Request type: POST
- Request body:

```JSON
{
    "status":"tuesday"
}
```

Note: status can either be ['pending','accepted', 'rejected']

### /cancelChangeDayOffRequest/:changeDayOffRequestId

- Functionality: send the request to change the day off
- Route: /cancelChangeDayOffRequest/:changeDayOffRequestId
- Request type: POST
- parameters: changeDayOffRequestId is the id of the change request
- example: /cancelChangeDayOffRequest/:changeDayOffRequestId

### /viewChangeDayOffRequestsByHOD

- Functionality: display all incoming requests for a Head Of Department
- Route:/viewChangeDayOffRequestsByHOD
- Request type: GET

### /acceptChangeDayOffRequestsByHOD/:changeDayOffRequestId

- Functionality: accept incoming request to change the day off by Head of Department
- Route: /acceptChangeDayOffRequestsByHOD/:changeDayOffRequestId
- parameters: changeDayOffRequestId is the id of the change request
- example: /acceptChangeDayOffRequestsByHOD/:changeDayOffRequestId
- Request type: POST

### /rejectChangeDayOffRequestsByHOD/:changeDayOffRequestId

- Functionality: reject incoming request to change the day off by Head of Department
- Route: /acceptChangeDayOffRequestsByHOD/:changeDayOffRequestId
- parameters: changeDayOffRequestId is the id of the change request
- example: /rejectChangeDayOffRequestsByHOD/:changeDayOffRequestId
- Request type: POST

### /sendLeaveRequest

- Functionality: send request for a leave request
- Route: /viewChangeDayOffRequests
- Request type: POST
- Request body:

```JSON
{
    "type":"annual",
    "date":""
}
```

Note: type of a leave can be one of the following values ['annual', 'accidental', 'sick', 'maternity', 'compensation']
Date is the in the format of MM DD YYYY

### /viewLeaveRequests

- Functionality: view leave requests by an academic member
- Route: /viewChangeDayOffRequests
- Request type: POST
- Request body:

```JSON
{
    "status":""
}
```

### /cancelLeaveRequest/:leaveRequestId

- Functionality: cancel a leave request after sending it
- Route: /cancelLeaveRequest/:leaveRequestId
- Request type: POST
- parameters: leaveRequestId is the id of the leave request

### /acceptLeaveRequestByHOD/:leaveRequestId

- Functionality: accept a leave request as a head of department
- Route: /cancelLeaveRequest/:leaveRequestId
- Request type: POST
- parameters: leaveRequestId is the id of the leave request

### /rejectLeaveRequestByHOD/:leaveRequestId

- Functionality: reject a leave request as a head of department
- Route: /cancelLeaveRequest/:leaveRequestId
- Request type: POST
- parameters: leaveRequestId is the id of the leave request

### /viewLeaveRequestsByHOD

- Functionality: display all leave requests for a logged in HOD
- Route:/viewChangeDayOffRequestsByHOD
- Request type: GET

### /sendSlotLinkingRequest

<!-- Send slot linking requests -->

- Functionality: Send slot linking requests
- Route: /sendSlotLinkingRequest
- Request type: POST

<!-- View slot linking requests -->

### /viewSlotLinkingRequests

- Functionality: View slot linking requests
- Route: /viewSlotLinkingRequests
- Request type: POST

<!-- Cancel slot linking requests -->

### /cancelSlotLinkingRequest/:slotLinkingRequestId

- Functionality: Cancel slot linking requests
- Route: /cancelSlotLinkingRequest/:slotLinkingRequestId
- Request type: POST
- parameters: id of the slot linking request

### /viewSlotLinkingRequestsByCoordinator

<!-- View slot linking requests by coordinator -->

- Functionality: View slot linking requests by coordinator
- Route: /viewSlotLinkingRequestsByCoordinator
- Request type: POST

### /acceptSlotLinkingRequest/:slotLinkingRequestId

<!-- Accept slot linking requests by coordinator -->

- Functionality: Accept slot linking requests by coordinator
- Route: /acceptSlotLinkingRequest/:slotLinkingRequestId
- Request type: POST

### /rejectSlotLinkingRequest/:slotLinkingRequestId

<!-- Reject slot linking requests by coordinator -->

- Functionality: Accept slot linking requests by coordinator
- Route: /rejectSlotLinkingRequest/:slotLinkingRequestId
- Request type: POST
- parameters: id of the slot linking request

### /viewReplacementRequests

<!-- View replacement requests -->

- Functionality: View replacement requests
- Route: /viewReplacementRequests
- Request type: POST

### /sendReplacementRequest

<!-- Send replacement requests -->

- Functionality: Send replacement requests
- Route: /sendReplacementRequest
- Request type: POST

### /cancelReplacementRequest/:replacementRequestId

<!-- Cancel replacement requests -->

- Functionality: Cancel replacement requests
- Route: /cancelReplacementRequest/:replacementRequestId
- Request type: POST
- parameters: id of replacement request

### /acceptReplacementRequest/:replacementRequestId

<!-- Accept replacement requests -->

- Functionality: Cancel replacement requests
- Route: /acceptReplacementRequest/:replacementRequestId
- Request type: POST
- parameters: id of replacement request

### /rejectReplacementRequest/:replacementRequestId

<!-- Reject replacement requests -->

- Functionality: Cancel replacement requests
- Route: /rejectReplacementRequest/:replacementRequestId
- Request type: POST
- parameters: id of replacement request

### /addSlot

<!-- add slot  -->

- Functionality: add slot
- Route:/addSlot
- Request type: POST
- Request body:

```JSON
{
    "day":"",
    "number":"",
    "locationId":""
}
```

### /slot/:slotId update

<!-- update slot -->

- Functionality: update slot
- Route: /slot/:slotId
- Request type: PUT
- parameters: slotId is the id of the course we want to update
- Request body:

```JSON
{
    "day":"",
    "number":"",
    "locationId":""
}
```

### /slot/:slotId delete

<!-- delete  -->

- Functionality: delete slot
- Route: /slot/:slotId
- Request type: DELETE
- parameters: id of the slot we want to delete

### /viewSlotsInACourseByCI

<!-- view slot in a course by CO  -->

- Functionality: view slot in a course by Course Coordinator
- Route:/viewSlotsInACourseByCI
- Request type: POST

### /viewSlotsInACourseByHOD

<!-- view slot in a course by HOD  -->

- Functionality: view slot in a course by HOD
- Route:/viewSlotsInACourseByHOD
- Request type: POST

### /assignSlotToAM

<!-- assign Slot To AM  -->

- Functionality: assign slot to academic member
- Route:/assignSlotToAM
- Request type: POST
- Request body:

```JSON
{
    "academicMemberId":"",
    "slotId":""
}
```
