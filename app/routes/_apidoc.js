/**
 * @apiIgnore
 * @apiVersion 1.0.0
 * @api {get} /menu/list 菜单列表
 * @apiName list
 * @apiGroup Menu
 * @apiDescription 菜单列表数据获取
 * 
 * @apiParam {String} isAdmin=0 1-管理员; 0-普通用户
 * 
 * @apiSuccess {Boolean} success true-成功;false-失败
 * @apiSuccess {String} msg 错误提示
 * @apiSuccess {Object[]} data 返回的菜单列表
 * @apiUse MenuItem
 */

/**
 * 请求的菜单列表api
 */
function list(){
  return 'list';
}