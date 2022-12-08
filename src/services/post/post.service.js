export class PostService {
  static async postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        debugger;
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
