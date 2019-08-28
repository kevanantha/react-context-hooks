import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  }

  toggleTheme = () => {
    const { isLightTheme } = this.state
    this.setState({ isLightTheme: !isLightTheme })
  }

  render() {
    const { children } = this.props
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  }
}
