import React from 'react'

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      company: { name: 'Unknown' }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    const url = `/api/v1/companies/${id}`
    fetch(url)
      .then(response => {
        debugger
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {this.setState({ company: response })})
      // .catch(() => { self.props.history.push("/")});
  }

  render() {
    return (
      <div>
        <h1>{this.state.company.name}</h1>
      </div>
    )
  }
}

export default Show