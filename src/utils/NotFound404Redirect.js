import React, { Component } from "react"

class NotFound404Redirect extends Component {
  componentWillMount() {
    document.location.replace( '/404' )
  }

  render() {
    return <div>Page not found</div>
  }
}

export default NotFound404Redirect
