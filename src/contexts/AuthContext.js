import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

export default class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  }

  toggleAuth = () => {
    const { isAuthenticated } = this.state
    this.setState({ isAuthenticated: !isAuthenticated })
  }

  render() {
    const { children } = this.props
    return (
      <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
        {children}
      </AuthContext.Provider>
    )
  }
}
