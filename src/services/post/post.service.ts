export class PostService {
  public static async postData(url: string, data: object) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Success');
        } else {
          console.log('Error HTTPS' + response.status);
        }
      })
      .catch((err) => console.log(err));

    return response;
  }
}
