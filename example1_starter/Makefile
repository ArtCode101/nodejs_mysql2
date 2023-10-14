start_database:
	docker run --name mysql -p 3306:3306 -e MYSQL_DATABASE=mydb -e MYSQL_ROOT_PASSWORD=root -d mysql:8.1.0

stop_database:
	docker stop mysql

remove_database:
	docker rm mysql

create_table:
	docker exec -i mysql mysql -uroot -proot mydb < database/tableup.sql

drop_table:
	docker exec -i mysql mysql -uroot -proot mydb < database/tabledown.sql

start_database_compose:
	docker-compose -f docker-compose-mysql.yaml up -d

stop_database_compose:
	docker-compose -f docker-compose-mysql.yaml down