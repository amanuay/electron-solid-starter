import { onMount, type Component } from 'solid-js'

const App: Component = () => {
  onMount(() => {
    const information = document.getElementById('info')
    information!.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`
  })

  return (
    <>
      <h1>Hello from Electron renderer!</h1>
      <p>👋</p>
      <p id="info"></p>
      <button onclick={() => window.versions.ping()}>ping</button>
    </>
  )
}

export default App




