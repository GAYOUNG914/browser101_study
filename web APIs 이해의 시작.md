# Web APIs 이해의 시작

Thu, Mar 10, 2022 2:48 PM

HTTP(Hypertext Transfer Protocol) : 웹 클라이언트와 서버간의 통신 규약. 클라이언트가 정보를 request 하고 서버가 클라이언트에 response하는 방식으로 이루어져 있다.
HTTPS(Hypertext Transfer Protocol Secure) : 보안처리 된 HTTP

브라우저에서 WINDOW는 최상단의 global object이다.

WINDOW(창) 안에는 DOM(Document Object Model), BOM, JavaScript 가 있다.

//윈도우 사이즈 표기

window.screen.width //사용자 스크린의 사이즈
window.outerWidth // 브라우저의 사이즈
window.innerWidth //페이지가 표기되는 부분 전체 (스크롤바 포함)
document.documentElement.clientWidth // 문서 자체(스크롤바 불포함)
이 넷의 차이점을 알아야한다.

// 좌표 (coordinates)

Element.getBoundingClientRect()
-> getBoundingClientRect API(함수)는 모든 Element 에 속해있다.
-> elemnt의 높이, 너비, position 등 다양한 요소의 값을 알 수 있다.
-> position 값을 구할 때 bottom, right 값은 css 와는 구하는 방법이 다르니 주의.

Client x,y
-> 윈도우 기준 좌표

Page x,y
-> 문서 기준 좌표