import { UserDataBase } from "database/userDb";
import bcrypt from "bcryptjs";
import { validateEmail, validateName, validatePassword } from "util/validation";

export class UserService {
  constructor(private userDb: UserDataBase) {}

  public async getProfile(userId: number) {
    try {
      return await this.userDb.getProfileByEmail(userId);
    } catch (error) {
      return error;
    }
  }

  public changeProfileDetails = async (body: {
    id: number;
    email: string;
    name?: string;
    password?: string;
    phone?: string;
  }) => {
    const updateData: Partial<NewUser> = {};

    const { id, email, name, password, phone } = body;

    if (email) {
      const user = await this.userDb.getUserById(id);
      if (user.googleId) {
        if (user.passwordHash === "") {
          return { error: "Set PASSWORD before changing Email" };
        }
      }

      const emailError = validateEmail(email);
      if (emailError) {
        return { error: emailError };
      }
      if (await this.userDb.getUserByEmail(email)) {
        return { error: `User with email '${email}' already exists` };
      }

      updateData.email = email;
    }

    if (name) {
      const nameError = validateName(name);
      if (nameError) {
        return { error: nameError };
      }

      updateData.name = name;
    }

    if (password) {
      const passwordError = validatePassword(password);
      if (passwordError) {
        return { error: passwordError };
      }

      updateData.passwordHash = bcrypt.hashSync(password, 8);
    }

    if (phone) {
      updateData.phone = phone;
    }

    if (Object.keys(updateData).length === 0) {
      return { message: "No values to set" };
    }

    updateData.updatedAt = new Date();

    await this.userDb.changeProfileDetails(updateData, id);

    const result = await this.getProfile(body.id);
    return result;
  };
}

export type NewUser = {
  email: string;
  name: string;
  passwordHash: string;
  phone: string;
  updatedAt: Date;
};
