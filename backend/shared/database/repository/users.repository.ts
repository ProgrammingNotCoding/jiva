import { eq } from 'drizzle-orm';
import { db } from '../db';
import { users } from '../schema/users';
import type { NewUser } from '../types';

class UserRepository {
  async create(user: NewUser) {
    const [insertUser] = await db.insert(users).values(user).returning();

    if (!insertUser.id) {
      return null;
    }

    return insertUser ?? null;
  }

  async fetchUserById(id: number) {
    const [user] = await db.select().from(users).where(eq(users.id, id));

    return user ?? null;
  }

  async fetchUserByEmail(email: string) {
    const [user] = await db.select().from(users).where(eq(users.email, email));

    return user ?? null;
  }

  async fetchAllUsers() {
    const allUsers = await db.select().from(users);

    return allUsers ?? [];
  }

  async updateUserById(id: number, user: NewUser) {
    const [updatedUser] = await db.update(users).set(user).where(eq(users.id, id)).returning();

    return updatedUser ?? null;
  }

  async deleteUserById(id: number) {
    const [deletedUser] = await db.delete(users).where(eq(users.id, id)).returning();

    return deletedUser ?? null;
  }
}

export const userRepository = new UserRepository();
