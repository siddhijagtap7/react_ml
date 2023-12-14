import React, { useState } from 'react';
// import './mainpage.css';
import Papa from 'papaparse'; 

function InputBox() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    const passengerId = inputValue.trim(); // Trim any extra whitespace
  
    if (!passengerId) {
      setResult('Invalid Passenger ID');
      return;
    }
  
    Papa.parse('submission3.csv', {
      header: true,
      download: true,
      complete: function(results) {
        const data = results.data;
        console.log('Parsed Data:', data);

        if (data && data.length > 0) {
          const passenger = data.find(row => row.PassengerId === passengerId);
  
          if (passenger) {
            const survived = passenger.Survived;
            if (survived === '0') {
              setResult('Not Survived');
            } else {
              setResult('Survived');
            }
          } else {
            setResult('Passenger ID not found in the data');
          }
        } else {
          setResult('CSV data is empty or could not be loaded.');
        }
      },
      error: function(error) {
        setResult('Error loading or parsing the CSV file: ' + error.message);
      },
    });
  };
  
  

  

  return (
    <div className="container">
      <div className="input-box">
        <label htmlFor="inputField">Enter Passenger ID:</label>
        <input
          type="text"
          id="inputField"
          className="input-field"
          value={inputValue}
          onChange={handleInputChange}
        />

        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
      <div className="result">
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default InputBox;




// import React, { useState, useEffect } from 'react';
// import './mainpage.css';
// import Papa from 'papaparse';

// function InputBox() {
//   const [inputValue, setInputValue] = useState('');
//   const [result, setResult] = useState('');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     Papa.parse('submission.csv', {
//       header: true,
//       download: true,
//       complete: function (results) {
//         setData(results.data);
//       },
//     });
//   }, []);

//   const handleSubmit = () => {
//     const passengerId = parseInt(inputValue, 10);
//     const passenger = data.find((row) => row.PassengerId === passengerId);

//     if (passenger) {
//       const survived = parseInt(passenger.Survived, 10);
//       setResult(survived === 0 ? 'Not Survived' : 'Survived');
//     } else {
//       setResult('PassengerId not present in the data');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="input-box">
//         <label htmlFor="inputField">Enter passenger id:</label>
//         <input
//           type="text"
//           id="inputField"
//           className="input-field"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={handleSubmit} className="submit-button">
//           Submit
//         </button>
//       </div>
//       <div className="result">
//         {result && <p>{result}</p>}
//       </div>
//     </div>
//   );
// }

// export default InputBox;

// import React, { useState, useEffect } from 'react';
// import ExcelJS from 'exceljs';

// function ExcelTable() {
//   const [excelData, setExcelData] = useState([]);

//   useEffect(() => {
//     // Replace 'subexcel.xlsx' with the actual path to your Excel file
//     const file = 'subexcel.xlsx';

//     // Function to read Excel file and convert it to a table
//     const readExcel = async (file) => {
//       const workbook = new ExcelJS.Workbook();

//       try {
//         await workbook.xlsx.readFile(file);

//         const worksheet = workbook.getWorksheet(1); // Assuming data is in the first sheet
//         const data = [];

//         worksheet.eachRow((row) => {
//           data.push(row.values);
//         });

//         setExcelData(data);
//       } catch (error) {
//         console.error('Error reading Excel file', error);
//       }
//     };

//     // Call the readExcel function to read the Excel file
//     readExcel(file);
//   }, []);

//   return (
//     <div>
//       <h1>Passenger Data</h1>
//       {excelData.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               {excelData[0].map((header, index) => (
//                 <th key={index}>{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {excelData.slice(1).map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {row.map((cell, cellIndex) => (
//                   <td key={cellIndex}>{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data found in the Excel file.</p>
//       )}
//     </div>
//   );
// }

// export default ExcelTable;
