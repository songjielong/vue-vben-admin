import type { BasicUserInfo } from '@vben-core/typings';

/** 用户信息 */
interface UserInfo extends BasicUserInfo {
  /**
   * 用户描述
   */
  desc: string;
  /**
   * 首页地址
   */
  homePath: string;

  /**
   * accessToken
   */
  token: string;

  /**
   * 拥有的按钮权限
   */
  buttonCodeList: string[];

  /**
   * 拥有的角色
   */
  roleCodeList: string[];
}

export type { UserInfo };
