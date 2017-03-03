export class SignInFormModel{
  email: string;
  password: string;

  toJSON(){
    return {
      email: this.email,
      password: this.password
    }
  }

}
