import React, { Component } from "react"

class NotFound404Redirect extends Component {
  componentWillMount() {
    document.location.replace( '/404' )
  }

  render() {
    return <div>We're sorry, but the page you requested can not be found.</div>
  }
}

export default NotFound404Redirect
