var section1 = {
    sectionID: "Section 1",
    students: [
       {
         studentNumber: 1001,
         firstName: "John",
         lastName: "Doe",
         middleInitial: "B",
         passOrFail: "Pass"
       },
       {
         studentNumber: 1002,
         firstName: "Jane",
         lastName: "Doe",
         middleInitial: "C",
         passOrFail: "Pass"
       },
       {
         studentNumber: 1003,
         firstName: "Michael",
         lastName: "Smith",
         middleInitial: "A",
         passOrFail: "Pass"
       },
       {
         studentNumber: 1004,
         firstName: "Emma",
         lastName: "Johnson",
         middleInitial: "D",
         passOrFail: "Pass"
       },
       {
         studentNumber: 1005,
         firstName: "William",
         lastName: "Wilson",
         middleInitial: "E",
         passOrFail: "Pass"
       }
    ]
   };
   
   var section2 = {
    sectionID: "Section 2",
    students: [
       {
         studentNumber: 1006,
         firstName: "Sophia",
         lastName: "Taylor",
         middleInitial: "F",
         passOrFail: "Pass"
       },
       {
         studentNumber: 1007,
         firstName: "Benjamin",
         lastName: "Davis",
         middleInitial: "G",
         passOrFail: "Pass"
       },
       {
         studentNumber: 1008,
         firstName: "Abigail",
         lastName: "Martinez",
         middleInitial: "H",
         passOrFail: "Pass"
       },
       {
         studentNumber: 1009,
         firstName: "Elijah",
         lastName: "Lee",
         middleInitial: "I",
         passOrFail: "Pass"
       },
       {
         studentNumber: 1010,
         firstName: "Isabella",
         lastName: "Brown",
         middleInitial: "J",
         passOrFail: "Pass"
       }
    ]
   };
   
   // And so on for section 3 to 5
   
   // Function to populate the tables
   function populateTables() {
    let section1Table = document.getElementById("section-2121");
     
    // Use a loop to populate section1Students data into the table
    for (let i = 0; i < section1Students.length; i++) {
       let row = section1Table.insertRow();
       let cell1 = row.insertCell();
       let cell2 = row.insertCell();
       let cell3 = row.insertCell();
       let cell4 = row.insertCell();
       let cell5 = row.insertCell();
       let cell6 = row.insertCell();
   
       cell1.innerHTML = section1Students[i].id;
       cell2.innerHTML = section1Students[i].firstName;
       cell3.innerHTML = section1Students[i].lastName;
       cell4.innerHTML = section1Students[i].middleInitial;
       cell5.innerHTML = section1Students[i].studentNumber;
       cell6.innerHTML = section1Students[i].passOrFail;
    }
   
    // Call the function for the remaining sections
   }
   
   // Call the function to populate the tables
   populateTables();