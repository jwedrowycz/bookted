export default function({ redirect, store }) {
  console.log(store.state.auth.authenticated);
    if (store.state.auth.authenticated) {
        redirect({name: 'index'})
    }
  }