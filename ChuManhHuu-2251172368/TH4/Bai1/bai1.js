// JavaScript (bạn sẽ viết các hàm xử lý sự kiện tại đây)
document.getElementById("formSinhVien").addEventListener("submit", function(event) {
 event.preventDefault(); // Ngăn chặn form submit mặc định
 // Lấy dữ liệu từ form
 // ...
 var name = document.getElementById("hoTen").value;
 var msv = document.getElementById("maSV").value;
 var Birthd = document.getElementById("ngaySinh").value;
 var Class = document.getElementById("lop").value;
 // Validate dữ liệu
 // ...
 if(name == "" || msv == "" || Birthd == "" || Class == ""){
    alert("Vui long nhap day du thong tin");
    return;
 }
 // Thêm sinh viên vào bảng và localStorage
 // ...
 var table = document.getElementById("bangSinhVien").getElementsByTagName('tbody')[0];
 var newRow = table.insertRow();
 var cell1 = newRow.insertCell(0);
 var cell2 = newRow.insertCell(1);
 var cell3 = newRow.insertCell(2);
 var cell4 = newRow.insertCell(3);
 var cell5 = newRow.insertCell(4);
 cell1.innerHTML = name;
 cell2.innerHTML = msv;
 cell3.innerHTML = Birthd;
 cell4.innerHTML = Class;
 cell5.innerHTML = "di hoc";

 var students = JSON.parse(localStorage.getItem("students")) || [];
 students.push({name: name, msv: msv, Birthd: Birthd, Class: Class});
 localStorage.setItem("students", JSON.stringify(students));
});
 // Hàm hiển thị danh sách sinh viên từ localStorage khi trang tải
 function hienThiDanhSachSinhVien() {
 // ...
var students = JSON.parse(localStorage.getItem("students")) || [];
var table = document.getElementById("bangSinhVien").getElementsByTagName('tbody')[0];
table.innerHTML = "";
students.forEach(function(student){
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = student.name;
    cell2.innerHTML = student.msv;
    cell3.innerHTML = student.Birthd;
    cell4.innerHTML = student.Class;
    cell5.innerHTML = "di hoc";
});
 }

 function deleteRow() {
    var row = button.parentNode.parentNode;
    var name = row.cells[0].innerText;
    var msv = row.cells[1].innerText;

    // Xóa sinh viên khỏi localStorage
    var students = JSON.parse(localStorage.getItem("students")) || [];
    students = students.filter(function(student) {
        return !(student.name === name && student.msv === msv);
    });
    localStorage.setItem("students", JSON.stringify(students));

    // Xóa hàng khỏi bảng
    row.parentNode.removeChild(row);
}

 // Gọi hàm hiển thị danh sách khi trang tải
 window.onload = hienThiDanhSachSinhVien;