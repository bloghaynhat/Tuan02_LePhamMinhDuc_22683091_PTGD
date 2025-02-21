import React, { useState } from "react";
import "./cssChung.css";

function Btap04() {
  const [content, setContent] = useState("");
  const thongtin = {
    content1: `Sáng ra bờ suối, tối vào hang,
Cháo bẹ, rau măng vẫn sẵn sàng.
Bàn đá chông chênh dịch sử Đảng,
Cuộc đời cách mạng thật là sang.
                                     _Thơ của Bác_`,
    content2: `Tôi muốn tắt nắng đi
Cho màu đừng nhạt mất;
Tôi muốn buộc gió lại
Cho hương đừng bay đi.
                        _Xuân Diệu_`,
    content3: `Em sẽ kể anh nghe
Chuyện con thuyền và biển:

“Từ ngày nào chẳng biết
Thuyền nghe lời biển khơi
Cánh hải âu, sóng biếc
Đưa thuyền đi muôn nơi

Lòng thuyền nhiều khát vọng
Và tình biển bao la
Thuyền đi hoài không mỏi
Biển vẫn xa... còn xa

Những đêm trăng hiền từ
Biển như cô gái nhỏ
Thầm thì gửi tâm tư
Quanh mạn thuyền sóng vỗ

Cũng có khi vô cớ
Biển ào ạt xô thuyền
(Vì tình yêu muôn thuở
Có bao giờ đứng yên?0

Chỉ có thuyền mới hiểu
Biển mênh mông nhường nào
Chỉ có biển mới biết
Thuyền đi đâu, về đâu

Những ngày không gặp nhau
Biển bạc đầu thương nhớ
Những ngày không gặp nhau
Lòng thuyền đau - rạn vỡ

Nếu từ giã thuyền rồi
Biển chỉ còn sóng gió”

Nếu phải cách xa anh
Em chỉ còn bão tố.
                    _Xuân Quỳnh_`,
    content4: `Bỗng nhận ra hương ổi
Phả vào trong gió se
Sương chùng chình qua ngõ
Hình như thu đã về

Sông được lúc dềnh dàng
Chim bắt đầu vội vã
Có đám mây mùa hạ
Vắt nửa mình sang thu

Vẫn còn bao nhiêu nắng
Đã vơi dần cơn mưa
Sấm cũng bớt bất ngờ
Trên hàng cây đứng tuổi.
                            _Hữu Thỉnh_`,
  };

  function handleClickContent(e) {
    var tam = e.target.value;
    setContent(thongtin[tam]);
  }

  return (
    <div>
      <button
        className="button_bai4"
        onClick={handleClickContent}
        value="content1"
      >
        Cảnh rừng pác bó
      </button>
      <button
        className="button_bai4"
        onClick={handleClickContent}
        value="content2"
      >
        Vội vàng
      </button>
      <button
        className="button_bai4"
        onClick={handleClickContent}
        value="content3"
      >
        Thuyền và biển
      </button>
      <button
        className="button_bai4"
        onClick={handleClickContent}
        value="content4"
      >
        Sang thu
      </button>
      <br />
      <div id="content_bai4">
        <pre>{content}</pre>
      </div>
    </div>
  );
}

export default Btap04;
