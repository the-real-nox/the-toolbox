CREATE TYPE "public"."userStatus" AS ENUM('ACTIVE', 'LOCKED', 'UNCONFIRMED', 'INACTIVE');--> statement-breakpoint
CREATE TABLE "recs_session" (
	"id" uuid PRIMARY KEY NOT NULL,
	"refreshToken" text NOT NULL,
	"accessToken" text NOT NULL,
	"accessTokenCreated" date NOT NULL,
	"ip" "cidr" NOT NULL,
	"createdAt" date NOT NULL,
	"userId" uuid NOT NULL,
	CONSTRAINT "recs_session_refreshToken_unique" UNIQUE("refreshToken"),
	CONSTRAINT "recs_session_accessToken_unique" UNIQUE("accessToken")
);
--> statement-breakpoint
CREATE TABLE "recs_user" (
	"id" uuid PRIMARY KEY NOT NULL,
	"userName" text NOT NULL,
	"email" text NOT NULL,
	"status" "userStatus" NOT NULL,
	"passwordHash" text NOT NULL,
	CONSTRAINT "recs_user_userName_unique" UNIQUE("userName"),
	CONSTRAINT "recs_user_email_unique" UNIQUE("email")
);
