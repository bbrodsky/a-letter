import axios from 'axios';

export const sendLetter = id => ({
  type: "SEND_LETTER",
  id
});

export const saveAndSendLetter = letter =>
  dispatch =>
    axios.post(`/send`, letter)
      .then(res => res.data)
      .then(letter => {
        dispatch(sendLetter(letter.id));
      })
      .catch(err => console.error(`Unable to send letter.`, err));
