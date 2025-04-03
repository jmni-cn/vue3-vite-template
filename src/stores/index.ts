
import type { App } from 'vue' 
import { createPinia } from 'pinia'

export function setUpStore(app: App<Element>){
    const store = createPinia()
    app.use(store)
}

export * from './modules'