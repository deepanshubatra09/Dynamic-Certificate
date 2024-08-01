import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    duration: '',
    location: '',
    compensation: '',
    schedule: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const input = document.getElementById('certificate');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('certificate.pdf');
      });
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Certificate Generator</h1>
        <form>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <input type="text" name="position" placeholder="Position" onChange={handleChange} />
          <input type="text" name="duration" placeholder="Duration" onChange={handleChange} />
          <input type="text" name="location" placeholder="Location" onChange={handleChange} />
          <input type="text" name="compensation" placeholder="Compensation" onChange={handleChange} />
          <input type="text" name="schedule" placeholder="Work Schedule" onChange={handleChange} />
        </form>
      </div>

      <div className="certificate-container" id="certificate">
        <div className="certificate-content">
          <div className='Name'><p>`{formData.name}</p></div>
          <div className='Info'>
          <p>Position     : {formData.position}</p>
          <p>Duration     : {formData.duration}</p>
          <p>Location     : {formData.location}</p>
          <p>Compensation : {formData.compensation}</p>
          <p>Work Schedule: {formData.schedule}</p>
          </div>
          </div>
      </div>

      <button onClick={generatePDF}>Download Certificate</button>
    </div>
  );
};

export default App;