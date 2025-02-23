CREATE TABLE "recs_user_confirmation" (
	"userId" uuid PRIMARY KEY NOT NULL,
	"confirmationToken" text NOT NULL,
	"createdAt" date NOT NULL
);
--> statement-breakpoint
ALTER TABLE "recs_user_confirmation" ADD CONSTRAINT "recs_user_confirmation_userId_recs_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."recs_user"("id") ON DELETE no action ON UPDATE no action;