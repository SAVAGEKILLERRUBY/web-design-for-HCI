const studentData=[];

const fnames=['Alice', 'Bob', 'Charlie', 'David', 'Ella', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
const lname=['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Davis', 'Garcia', 'Rodriguez', 'Martinez', 'Miller'];
const midI=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];


for(let i=0;i<50;i++){


    const fnames=fnames[Math.floor(Math.random()*fnames.length)];
    const lname=lname[Math.floor(Math.random()*lname.length)];
    const midI=midI[Math.floor(Math.random()*midI.length)];

    const studentName='${lname}, ${fnames} ${midI}.';

    const score=Math.floor(Math.random()*100);
    const remark= score>=75? 'Pass':'Fail';
    const Number = i.toString().padStart(8, '0');

    studentData.push({
        FirstName:fnames,
        LastName:lname,
        MiddleInitial:midI,
        studentName:studentName,
        StudentNumber:Number,
        remark:remark,

    });


}
console.log(studentData);

