export class GiveKudosFormModel{
  receiverEmail: string;
  amount: number;
  message: string;
  endorsement: string;

  toJSON(){
    return {
      receiverEmail: this.receiverEmail,
      amount: this.amount,
      message: this.message,
      endorsement: this.endorsement
    }
  }

  isValid(){
    if (!this.receiverEmail.length){
      return false;
    } else if (this.amount < 0){
      return false;
    } else {
      return true;
    }
  }

}
