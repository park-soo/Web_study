create or replace PROCEDURE PROC_AURG (
          V_NAMEIN IN VARCHAR2 
        , V_NAMEOUT OUT VARCHAR2 
        , P_EMPNO IN NUMBER 
        , P_DEPTNO IN NUMBER 
        , P_ENAME OUT VARCHAR2 
        , P_DNAME OUT VARCHAR2 
        , P_RES_CODE OUT NUMBER 
) 
IS
        CURSOR CHECKEMP IS
        SELECT E.ENAME, D.DNAME
        FROM EMP E, DEPT D
        WHERE E.DEPTNO=D.DEPTNO 
        AND E.EMPNO=P_EMPNO AND D.DEPTNO=P_DEPTNO;
BEGIN
        DBMS_OUTPUT.PUT_LINE(V_NAMEIN || '님 안녕하세요.');
        V_NAMEOUT := V_NAMEIN;
        DBMS_OUTPUT.PUT_LINE('사번:' || P_EMPNO);
        DBMS_OUTPUT.PUT_LINE('소속 부서:' || P_DEPTNO);
        OPEN CHECKEMP;
        FETCH CHECKEMP INTO P_ENAME, P_DNAME;
        -- %FOUND 조회 결과가 1개 이상인 경우 TRUE
        -- %NOTFOUND 조회 결과가 0개인 경우 TRUE
        -- %ROWCOUNT 쿼리 수행 결과의 행수
        IF CHECKEMP%FOUND THEN P_RES_CODE := 1000;
        ELSE P_RES_CODE :=2000;
        END IF;
        CLOSE CHECKEMP;
END PROC_AURG;



-- DECLARE
--   V_NAMEIN VARCHAR2(200);
--   V_NAMEOUT VARCHAR2(200);
--   P_EMPNO NUMBER;
--   P_DEPTNO NUMBER;
--   P_ENAME VARCHAR2(200);
--   P_DNAME VARCHAR2(200);
--   P_RES_CODE NUMBER;
-- BEGIN
--   V_NAMEIN := 'TESTER';
--   P_EMPNO := 7701;
--   P_DEPTNO := 50;

--   PROC_AURG(
--     V_NAMEIN => V_NAMEIN,
--     V_NAMEOUT => V_NAMEOUT,
--     P_EMPNO => P_EMPNO,
--     P_DEPTNO => P_DEPTNO,
--     P_ENAME => P_ENAME,
--     P_DNAME => P_DNAME,
--     P_RES_CODE => P_RES_CODE
--   );
--   IF P_RES_CODE=1000 THEN
--   DBMS_OUTPUT.PUT_LINE('ENAME: ' || P_ENAME);
--   DBMS_OUTPUT.PUT_LINE('DNAME: ' || P_DNAME);
--   ELSE
--   DBMS_OUTPUT.PUT_LINE('존재하지 않습니다. ' ||P_RES_CODE);
--   END IF;
--   /* Legacy output: 
-- DBMS_OUTPUT.PUT_LINE('V_NAMEOUT = ' || V_NAMEOUT);
-- */ 
--   :V_NAMEOUT := V_NAMEOUT;
--   /* Legacy output: 
-- DBMS_OUTPUT.PUT_LINE('P_ENAME = ' || P_ENAME);
-- */ 
--   :P_ENAME := P_ENAME;
--   /* Legacy output: 
-- DBMS_OUTPUT.PUT_LINE('P_DNAME = ' || P_DNAME);
-- */ 
--   :P_DNAME := P_DNAME;
--   /* Legacy output: 
-- DBMS_OUTPUT.PUT_LINE('P_RES_CODE = ' || P_RES_CODE);
-- */ 
--   :P_RES_CODE := P_RES_CODE;
-- --rollback; 
-- END;
