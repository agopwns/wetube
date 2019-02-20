const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn")
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;

const handleVideoData = (event) => {
    console.log(event);
};

const startRecorindg = () => {
    console.log(streamObject);
    const videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.ondataavailabel = handleVideoData;
    videoRecorder.start();
    console.log(videoRecorder);
};

const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: { width: 1280, height: 720 }
      });
      videoPreview.srcObject = stream;
      videoPreview.muted = true;
      videoPreview.play();
      recordBtn.innerHTML = "Stop recording";
      streamObject = stream;
      startRecorindg();
    } catch (error) {
        recordBtn.innerHTML = "😂 Cant  record";
    } finally {
        recordBtn.removeEventListener("click", startRecording);
    }
};

function init(){
    recordBtn.addEventListener("click", startRecording);
    recordBtn.onclick = getVideo;
}

if (recorderContainer) {
    init();
}