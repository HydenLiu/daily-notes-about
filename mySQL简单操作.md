###  创建数据库和删除数据库：

create database 数据库名

drop database 数据库名

 

###  创建数据表：

create table 表名

drop table 表名

 

###  表添加数据：

insert into 表名 ( 标题1，标题2，…) values ( 内容1，内容2…)

 

### 表删除数据：

delete from 表名 where 条件

 

### 表修改数据：

update 表名 set 修改后的内容 where 条件

 

### 表查询数据：

select * from 表名 

 

###  表的列的修改：

``` mysql
-- 修改表的定义 alter table
alter table users add age int default 0;
alter table user drop age;

-- 增加多个列
alter table users add reg_date date, add money int;

-- 删除多个列
alter table users drop reg_date, drop money;
```

 

### 排序，加入desc降序

``` mysql
select * from users order by age desc;
```

 

### 分页：

 ``` mysql
select * from users limit 1,2;
 ```

