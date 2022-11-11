var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	video.autoplay=false;
	console.log("Auto play is set to false")
	video.loop = false;
	console.log("Loop is set to false")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
 });
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
 });
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate-=0.1;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate+=0.1;
	console.log("Speed is " + video.playbackRate);

 });

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime+=10;
	if (video.currentTime>=video.duration){
		video.currentTime=0;
	}
	console.log("Video Current time is" + video.currentTime);
});


document.querySelector("#slider").addEventListener("click", function(vol) {
	video.volume = vol.currentTarget.value / 100;
	console.log("The current volume is: ", vol.currentTarget.value);
	document.querySelector("#volume").innerHTML=vol.currentTarget.value + "%";
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").textContent = 'Unmute';
		console.log("The video is now muted");
	}
	else{
		video.muted=false;
		document.querySelector('#mute').textContent = 'Mute';
		console.log("The video is now unmuted.")
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
