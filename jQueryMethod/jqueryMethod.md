## jQuery method 공부하기!!

-   조상 자손 관계

    -   parent() : 선택자에 대한 부모요소 딱 하나만
    -   parents() : 선택자에 대한 부모요소 모두
    -   parentUntil() : 선택한 요소의 조상 요소 중 전달 받은 선택자(인수)에 해당하는 요소 바로 이전까지의 요소만을 모두 선택
    -   find() : 자식 태그뿐 아니라 손자 태그, 그 아래 태그까지 모두 접근
    -   children() : 자식 태그까지만 접근

-   근접 관계

    -   closest()

-   siblings() : 자신을 뺀 형제태그 접근

-   next() : 선택 요소의 다음 형제 요소 반환.
-   nextAll() : 선택 요소의 모든 다음 형제 요소 반환.
-   nextUntil() : selector와 stop 사이의 모든 다음 형제 요소 중 filter에 해당하는 요소 반환.
-   prev() : 이전 요소를 선택하도록 반환

-   append() : 선택한요소의 자식요소 뒤에 내용삽입
-   prepend() : 선택한요소의 자식요소 앞에 내용삽입
-   before() : 지정한 요소 시작 부분에 내용을 삽입 || A.berfore(B) - A 앞에 B를 추가
-   after() : 지정한 요소 뒤에 새로운 요소를 삽입 || A.after(B) - A 뒤에 B를 추가
-   insertBefore() : 지정한 요소 시작 부분에 내용을 삽입 || A.insertBefore(B) - B 앞에 A 를 추가
-   insertAfter() : 지정한 요소 뒤에 새로운 요소를 삽입 || A.insertAfter(B) - B 뒤에 A 를 추가
-   wrap() : 선택한 요소를 원하는 태그로 감싼다
-   wrapAll() : 선택한 요소 모두를 원하는 태그로 감싼다
-   wrapInner() : 선택한 요소 안의 태그를 원하는 요소로 감싼다
-   unwrap() : 선택한 요소의 상위 태그를 제거

-   even()
-   odd()
-   addClass()
-   removeClass()
-   hasClass()

속성관련

    -   attr()
    -   prop()
    -   removeAttr()

-   end()
-   trigger()

-   blur()
-   html()
-   focus()
-   change()
-   show()
-   select()

-   preventDefault()

-   toggle()
-   toggleClass()
-   fadeToggle()
-   slideToggle()

## bootstrap
