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

     UPDATE "tasks"
    SET "completion"=$1
    WHERE "id"=$2;

     DELETE FROM "tasks"
        WHERE "id"=$1;