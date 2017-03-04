export class GiveKudosFormModel{
  receiverEmail: string;
  amount: number;
  message: string;

  toJSON(){
    return {
      receiverEmail: this.receiverEmail,
      amount: this.amount,
      message: this.message
    }
  }

}
