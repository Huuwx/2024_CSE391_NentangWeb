
document.getElementById("formSinhVien").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    // Lấy dữ liệu từ form
    var name = document.getElementById('hoTen').value;
    var msv = document.getElementById('maSV').value;
    var date = document.getElementById('ngaySinh').value;
    var lop = document.getElementById('lop').value;

    // Validate dữ liệu (đơn giản)
    if (name === "" || msv === "" || date === "" || lop === "") {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    // Tạo đối tượng sinh viên
    var sinhVien = {
        hoTen: name,
        maSV: msv,
        ngaySinh: date,
        lop: lop
    };

    // Lấy danh sách sinh viên từ localStorage
    var danhSachSinhVien = JSON.parse(localStorage.getItem('danhSachSinhVien')) || [];
    // Thêm sinh viên mới vào danh sách
    danhSachSinhVien.push(sinhVien);
    // Lưu danh sách sinh viên vào localStorage
    localStorage.setItem('danhSachSinhVien', JSON.stringify(danhSachSinhVien));

    // Hiển thị lại danh sách sinh viên
    hienThiDanhSachSinhVien();
    // Reset form
    document.getElementById("formSinhVien").reset();
});

// Hàm hiển thị danh sách sinh viên từ localStorage khi trang tải
function hienThiDanhSachSinhVien() {
    var danhSachSinhVien = JSON.parse(localStorage.getItem('danhSachSinhVien')) || [];
    var table = document.getElementById('bangSinhVien');

    // Xóa các hàng hiện tại (trừ hàng tiêu đề)
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    // Thêm từng sinh viên vào bảng
    danhSachSinhVien.forEach(function(sinhVien, index) {
        var row = table.insertRow();
        var cellHoTen = row.insertCell(0);
        var cellMaSV = row.insertCell(1);
        var cellNgaySinh = row.insertCell(2);
        var cellLop = row.insertCell(3);
        var cellHanhDong = row.insertCell(4);

        cellHoTen.innerHTML = sinhVien.hoTen;
        cellMaSV.innerHTML = sinhVien.maSV;
        cellNgaySinh.innerHTML = sinhVien.ngaySinh;
        cellLop.innerHTML = sinhVien.lop;
        cellHanhDong.innerHTML = `<button onclick="xoaSinhVien(${index})">Xóa</button> <button onclick="suaSinhVien(${index})">Sửa</button>`;
    });
}

// Hàm xóa sinh viên
function xoaSinhVien(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
        var danhSachSinhVien = JSON.parse(localStorage.getItem('danhSachSinhVien')) || [];
        // Xóa sinh viên khỏi danh sách
        danhSachSinhVien.splice(index, 1);
        // Lưu lại danh sách sinh viên vào localStorage
        localStorage.setItem('danhSachSinhVien', JSON.stringify(danhSachSinhVien));
        // Hiển thị lại danh sách sinh viên
        hienThiDanhSachSinhVien();
    }
}

// Hàm sửa sinh viên
function suaSinhVien(index) {
    var danhSachSinhVien = JSON.parse(localStorage.getItem('danhSachSinhVien')) || [];
    var sinhVien = danhSachSinhVien[index];

    document.getElementById('hoTen').value = sinhVien.hoTen;
    document.getElementById('maSV').value = sinhVien.maSV;
    document.getElementById('ngaySinh').value = sinhVien.ngaySinh;
    document.getElementById('lop').value = sinhVien.lop;

    // Thay đổi nút Thêm thành nút Cập nhật
    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.textContent = 'Cập nhật';
    submitButton.onclick = function(event) {
        event.preventDefault();

        // Validate dữ liệu
        var name = document.getElementById('hoTen').value;
        var msv = document.getElementById('maSV').value;
        var date = document.getElementById('ngaySinh').value;
        var lop = document.getElementById('lop').value;

        if (name === "" || msv === "" || date === "" || lop === "") {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }

        // Cập nhật thông tin sinh viên
        danhSachSinhVien[index] = {
            hoTen: name,
            maSV: msv,
            ngaySinh: date,
            lop: lop
        };

        // Lưu lại danh sách sinh viên vào localStorage
        localStorage.setItem('danhSachSinhVien', JSON.stringify(danhSachSinhVien));

        // Hiển thị lại danh sách sinh viên
        hienThiDanhSachSinhVien();
        // Reset form
        document.getElementById("formSinhVien").reset();
        // Đổi lại nút Cập nhật thành Thêm
        submitButton.textContent = 'Thêm';
        submitButton.onclick = null;
    };
}

// Gọi hàm hiển thị danh sách khi trang tải
hienThiDanhSachSinhVien();