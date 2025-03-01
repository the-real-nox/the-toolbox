CREATE TYPE "public"."userStatus" AS ENUM('active', 'locked', 'unconfirmed', 'inactive');--> statement-breakpoint
CREATE TABLE "recs_session" (
	"id" uuid PRIMARY KEY NOT NULL,
	"refreshToken" text NOT NULL,
	"accessToken" text NOT NULL,
	"accessTokenCreated" timestamp DEFAULT now() NOT NULL,
	"ip" "cidr" NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"userId" uuid NOT NULL,
	CONSTRAINT "recs_session_refreshToken_unique" UNIQUE("refreshToken"),
	CONSTRAINT "recs_session_accessToken_unique" UNIQUE("accessToken")
);
--> statement-breakpoint
CREATE TABLE "recs_user_confirmation" (
	"userId" uuid PRIMARY KEY NOT NULL,
	"confirmationToken" char(128) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "recs_user_confirmation_confirmationToken_unique" UNIQUE("confirmationToken")
);
--> statement-breakpoint
CREATE TABLE "recs_user" (
	"id" uuid PRIMARY KEY NOT NULL,
	"userName" text NOT NULL,
	"email" text NOT NULL,
	"status" "userStatus" NOT NULL,
	"passwordHash" text NOT NULL,
	CONSTRAINT "recs_user_userName_unique" UNIQUE("userName")
);
--> statement-breakpoint
ALTER TABLE "recs_user_confirmation" ADD CONSTRAINT "recs_user_confirmation_userId_recs_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."recs_user"("id") ON DELETE no action ON UPDATE no action;