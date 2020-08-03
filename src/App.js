import React, {Component} from 'react';

class LifeStyle extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      isloaded: false,
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          isloaded: true,
          items: data,
        })
      })
  }
  render(){
    if(!this.state.isloaded){
      return <div>Loading...</div>
    }
    return(
      <div>
        <ul>
          {this.state.items.map((ele)=><li>Name: {ele.name} | UserName: {ele.username} | <a href={'http://'+ ele.website} target='blank'>Website</a></li>)}
        </ul>
      </div>
    )
  }
}

export default LifeStyle;
