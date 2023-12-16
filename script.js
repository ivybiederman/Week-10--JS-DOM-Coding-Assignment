/*
  This JavaScript file adds functionality to the single-page website.
  It dynamically adds new rows to the Bootstrap-styled table when the form is submitted.
*/

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dataForm');
    const tableBody = document.getElementById('tableBody');
    let rowNumber = 1;
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get input values from the form
      const dataInput1 = document.getElementById('dataInput1').value;
      const dataInput2 = document.getElementById('dataInput2').value;
  
      // Add a new row to the table with input values
      const newRow = `
        <tr>
          <th scope="row">${rowNumber}</th>
          <td>${dataInput1}</td>
          <td>${dataInput2}</td>
        </tr>
      `;
      tableBody.insertAdjacentHTML('beforeend', newRow);
  
      // Increment row number for the next entry
      rowNumber++;
  
      // Reset form fields after submitting
      form.reset();
    });
  });
  