ALTER TABLE "recs_session" ALTER COLUMN "accessTokenCreated" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "recs_session" ALTER COLUMN "accessTokenCreated" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "recs_session" ALTER COLUMN "createdAt" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "recs_session" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "recs_user_confirmation" ALTER COLUMN "createdAt" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "recs_user_confirmation" ALTER COLUMN "createdAt" SET DEFAULT now();