import { connect } from 'react-redux';
import Send from '../components/Send';
import { saveAndSendLetter } from '../actions/send-action';


const mapStateToProps = function (state) {
  return {
    Send: state.Send
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSend: (letter) => dispatch(saveAndSendLetter(letter))
})

const statefulComponentCreator = connect(mapStateToProps,mapDispatchToProps);
const SendContainer = statefulComponentCreator(Send);
export default SendContainer;
