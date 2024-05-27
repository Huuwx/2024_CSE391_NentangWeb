function displayInfor(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    var resultId = document.getElementById('result');

    resultId.innerHTML = '<p>Name: <b>' + name + '</b></p> <p>Age: <u>' + age + ' tuổi</u></p>';
}