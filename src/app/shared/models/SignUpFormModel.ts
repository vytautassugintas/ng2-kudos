export class SignUpFormModel {
  fullName: string;
  email: string;
  password: string;

  toJSON() {
    return {
      firstName: this.fullName.split(" ")[0],
      lastName: this.fullName.split(" ")[1],
      email: this.email,
      password: this.password,
      confirmPassword: this.password,
    }
  }
}
