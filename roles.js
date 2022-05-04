const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant('hr')
    .createAny('faculty')
    .createAny('department')
    .createAny('course')
    .createAny('location')
    .updateAny('faculty')
    .updateAny('department')
    .updateAny('course')
    .updateAny('location', ['*', '!name'])
    .deleteAny('faculty')
    .deleteAny('department')
    .deleteAny('course')
    .deleteAny('location')
    .createAny('check')
    .readAny('attendance');
  ac.grant('basic');
  ac.grant('hod');
  ac.grant('ci');
  ac.grant('co');

  return ac;
})();
