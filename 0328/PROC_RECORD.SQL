create or replace PROCEDURE PROC_RECORD
IS
        TYPE R_DEPT IS RECORD(
                DEPTNO NUMBER(2) NOT NULL := 99,
                DNAME DEPT.DNAME%TYPE,
                LOC DEPT.LOC%TYPE
        );
        TYPE R_EMP IS RECORD(
                EMPNO EMP.EMPNO%TYPE,
                ENAME EMP.ENAME%TYPE,
                DINFO R_DEPT
        );
        D_REC R_DEPT;
        E_REC R_EMP;
BEGIN
--        D_REC.DEPTNO := 99;
--        D_REC.DNAME := 'DATABASE';
--        D_REC.LOC := 'SEOUL';
--        DBMS_OUTPUT.PUT_LINE('부서번호:'|| D_REC.DEPTNO);
--        DBMS_OUTPUT.PUT_LINE('부서명:'|| D_REC.DNAME);
--        DBMS_OUTPUT.PUT_LINE('위치:'|| D_REC.LOC);
--        INSERT INTO DEPT_CONST
--        VALUES D_REC;
--        
--        D_REC.DEPTNO := 50;
--        D_REC.DNAME :='DB';
--        D_REC.LOC := 'BUSAN';
--        UPDATE DEPT_CONST SET ROW = D_REC WHERE DEPTNO=99;
        
        SELECT E.EMPNO, E.ENAME, D.DEPTNO, D.DNAME, D.LOC
        INTO E_REC.EMPNO, E_REC.ENAME, E_REC.DINFO.DEPTNO, E_REC.DINFO.DNAME, E_REC.DINFO.LOC
        FROM EMP E , DEPT D
        WHERE E.DEPTNO=D.DEPTNO
        AND E.EMPNO=7844;
        DBMS_OUTPUT.PUT_LINE(E_REC.EMPNO || E_REC.ENAME);
        DBMS_OUTPUT.PUT_LINE(E_REC.DINFO.DEPTNO || E_REC.DINFO.DNAME);
        DBMS_OUTPUT.PUT_LINE(E_REC.DINFO.LOC);
        
END PROC_RECORD;