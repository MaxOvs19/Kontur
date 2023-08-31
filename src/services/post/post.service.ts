import emailjs from '@emailjs/browser'

export class PostService {
  static serviceId: string = process.env.REACT_APP_SERVICE_ID as string
  static templateId: string = process.env.REACT_APP_TEMPLATE_ID as string
  static publicKey: string = process.env.REACT_APP_PUBLIC_KEY as string

  public static async postData(data: any) {
    emailjs.send(this.serviceId, this.templateId, data, this.publicKey).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }
}
