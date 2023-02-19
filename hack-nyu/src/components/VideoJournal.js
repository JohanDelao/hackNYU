import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { UserAuth } from "../context/GoogleAuth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default function VideoJournal() {
  const { user } = UserAuth();
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${month}-${day}-${year}`;

  const storage = getStorage();
  const storageRef = ref(storage, currentDate + " " + user?.displayName);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleSave = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, blob).then((snapshot) => {
        alert("Submission uploaded!");
      });
      //   const url = URL.createObjectURL(blob);
      //   const a = document.createElement("a");
      //   document.body.appendChild(a);
      //   a.style = "display: none";
      //   a.href = url;
      //   a.download = "react-webcam-stream-capture.webm";
      //   a.click();
      //   window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  return (
    <div className="Container">
      <Webcam
        height={400}
        width={500}
        audio={true}
        muted={true}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />
      {capturing ? (
        <button onClick={handleStopCaptureClick} className="recordBtn">Stop Recording</button>
      ) : (
        <button onClick={handleStartCaptureClick} className="recordBtn">Start Recording</button>
      )}
      {recordedChunks.length > 0 && <button onClick={handleSave} className="logoutBtn">Save</button>}
    </div>
  );
}
