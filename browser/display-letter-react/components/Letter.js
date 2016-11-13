import React, { Component } from 'react';
import To from '../components/To';
import From from '../components/From';
import Stamp from '../components/Stamp';
import Location from '../components/Location';
import Contents from '../components/Contents';

import Paper from 'material-ui/Paper';

let letterObject = {};

export class Letter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      letter: {}
    }
  }
  componentDidMount () {
    fetch(`/api/${this.props.id}`)
      .then(res => res.json())
      .then(letterObj => this.setState({letter: letterObj}));
    }
    // let location_ip = '';
    // Promise
    //   .all([
    //     fetch('/location')
    //     .then(res => res.json()),
    //   ])
    //   .then(results => {
    //     location_ip = results[0].ip;
    //     console.log("IP",location_ip)
    //   });
  render() {
    //
    //  api request /api/id
    //

    const bodyStyle = {
      padding: 10
    }
    const envelStyle = {
      padding:30
    }
    const contentsStyle = {
      paddingLeft:20,
      paddingRight:20
    };
    const stampStyle = {
      textAlign: "right"
    };
    const thirdRow = {
      height: 150
    }
    return (
      <div style={bodyStyle}>
        <Paper zDepth={2} style={envelStyle}>
          <div className="row">
            <div className="col-md-4">
              <From value={this.state.letter.from} />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4" style={stampStyle}>
              <Stamp value={this.state.letter.stamp} />
              <Location value={this.state.letter.location} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"><div style={thirdRow}></div></div>
            <div className="col-md-4"><To value={this.state.letter.to} /></div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </Paper>
        <hr />
        <Paper zDepth={3} style={contentsStyle}>
          <Contents value={this.state.letter.contents}/>
        </Paper>
        <hr />
      </div>
    )
  }
}
