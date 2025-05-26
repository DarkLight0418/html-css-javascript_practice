/* let double = n => n * 2;

let sayHi = () => alert("안녕하세요!");
sayHi(); */

let userName = prompt("이름을 알려주세요.", "익명의 누군가");  // prompt(질문, [기본값])
let isTeaWanted = confirm("차 한 잔 드릴까요?");  // 확인 === true, 취소 === false

alert(`안녕하세요! ${userName}님!`);
alert(`차 주문 여부 : ${isTeaWanted}`);

if (isTeaWanted === true) {
    document.getElementsByClassName("greeting")[0].innerHTML = `반갑습니다 ${userName}님! 좋은 하루 되세요 :)`;
} else {
    document.getElementsByClassName("greeting")[0].innerHTML = `알겠습니다! 좋은 하루 되세요 ${userName}님 :)`;
}