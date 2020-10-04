import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import { StylesProvider, jssPreset } from '@material-ui/styles';

import { ThemeProvider } from '@material-ui/styles';
import { create } from 'jss';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import rtl from 'jss-rtl';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Cookies from 'js-cookie'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const Context = createContext();
const { Provider } = Context;
const cookieName = 'SandBoxCookieLogged'

const reducer = (state, action) => {
  switch (action.type) {
    case 'direction':
      const newState = {
        ...state,
        direction: state.direction === 'ltr' ? 'rtl' : 'ltr'
      };
      return newState;
    case 'type':
      return { ...state, type: state.type === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('@media (prefers-color-scheme: dark)');
  const [state, dispatch] = useReducer(reducer, {
    type: prefersDarkMode ? 'dark' : 'light',
    direction: 'ltr'
  });

  const theme = createMuiTheme({
    direction: state.direction,
    palette: {
      type: state.type,
      primary: indigo,
      secondary: red,
      error: red
    },
    typography: {
      headline: {
        fontSize: '1rem'
      },
      subtitle1: {
        fontSize: '0.8125rem'
      },
      button: {
        fontWeight: 400,
        textTransform: 'initial'
      },
      body1: {
        fontSize: '0.875rem'
      }
    },
    shape: {
      borderRadius: 4
    }
  });

  const cookieLogged = Cookies.getJSON(cookieName)
  const [logged, setLogged] = useState(cookieLogged ? cookieLogged.logged : false)


  useEffect(() => {
    document.body.dir = state.direction;
  }, [state.direction]);

  useEffect(() => {
    if (logged) {
      Cookies.set(cookieName, { logged: true })
    } else {
      Cookies.remove(cookieName)
    }
  }, [logged])

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <Provider value={{state, dispatch,  logged, setLogged}} >{children}</Provider>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
export const useAppState = () => useContext(Context);
