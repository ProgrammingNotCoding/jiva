import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { users } from "./schema/users.ts"

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
