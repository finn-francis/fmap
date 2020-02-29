import React from 'react'
import { Link } from 'react-router-dom'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      companies: []
    }
  }

  componentDidMount() {
    const url = '/api/v1/companies'
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {this.setState({ companies: response })})
      .catch(() => { self.props.history.push("/")});
  }

  render() {
    const { companies } = this.state
    const companyTable = (
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Parent</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company, index) => (
          <tr key={index}>
            <th scope='row'>{index + 1}</th>
            <td>
              <Link to={`/companies/${company.id}`} role='button' className='nav-link'>
                {company.name}
              </Link>
            </td>
            <td>
              {company.parent ? company.parent.name : 'None' }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    )
    const noCompanies = (
      <h2>NO COMPANIES</h2>
    )
    return (
      <>
        {companies.length > 0 ? companyTable : noCompanies}
      </>
    )
  }
}

export default Index