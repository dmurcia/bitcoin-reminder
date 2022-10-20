interface Email {
  sendEmail(email: string, message: string): void
}

export default class Email_helper implements Email {
  sendEmail(email: string, message: string): void {
    console.log(`To: ${email}, Message: ${message}`)
  }
}
