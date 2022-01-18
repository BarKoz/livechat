const userData = `DROP TABLE IF EXISTS user -- no replication users for this table
create table user ( -- create 10 users data
	user_id SERIAL PRIMARY KEY,
	email VARCHAR(50),
	password VARCHAR(50),
	full_name VARCHAR(50),
	nick VARCHAR(50),
	gender VARCHAR(50),
	create_at DATE
);
insert into user (email, password, full_name, nick, gender, create_at) values ('abeurich0@360.cn', '4uyVzd', 'Aguistin Beurich', 'abeurich0', 'Male', '08.01.2021');
insert into user (email, password, full_name, nick, gender, create_at) values ('lbrightey1@usnews.com', 'WGOH5IZ7c5V', 'Lainey Brightey', 'lbrightey1', 'Female', '01.08.2021');
insert into user (email, password, full_name, nick, gender, create_at) values ('ecasazza2@apple.com', '8MGlgyi25', 'Elfreda Casazza', 'ecasazza2', 'Male', '02.02.2021');
insert into user (email, password, full_name, nick, gender, create_at) values ('tpettman3@mlb.com', 'x4gM7F4Nxo9u', 'Terrill Pettman', 'tpettman3', 'Female', '10.05.2021');
insert into user (email, password, full_name, nick, gender, create_at) values ('ltrahar4@about.me', 'uNMhyHCX', 'Lianna Trahar', 'ltrahar4', 'Male', '20.05.2021');
insert into user (email, password, full_name, nick, gender, create_at) values ('oearle5@skype.com', 'Tnm8Ng1g', 'Olin Earle', 'oearle5', 'Female', '15.01.2021');
insert into user (email, password, full_name, nick, gender, create_at) values ('wickovicz6@ifeng.com', '1UFtABVkl', 'Worth Ickovicz', 'wickovicz6', 'Female', '08.10.2021');
insert into user (email, password, full_name, nick, gender, create_at) values ('bmcgeneay7@ebay.co.uk', '9mHbcz', 'Bryanty McGeneay', 'bmcgeneay7', 'Female', '13.12.2021');
insert into user (email, password, full_name, nick, gender, create_at) values ('phaggerwood8@time.com', 'giQmanIU5w', 'Page Haggerwood', 'phaggerwood8', 'Male', '29.06.2021');
insert into user (email, password, full_name, nick, gender, create_at) values ('kcristou9@cmu.edu', 'g82LtUTh0tr', 'Kerstin Cristou', 'kcristou9', 'Male', '24.05.2021');`
export default userData;