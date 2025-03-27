<template>
  <n-config-provider :locale="langcode.lang" :date-locale="langcode.date" :theme-overrides="themeOverrides" :theme="theme">
    <n-message-provider :max="1">
      <n-dialog-provider>
        <n-global-style />
        <div class="container">
          <div class="container_layout">
              <router-view />
          </div>
        </div>
        <n-divider style="margin: 0" />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { reactive, watchEffect } from 'vue'
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui'

import {  getNavigatorLanguage } from '@/utils/locale'
const navigatorLanguage = getNavigatorLanguage()

const langcode = reactive({ lang: zhCN, date: dateZhCN })
watchEffect(() => {
  switch (navigatorLanguage) {
    case 'zhCN':
      langcode.lang = zhCN
      langcode.date = dateZhCN
      break
    // case 'zhTW':
    //   langcode.lang = zhTW
    //   langcode.date = dateZhTW
    //   break;
    // case 'koKR':
    //   langcode.lang = koKR
    //   langcode.date = dateKoKR
    //   break;
    // case 'enUS':
    //   langcode.lang = enUS
    //   langcode.date = dateEnUS
    //   break;
    default:
      langcode.lang = zhCN
      langcode.date = dateZhCN
      break
  }
})
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores'
const themeStore = useThemeStore()
const { themeOverrides, theme } = storeToRefs(themeStore)
</script>

<style lang="scss">
#app,
.n-config-provider {
  height: 100%;
}
.container {
  padding-top: 85px;
  min-height: 100%;
}
.container_layout {
  max-width: 1160px;
  margin: 0 auto;
  padding: 10px 40px 40px;
}
@media screen and (max-width: 800px) {
  .container_layout{
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 0 40px
  }
  .mobile-padding{
    padding: 0 16px
  }
}
</style>
