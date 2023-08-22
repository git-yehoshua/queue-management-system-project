import React, { useState } from 'react';
import axios from 'axios';

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Video uploaded:', response.data.url);
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    }
  };

  return (
    <div>
      <h1>Video Upload</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {selectedFile && (
        <video width="400" controls>
          <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
          Your browser does not support the video tag.
        </video>
      )}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default VideoUpload;
