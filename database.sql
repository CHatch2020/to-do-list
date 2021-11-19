Create TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task_name" VARCHAR(300) NOT NULL,
	"completion" VARCHAR(50) NOT NULL
	);
	
		INSERT INTO "tasks"
		("task_name", "completion")
	VALUES
		($1, $2);
		
	SELECT * FROM "tasks";