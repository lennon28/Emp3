import React, { useState } from 'react';
import { utils, writeFile } from 'xlsx';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const downloadExcel = () => {
    if (selectedFile) {
      const workbook = utils.book_new();
      const worksheetData = [
        ['Employee code', 'IMEI No1', 'IMEI No2'],
        // Add data rows here if needed
      ];
      const worksheet = utils.aoa_to_sheet(worksheetData);
      utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
      writeFile(workbook, 'employees.xlsx');
    }
  };

  return (
    <div>
      <label htmlFor="fileInput">Choose a file:</label>
      <input
        type="file"
        id="fileInput"
        accept=".txt,.pdf,.doc"
        onChange={handleFileChange}
      />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <button onClick={downloadExcel} disabled={!selectedFile}>
        Download Excel
      </button>
    </div>
  );
}

export default FileUploader;
