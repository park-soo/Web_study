/*
    CREATE TABLE TABLE_NAME(
        COLUMN_NAME DATA_TYPE(LENGTH)
        ......
        );
*/
drop table emp_ddl;


create table EMP_DDL(
    EMPNO NUMBER(4),
    ENAME VARCHAR2(10),
    JOB VARCHAR2(9),
    MGR NUMBER(4),
    HIREDATE DATE,
    SAL NUMBER(7,2),
    COMM NUMBER(7,2),
    DEPTNO NUMBER(2)
    );
   
desc emp_ddl;

create table dept_ddl
as select * from dept;
desc dept_ddl;

create table salgrade_ddl
as select * from salgrade;

/*
    ALTER TABLE <TABLE_NAME>
        1. ADD <COLNAME> DATATYPE;
        2. DROP <COLNMAE>;
        3. NODITY <COLNAME> <DATATYPE>;
        4. RENAME COLUMN <OLD_COLNAME> TO <NEW_COLNAME>;
*/

ALTER TABLE SALGRADE_DDL
add party varchar2(20);

ALTER TABLE SALGRADE_DDL
rename column party to home;

ALTER TABLE SALGRADE_DDL
modify home number(10);
desc salgrade_ddl;

ALTER TABLE SALGRADE_DDL
drop column home;

rename salgrade_ddl to salzip;

desc salzip;
select * from salzip;

truncate table salzip;
drop table salzip;

/*
    COMMENT ON TABLE <TABLE_NAME> IS <COMMENT>;
    COMMENT ON COLUMN <TABLE_NAME>.<COLUMN> IS <COMMENT>;
*/

comment on table dept_ddl is 'DDL테이블연습';
comment on column dept_ddl.loc is '부서위치';

/*
    CONSTRAINT
    NOT NULL / UNIQUE / PRIMARY KEY / FOREIGN KEY / CHECK / DEFAULT
*/

create table persons(
    id varchar2(4) primary key,
    name varchar2(20) not null unique,
    age number(3) check(age>=18),
    telnum varchar2(20),
    addr varchar2(100) default 'seoul',
    dbay date default sysdate
);
insert into persons(id,name, age, telnum)
values('1000', 'scott', 20, '01012345676');

insert into persons(name, age, telnum)
values('scott', 20, '01012345676');

create table persons2(
    id varchar2(4),
    name varchar2(20) not null,
    age number(3) check(age>=18),
    telnum varchar2(20),
    addr varchar2(100) default 'seoul',
    dbay date default sysdate,
    CONSTRAINT pk_person2 PRIMARY key(id),
    constraint un_person2 UNIQUE(name),
    CONSTRAINT chk_person2 CHECK(age>=18)
);

alter table persons2
modify addr DEFAULT 'paris';

ALTER TABLE persons2
DROP CONSTRAINT chk_person2;

ALTER TABLE persons2
ADD CONSTRAINT chk_p2 CHECK(age>50);

CREATE table plays(
    play_id number(10) PRIMARY key,
    play_result VARCHAR2(100),
    persons_id VARCHAR2(4),
    CONSTRAINT fk_plays FOREIGN key (persons_id) REFERENCES persons(id) on delete cascade
);
-- ON DELETE SET NULL
drop table pktable;

create table pktable(
    pkval varchar2(10),
    constraint pk_key primary key(pkval)
);
create table fktable(
    pkval varchar2(10),
    fkval varchar2(10)
);


alter table fktable
add CONSTRAINT fk_key foreign key(fkval) REFERENCES pktable(pkval)
on delete cascade;

alter table fktable
add CONSTRAINT pk_key PRIMARY key(pkval);


insert into pktable values('pk1');
insert into pktable values('pk2');
insert into pktable values('pk3');

select * from pktable;

insert into fktable values('pk1-val1','pk1');
insert into fktable values('pk1-val2','pk1');
insert into fktable values('pk2-val1','pk2');
insert into fktable values('pk2-val2','pk2');
insert into fktable values('pk3-val1','pk3');
insert into fktable values('pk3-val2','pk3');
select * from fktable;

delete from pktable where pkval='pk1';
select *from pktable ;
select *from fktable ;

--Q1 EMP_HW TABLE 생성
CREATE TABLE EMP_HW (
    EMPNO NUMBER(4,0) NOT NULL,
    ENAME VARCHAR2(10),
    JOB VARCHAR2(9),
    MGR NUMBER(4,0),
    HIREDATE DATE,
    SAL NUMBER(7,2),
    COMM NUMBER(7,2),
    DEPTNO NUMBER(2,0)
);

alter table EMP_HW
add CONSTRAINT FK_DEPTNO1 foreign key(EMPNO) REFERENCES DEPT(DEPTNO);

ALTER TABLE EMP_HW
ADD CONSTRAINT PK_EMP1 PRIMARY KEY(EMPNO);

ALTER TABLE EMP_HW
drop CONSTRAINT SYS_C007017;

ALTER TABLE EMP_HW
drop CONSTRAINT  FK_DEPTNO1;

alter table EMP_HW
add CONSTRAINT FK_DEPTNO1 foreign key(MGR) REFERENCES DEPT(DEPTNO);



-- Q2 EMP_HW 컬럼 BIGO를 추가 VARCHAR2(20)
 ALTER TABLE EMP_HW
 ADD BIGO VARCHAR2(20);
DESC EMP_HW;
-- Q3 BIGO 컬럼의 타입 VARCAHAR2(40)
ALTER TABLE EMP_HW
MODIFY BIGO VARCHAR(40);
DESC EMP_HW;
-- Q4 BIGO 컬럼의 이름을 REMARK로 변경
ALTER TABLE EMP_HW
RENAME COLUMN BIGO TO REMARK;
DESC EMP_HW;
-- Q5 EMP_HW 테이블 삭제
DROP TABLE EMP_HW;
DESC EMP_HW;
