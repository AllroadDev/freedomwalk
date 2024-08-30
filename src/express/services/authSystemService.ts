import { AuthDataBase } from "../../database/authSystemDb";
import { BadRequestError } from "../../util/customErrors";
import { generateTokens } from "../../util/jwtTokens";
import { userGoogleRegistrationSchema, userRegistrationSchema } from "../../util/zodSchemas";
import bcrypt from "bcryptjs";

export class AuthService {
  constructor(private authDb: AuthDataBase) {}

  public async registration(body: { email: string; password: string }) {
    const { email, password } = userRegistrationSchema.parse(body);
    const isExist = await this.authDb.getUserByEmail(email);
    if (isExist) throw new BadRequestError(`User with email ${email} already exists`);

    const name = email.split("@")[0];
    const hashedPassword = bcrypt.hashSync(password, 5);
    const insertedUser = await this.authDb.createAndGetUser({
      email,
      name,
      password: hashedPassword,
    });

    const tokens = generateTokens(insertedUser.id);

    return tokens;
  }

  public async login(body: { email: string; password: string }) {
    const { email, password } = userRegistrationSchema.parse(body);
    const user = await this.authDb.getUserByEmail(email);
    if (!user) throw new BadRequestError(`User with email '${email}' not found`);

    const passwordIsValid = bcrypt.compareSync(password, user.passwordHash);
    if (!passwordIsValid) throw new BadRequestError("Incorrect password");

    const tokens = generateTokens(user.id);
    return tokens;
  }

  public async googleAuth(body: { googleId: string; email: string; name: string }) {
    const { googleId, email, name } = userGoogleRegistrationSchema.parse(body);

    // Check if the user exists by email or Google ID
    let user = await this.authDb.getUserByEmail(email);
    const userByGoogleId = await this.authDb.getUserByGoogleId(googleId);

    if (!user && userByGoogleId) {
      // If user exists by Google ID but not by email, load user by Google ID
      user = userByGoogleId;
    } else if (user && !user.googleId) {
      // If user exists by email but not by Google ID, assign the Google ID to this user
      await this.authDb.updateGoogleId(user.id, googleId);
      user.googleId = googleId;
    } else if (!user) {
      // If user does not exist, create a new one
      user = await this.authDb.googleAuth({ googleId, name, email });
    }

    const tokens = generateTokens(user.id);
    return tokens;
  }
}

export type NewUser = {
  googleId: string;
  name: string;
  email: string;
  passwordHash: string;
};
