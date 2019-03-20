// api统一定义
export const API = {
  // 登录
  login: 'login',
  // 获取验证码token
  getValidationToken: 'interimToken',
  // 用户获取图片验证码
  getValidateCode: 'imageValidation/',
  // 查询设备列表
  listDevice: 'device/list',
  // 更新设备
  updateDevice: 'device/update',
  // 添加设备
  addDevice: 'device/add',
  // 删除设备
  deleteDevice: 'delete-device/',
  // 获取添加设备的选项卡数据
  getDeviceSelection: 'device/search-selection/',
  // 分发设备
  distributeDevice: 'device/distribute',
  // 报废设备
  discardDevice: 'device/discard',
  // 查询品牌列表
  listDeviceBrand: 'get-brands',
  // 添加品牌
  addDeviceBrand: 'brand',
  // 删除品牌
  deleteBrand: 'delete-brand/',
  // 根据父id查询子分类
  listCategoryByPId: 'list-category-by-pId',
  // 分页查询所有用户
  listUser: 'user/list-by-page',
  // 添加用户
  addUser: 'user/add',
  // 更新用户
  updateUser: 'user/modify',
  // 删除用户
  deleteUser: 'user/delete/',
  // 查询用户角色
  getUserSelection: 'role/list-by-page',
  // 根据父id查询地点
  addressDevice: 'list-location-by-pid',
  // 删除分类
  deleteCategory: 'delete-category-by-id/',
  // 根据父id插入一个子分类
  insertCategory: 'insert-category-by-pid',
  AddAddress: 'insert-location-by-pid',
  // 删除该节点为根的地点树
  DeleteAddress: 'delete-location-tree-by-Id/',
  DeviceRecord: 'device/get-status-record-by-deviceId',
  // 查询设备型号
  listDeviceModel: 'device-model-listAll',
  // 添加设备型号
  addDeviceModel: '/device-model-submit',
  // 删除设备型号
  deleteDeviceModel: '/device-model-delete/',
  // 查询工作性质
  listWorkNature: 'work_nature/listAll',
  // 添加工作性质
  addWorkNature: 'work_nature/add',
  // 删除工作性质
  deleteWorkNature: 'work_nature/delete/',
  // 多个设备导入：下载表格
  downloadTemplate: 'device/download-device-template',
  // 多个设备导入:上传
  addList: 'device/add-list'
}
