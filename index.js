module.exports = function CameraProtection(dispatch) {
	dispatch.hook('S_START_ACTION_SCRIPT', 1 ,(event) => {
		return false;
	});
};
