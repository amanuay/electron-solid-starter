import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    // electron: ElectronAPI
    api: any
    versions: {
      'node': () => string,
      'chrome': () => string,
      'electron': () => string,
      'ping': () => void
    }
  }
}