import axios from 'axios';

export const sendLetter = letter => ({
  type: "SEND_Letter",
  letter
});

export const saveAndSendLetter = letter =>
  dispatch =>
    axios.post(`/send`, letter)
      .then(res => res.data)
      .then(letter => {
        dispatch(sendLetter(letter));
      })
      .catch(err => console.error(`Unable to send letter.`, err));
