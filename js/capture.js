let width = 564,
    height= 0,
    streaming = false

const video = document.getElementById('video'),
        btnCapture = document.getElementById('capture')

navigator.mediaDevices.getUserMedia({video: true, audio: false})
.then((stream) => {
    video.srcObject = stream
    video.play()
})
.catch(err => {
    console.log(`Error ${err}`)
})

video.addEventListener('canplay', (e) => {
    if(!streaming){
        // height = video.videoHeight / (video.videoWidth  / width)
        // video.setAttribute('width', width)
        // video.setAttribute('height', height)
        console.log(video.videoWidth)
        streaming = true

    }
}, false)