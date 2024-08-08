# React Chat Application with Chat Engine

This is a real-time chat application built using React and Chat Engine. The application supports community creation, sending messages, sharing images, and audio recordings.
![Chat Application Screenshot](https://your-image-link.com)

## Features

- **Community Creation:** Users can create and join chat communities.
- **Real-Time Messaging:** Exchange messages in real-time with other users.
- **Image Sharing:** Upload and share images within the chat.
- **Audio Sharing:** Record and share audio messages.
- **User Authentication:** Secure authentication for users to join communities.
- **Typing Indicator:** See when other users are typing.
- **Read Receipts:** View read receipts on messages.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/chat-application.git
   cd chat-application


## Install dependencies:

Ensure you have Node.js and npm installed, then run:

bash
Copy code
npm install
Set up Chat Engine:

# Go to Chat Engine and create a project.

  Copy the Project ID and Private Key from the project dashboard.

  Create a .env file in the root directory of the project and add the following:

bash
Copy code
REACT_APP_CHAT_ENGINE_PROJECT_ID=your-project-id
REACT_APP_CHAT_ENGINE_PRIVATE_KEY=your-private-key
Start the application:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

## Usage
- **1. Community Creation:** 
Users can create new communities (chat rooms) by clicking on the "Create Community" button.
Communities can be public or private, with options to invite other users.
- **2. Sending Messages**
Users can send real-time text messages to other members of the community.
Messages appear instantly in the chat window.
- **3. Image Sharing**
Users can upload images by clicking on the image icon in the message input area.
Supported file formats: JPG, PNG, GIF.
- **4. Audio Sharing**
Users can record audio messages directly within the chat by clicking the microphone icon.
Once recorded, the audio file can be sent like a regular message.
- **5. Typing Indicator & Read Receipts**
The application shows when a user is typing, indicated by a "typing..." message.
Read receipts are visible on each message to show who has viewed it.
Dependencies
React: A JavaScript library for building user interfaces.
Chat Engine: A chat platform that handles real-time messaging, image sharing, and community management.
react-mic: A component for recording and saving audio.
Ant Design Icons: Provides icons used in the chat interface.
Contributing
Contributions are welcome! Please open an issue or submit a pull request with your ideas and improvements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Special thanks to the creators of Chat Engine for providing a robust chat solution.
Inspired by the community-driven approach to real-time messaging.
