
     $(document).ready(function() {
     // Đọc dữ liệu từ data.json và hiển thị danh sách lớp vào 
            let classes = [];
            
    dropdown
     $.getJSON("data.json", function(data) {
     // ...
                classes = data.classes;
                populateClassSelect();
                displayStudents();
     });
     function populateClassSelect() {
            const classSelect = $("#lop");
        classSelect.empty();
        classes.forEach((classItem, index) => {
        classSelect.append(new Option(classItem.class_name, index));
        });
        classSelect.prop('selectedIndex', 0);
    }

    // Hiển thị danh sách sinh viên của lớp được chọn
    function displayStudents() {
        const selectedClassIndex = $("#lop").val();
    const studentTable = $("#bangSinhVien tbody");
    studentTable.empty();
    const students = classes[selectedClassIndex].students;
    students.forEach(student => {
      const row = `
        <tr>
          <td class="px-4 py-2">${student.name}</td>
          <td class="px-4 py-2">${student.student_id}</td>
          <td class="px-4 py-2">${student.date_of_birth}</td>
          <td class="px-4 py-2">
            <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded editButton">Sửa</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded deleteButton">Xóa</button>
          </td>
        </tr>
      `;
      studentTable.append(row);
    });
    }
     // Xử lý sự kiện khi chọn lớp từ dropdown
     $("#lop").change(function() {
     // ...
     displayStudents();
    
     });
     // Các hàm xử lý sự kiện thêm, sửa, xóa sinh viên
     // ...
     
     });
  