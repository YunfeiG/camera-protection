module.exports = function CameraProtection(dispatch) {
	
	dispatch.hook('S_START_ACTION_SCRIPT', 1 ,(event) => {
		console.log('**************');
		console.log('cid : '+event.cid);
		console.log('unk1 : '+event.unk1);
		console.log('unk2 : '+event.unk2);
		return false;
	});
};
