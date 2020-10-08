$("#noticeTable td").click(function (e) { 
    e.preventDefault();
    
    location.href = "noticeDetail.html";
});

$("qnaTable td").click(function (e) { 
    e.preventDefault();
    
    location.href = "qnaDetail.html";
});

$("#write").click(function (e) { 
    e.preventDefault();
    
    location.href = "noticeNew.html";
});

$("id").click(function (e) { 
    e.preventDefault();
    
    location.href = "index.html";
});