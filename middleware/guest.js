export default function({ redirect, store }) {
    if (!store.state.auth.authenticated === false) {
        redirect({name: 'index'})
    }
  }