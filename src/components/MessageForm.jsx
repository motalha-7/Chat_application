import { useState } from 'react';
import { SendOutlined, PictureOutlined , AudioOutlined, StopOutlined} from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import { ReactMic } from 'react-mic';
import './MessageForm.css';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onStop = (recordedBlob) => {
    const audioFile = new File([recordedBlob.blob], "audioMessage.wav", { type: "audio/wav" });
    sendMessage(creds, chatId, { files: [audioFile], text: '' });
  };


  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />


      {/* Audio Recording Button */}
      <button type="button" className="audio-button" onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? <StopOutlined className="stop-icon" /> : <AudioOutlined className="audio-icon" />}
      </button>

      {/* Audio Recorder */}
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onStop}
        mimeType="audio/wav"
        strokeColor="#000000"
        // backgroundColor="#fff8fa"
        echoCancellation={true} 
      />


      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;