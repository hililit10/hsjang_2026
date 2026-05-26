// 1. 기존 기능: 푸터의 연도를 자동으로 표시합니다.
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

// 2. 추가 기능: 웹사이트 방문 환영 메시지 띄우기 (콘솔창 전용)
// 개발자 도구(F12)를 누르면 교수님이 확인하실 수 있게 멋진 로그를 남깁니다.
console.log("🚀 장희승의 포트폴리오 사이트에 오신 것을 환영합니다!");

// 3. 추가 기능: Contact 페이지에서 '보내기' 버튼 누르면 귀여운 알림창 띄우기
document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.querySelector(".submit-btn");
  var nameInput = document.getElementById("name");

  if (submitBtn) {
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault(); // 페이지 새로고침 방지
      
      var userName = nameInput && nameInput.value ? nameInput.value : "방문자";
      
      // 화면에 이쁜 경고창 띄우기
      alert("✨ " + userName + "님, 소중한 메시지 감사합니다! (실습용 데모 기능입니다)");
      
      // 입력창 초기화
      if(nameInput) nameInput.value = "";
      var textarea = document.getElementById("message");
      if(textarea) textarea.value = "";
    });
  }
});
