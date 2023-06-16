"use strict";

const codename = document.querySelector("#codename"),
  searchBtn = document.querySelector("#button");

searchBtn.addEventListener("click", stockvalue);

function stockvalue() {
  if (!codename.value) return alert("종목명을 입력하세요.");

  const req = {
    codename: codename.value,
  };

  fetch("/stockvalue", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/stockvalueview?codename="+codename.value;
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("조회 중 에러 발생");
    });
}