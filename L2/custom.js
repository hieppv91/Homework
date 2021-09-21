function showDateTime() {
    let date = prompt('Nhap ngay: ');
    let month = prompt('Nhap thang: ');
    let year = prompt('Nhap nam: ');

    /*09-10-2020*/
    document.write(date + '-' + month + '-' + year);
}

function area() {
    let banKinh = prompt('Nhap ban kinh: ');
    let chuVi = parseInt(banKinh) * 2 * 3.14;
    let dienTich = parseInt(banKinh) * 3.14;
    document.write('Chu vi la: ' + chuVi);
    document.write('Dien tich la: ' + dienTich);
}

function BankInterestRate() {
    let money = prompt('Nhap so tien von: ');
    let rate = prompt('Nhap lai suat: ');
    let year = prompt('Nhap so nam: ');

    let tongSoTien = parseInt(money) + parseInt(year) * parseInt(rate) / 100;

    document.write('Tong so tien sau ' + year + ' nam la: ' + tongSoTien);
}

function writeLetter() {
    /*
    Tên người nhận: Joe
    Địa điểm: Los Angeles
    Thời gian: ngày 10 tháng 10 năm 1951
    */
    let receiver = prompt('Nhap ten nguoi nhan: ');
    let address = prompt('Nhap dia diem: ');
    let time = prompt('Nhap thoi gian: ');

    document.getElementById('letter').innerHTML = receiver + ' thương nhớ,<br><br>\
Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều.Em yêu anh đến khi trái tim này tan thành nghìn mảnh.Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau.Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.<br><br>\
Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống ? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế.Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh(ít nhất là 2 nhé, em vừa mới quyết định đấy!).Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay.Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.<br><br>\
Anh yêu thương, đừng bao giờ rời xa em nữa nhé.Yêu anh rất nhiều.<br><br>\
'+ address + ', ' + time + '.';

    //document.getElementById('buttons').style.display="none";
    document.getElementById('buttons').classList.add('demo');
}

function checkInterger() {
    let a = prompt('Nhap ban so can kiem tra: ');

    let check = Number.isInteger(parseInt(a));

    if (check) {
        if (a==0)
        {
            document.write('Day la so 0');
        }
        else
        if (a > 0)
            document.write('Day la so nguyen duong');
        else
            document.write('Day la so nguyen am');
    }
    else
        document.write('Day la khong phai la so nguyen');
}