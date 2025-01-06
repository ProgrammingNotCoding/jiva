import { boolean, pgEnum, serial, timestamp } from 'drizzle-orm/pg-core';
import { pgTable, text } from 'drizzle-orm/pg-core';

export const roleEnums = pgEnum('role', ['admin', 'user']);
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: roleEnums('role').notNull().default('user'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
  isDeleted: boolean('is_deleted').notNull().default(false),
});
