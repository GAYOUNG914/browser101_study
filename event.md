# Event

Mon, Apr 4, 2022 4:50 PM

**이벤트 캡처링 & 버블링**

<br>
<br>
버블링을 막기 위해 stopgropagation, stopImmediatePropagation 을 쓰지 마라.
프로젝트 규모가 커질 수록 유자보수가 어렵고 오류가 발생하기 쉽기 때문

대신, 부모 요소에

if (event.target !== event.currentTarget){
    return;
}

이런 식으로 처리해줌

또한, passive가 기본적으로 true인 이벤트(scroll 등)들에게 강제로 passive flase속성을 부여하거나,
이벤트에 preventDefault(); api를 가능하면 호출 시키지 말아야 한다.

<br>
<br>
<br>
**이벤트 위임(event deligaiton)**

여러 개의 요소에 같은 이벤트가 발생해야한다면 그냥 부모요소에 이벤트 등록을 하면 됨.

<br>
<br>
