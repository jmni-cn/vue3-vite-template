import { createDiscreteApi } from 'naive-ui'

declare global {
  interface Window {
    $message?: ReturnType<typeof createDiscreteApi>['message'];
    $dialog?: ReturnType<typeof createDiscreteApi>['dialog'];
    $notification?: ReturnType<typeof createDiscreteApi>['notification'];
    $loadingBar?: ReturnType<typeof createDiscreteApi>['loadingBar'];
  }
}

export function setupNaiveDiscreteApi() {
  const { message, dialog, notification } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
  )
  window.$message = message
  window.$dialog = dialog
  window.$notification = notification
}

export const { loadingBar } = createDiscreteApi(
  ['loadingBar'],
  {
    loadingBarProviderProps: {
      themeOverrides: {
        colorError: '#d03050',
        colorLoading: '#62adf7',
        height: '0.3rem',
      }
    }
  }
)
window.$loadingBar = loadingBar

