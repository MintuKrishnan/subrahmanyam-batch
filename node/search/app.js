function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
let html = `<tr class="header">
                <th style="width: 60%">First Name</th>
                <th style="width: 40%">Last Name</th>
            </tr>`;

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => {
//     let array = [];
//     data.forEach((el) => {
//       array.push(el.name);
//     });
//     return array;
//   })
//   .then((array) => {
//     array.forEach((el) => {
//       html += `
//     <tr>
//         <td>${el.split(' ')[0]}</td>
//         <td>${el.split(' ')[1]}</td>
//     </tr>
//         `;
//     });
//     document.getElementById('myTable').innerHTML = html;
//   });

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((array) => {
    array.forEach((el) => {
      html += `
    <tr>
        <td>${el.name.split(' ')[0]}</td>
        <td>${el.name.split(' ')[1]}</td>
    </tr>
        `;
    });
    document.getElementById('myTable').innerHTML = html;
  })
  .catch((e) => {
    console.log(e.message);
  });
