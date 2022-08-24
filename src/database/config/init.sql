Begin ;
Drop table  if Exists Tweets ,Replyes CASCADE;
Create table Tweets (
    id serial primary key ,
    user_name varchar(100),
    avatar text,  
    content text not null ,
    likes int Default 0
);
Create table Replyes (
    id serial primary key ,
    content text not null ,
    avatar  text,  
    name varchar(100) Default 0,
    tweets_id int ,
    foreign key(tweets_id) REFERENCES Tweets(id) on Delete CASCADE 
);

INSERT INTO Tweets (user_name,avatar,content,likes) values ('tareq','https://i.ytimg.com/vi/XjvaJH8aRc0/maxresdefault.jpg','Software Engineering',109) ,('salsabeel' ,'https://i.ytimg.com/vi/XjvaJH8aRc0/maxresdefault.jpg' , 'Software Engineering' , 99);
INSERT INTO Replyes (name,avatar,content,tweets_id ) values ('tareq','https://i.ytimg.com/vi/XjvaJH8aRc0/maxresdefault.jpg','Software Engineering',1) ,('salsabeel' ,'https://i.ytimg.com/vi/XjvaJH8aRc0/maxresdefault.jpg' , 'Software Engineering' ,2);

commit;