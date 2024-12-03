import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    accessMode: 'backend',
    layout: 'mixed-nav',
  },
  sidebar: {
    enable: false,
  },
  tabbar: {
    enable: false,
  },
  footer: {
    enable: true,
  },
  theme: {
    builtinType: 'slate',
    colorPrimary: 'hsl(240 5.9% 10%)',
    mode: 'light',
  },
});
