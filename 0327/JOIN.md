![Alt text](https://hongong.hanbit.co.kr/wp-content/uploads/2021/11/OUTER-JOIN_%EB%8D%94%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-1.png)

## JOIN

-   조인은 2개의 테이블을 서로 묶어서 하나의 결과를 만들어 내는 것을 말한다.
-   INNER JOIN(내부조인) : 두 테이블을 조인 할 때, 두 테이블에 모두 저정한 열의 데이터가 있어야 한다.
-   OUTER JOIN(외부 조인)은 두 테이블을 조인할 때, 1개의 테이블에만 데이터가 있어도 결과가 나온다.
-   CROSS JOIN(상호 조인)은 한쪽 테이블의 모든 행과 다른 쪽 테이블의 모든 행을 조인하는 기능이다.
-   SELF JOIN(자체 조인)은 자신이 자신과 조인한다는 의미로, 1개의 테이블을 사용한다.

## INNER JOIN

```SQL
SELECT <열 목록>
 FROM <첫 번째 테이블>
          INNER JOIN <두 번째 테이블>
          ON <조인될 조건>
 [WHERE 검색 조건]
```

## OUTER JOIN

```SQL
 SELECT <열 목록>
 FROM <첫 번째 테이블(LEFT 테이블)>
          <LEFT | RIGHT | FULL> OUTER JOIN <두 번째 테이블(RIGHT 테이블)>
           ON <조인될 조건>
 [WHERE 검색 조건]
```

### OUTER JOIN의 종류

-   LEFT OUTER JOIN: 왼쪽 테이블의 모든 값이 출력되는 조인
-   RIGHT OUTER JOIN: 오른쪽 테이블의 모든 값이 출력되는 조인
-   FULL OUTER JOIN: 왼쪽 또는 오른쪽 테이블의 모든 값이 출력되는 조인

## CROSS JOIN

```SQL
 SELECT *
 FROM <첫 번째 테이블>
           CROSS JOIN <두 번째 테이블>
```

## SELF JOIN

```SQL
SELECT <열 목록>
 FROM <테이블> 별칭A
          INNER JOIN <테이블> 별칭B
          ON <조인될 조건>
 [WHERE 검색 조건]
```
