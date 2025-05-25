/* let double = n => n * 2;

let sayHi = () => alert("안녕하세요!");
sayHi(); */

let userName = prompt("이름을 알려주세요.", "익명의 누군가");  // prompt(질문, [기본값])
let isTeaWanted = confirm("차 한 잔 드릴까요?");  // 확인 === true, 취소 === false

alert(`안녕하세요! ${userName}님!`);
alert(`차 주문 여부 : ${isTeaWanted}`);

document.innerHTML("반갑습니다!");