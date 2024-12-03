interface BasicOption {
  label: string;
  value: string;
}

type SelectOption = BasicOption;

type TabOption = BasicOption;

interface BasicUserInfo {
  /**
   * 头像
   */
  avatar: string;
  /**
   * 电子邮箱
   */
  email: string;
  /**
   * 用户id
   */
  id: string;
  /**
   * 用户名
   */
  name: string;
  /**
   * 用户昵称
   */
  nickname: string;
  /**
   * 用户角色
   */
  roles?: string[];
}

export type { BasicOption, BasicUserInfo, SelectOption, TabOption };
