function sendMail(){
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': '1zMhZyToNM_LJ6wSkTHsRw',
      'message': {
        'from_email': 'paul.willot.2@gmail.com',
        'to': [
          {
            'email': 'paul.willot.2@gmail.com',
            'name': 'paul.willot.2',
            'type': 'to'
          }
        ],
        'subject': 'title',
        'html': 'html can be used'
      }
    }
  });
}
