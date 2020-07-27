let selectedFile;
var students;
var total ;
var departments;
var fav = [];
var madani = []
var emara = []
var kahraba = []
var mekanika = []

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

function getStudentsFav(student){
    fav = []
    fav.push(getKeyByValue(student,1))
    fav.push(getKeyByValue(student,2))
    fav.push(getKeyByValue(student,3))
    fav.push(getKeyByValue(student,4))
    return fav
}

function getNumberOfDepartment(departments,name){
for(i in departments){
    if(departments[i].name == name) return i
}

}
















console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

document.getElementById('button').addEventListener("click", () => {
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
               students = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log(students);
              document.getElementById("jsondata").innerHTML = JSON.stringify(students,undefined,4)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 total = students.length;

 departments = [
    {
      "name": "الهندسة المدنية",
      "capacity": 350,
      "students": []
    },
    {
        "name": "الهندسة المعمارية",
        "capacity": 60,
        "students": []
      },
      {
        "name": "الهندسة الكهربية",
        "capacity": total,
        "students": []
      },
      {
        "name": "الهندسة الميكانيكية",
        "capacity": total,
        "students": []
      }]

students.forEach(function(student){
    delete student.م
     fav = getStudentsFav(student)

      for( i in fav){
      
        dept = getNumberOfDepartment(departments , fav[i])
        if(departments[dept].capacity > departments[dept].students.length){
            departments[dept].students.push(student)
            break;
        }
        



      }

  madani = departments[0].students
  emara = departments[1].students
  kahraba = departments[2].students
  mekanika = departments[3].students


   
 
    




})














//////////////////////////////////////////////////////////////////////////////////////
         });
        }
    }
});


