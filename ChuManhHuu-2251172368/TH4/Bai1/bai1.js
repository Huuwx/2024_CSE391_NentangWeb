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
 var students = JSON.parse(localStorage.getItem("students")) || [];
 students.push({name: name, msv: msv, Birthd: Birthd, Class: Class});
 localStorage.setItem("students", JSON.stringify(students));
});
 // Hàm hiển thị danh sách sinh viên từ localStorage khi trang tải
 function hienThiDanhSachSinhVien() {
 // ...
var students = JSON.parse(localStorage.getItem("students")) || [];
var table = document.getElementById("bangSinhVien");

var rowCount = table.rows.length;
for(var i = rowCount - 1; i > 0; i--){
    table.deleteRow(i);
}

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
    cell5.innerHTML = `<button onclick="xoaSinhVien(${index})">Xóa</button> <button onclick="suaSinhVien(${index})">Sửa</button>`;
});
 }

 function xoaSinhVien(index) {
    if(confirm("Bạn có muốn xóa sinh viên này không?")){
        var students = JSON.parse(localStorage.getItem("students")) || [];

        students.splice(index, 1);

        localStorage.setItem("students", JSON.stringify(students));

        hienThiDanhSachSinhVien();
    }
}

 // Gọi hàm hiển thị danh sách khi trang tải
 window.onload = hienThiDanhSachSinhVien;