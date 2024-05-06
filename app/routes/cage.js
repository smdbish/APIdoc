 /**
 * @apiDefine CageResp
 * @apiSuccess {Object[]} respObj Cage Objects (Array)
 * @apiSuccess {Number} respObj.id Cage Id
 * @apiSuccess {String} respObj.ownerUser Owner name
 * @apiSuccess {String} respObj.creatorUser Creator name
 * @apiSuccess {Number} respObj.cageSid Cage SID
 * @apiSuccess {Number=0,1,2,3,4} respObj.state Cage state 0 -”Inactive”, 1-”Active”, 2-”Overcrowded”, 3- “Deleted”, 4- “Ordered” 
 * @apiSuccess {String} respObj.disposition Cage disposition
 * @apiSuccess {Date}  resObj.setupDate  Cage setup date
 * @apiSuccess {Date}  resObj.endDate   cage end date
 * @apiSuccess {String} respObj.cageTag  Cage Tag
 * @apiSuccess {String} respObj.cageBarcode Cage Barcode
 * @apiSuccess {String} respObj.strain  Strain
 * @apiSuccess {String} respObj.protocol Cage Protocol
 * @apiSuccess {String} respObj.keyContact Protocol Key Contact
 * @apiSuccess {String} respObj.status Cage Status
 * @apiSuccess {String} respObj.comment Comments
 * @apiSuccess {String} respObj.cageType Cage Type
 * @apiSuccess {String} respObj.perDiemRate Per Diem rate
 * @apiSuccess {Date} resObj.createdDateTime 
 * @apiSuccess {Date} resObj.lastUpdatedDateTime
 * @apiSuccess {Date} resObj.createdDateTime
 * @apiSuccess {Object[]} respObj.currResidents Current residents of Cage
 * @apiSuccess {Object[]} respObj.prevResidents Previous residents of Cage
 * @apiSuccess {Number} totalPage Total pages
 * @apiSuccess {Number} currentPage Current page
 * @apiSuccess {Number} totalNum Total number of records
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "messageCode": "200",
 *   "messageDesc": "SUCCESS",
 *   "respObj": [
 *       [
 *           {
 *               "id": 210944,
 *               "ownerUser": "bluesky Test3",
 *              "creatorUser": "Bahareh Saber",
 *               "cageSid": 884,
 *               "state": 1,
 *               "disposition": "Stock",
 *               "setupDate": "2015-03-04",
 *               "endDate": null,
 *               "cageTag": "786",
 *               "cageBarcode": "992535",
 *               "strain": "GGYT",
 *               "protocol": "",
 *               "keyContact": "Kelly Rodriques  ",
 *               "status": "Isolator 2",
 *               "comment": "",
 *               "cageType": "Barrier",
 *               "perDiemRate": null,
 *               "createdDateTime": "2015-06-25T12:39:35Z",
 *               "lastUpdatedDateTime": "2023-02-22T18:46:53Z",
 *               "currResidents": [
 *                   {
 *                       "animalSid": 221,
 *                       "physicalTag": "a"
 *                   }
 *               ],
 *               "prevResidents": [
 *                   {
 *                       "animalSid": 2634,
 *                       "physicalTag": "766"
 *                   },
 *                   {
 *                       "animalSid": 2635,
 *                       "physicalTag": "767"
 *                   }
 *               ]
 *           }
 *       ]
 *   ],
 *   "totalPage": 1,
 *   "currentPage": 1,
 *   "totalNum": 1
 *    }
 * 
 */
  
  
 
 
 /**
 * @apiVersion 1.2.0
 * @api {get} /external/v1.2/cage Get Cage List
 * @apiName getCageInfo
 * @apiGroup Cage
 * @apiDescription The Get Cage api call is used to pull information on one, or a group of cages. The API user must have View access on those records.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/cage?cageids=210944"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 *
 *  * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/cage?cageSID=562&ownerUser_id=78"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/cage?numberPerPage=10&pageNo=1"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 *
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/cage?sinceDateTime=2024-02-08T00:00:01Z&ownerUser_name=bluesky"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/cage?ownerUser_id=54"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/cage?cageState=INACTIVE&cageState=OVERCROWDED"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 * 
 * @apiUse RequestHeader
 * @apiParam {Number[]} [cageIds] Cage Id array
 * @apiParam {Number[]} [cageSID] Cage SID array
 * @apiParam {String[]} [cageType] Cage Type
 * @apiParam {String[]} [ownerUser_name] Owner login name or full name
 * @apiParam {Number[]} [ownerUser_id] Owner user id
 * @apiParam {String[]= “INACTIVE“, “ACTIVE“, “OVERCROWDED“, "ORDERED"} [cageState] Cage State
 * @apiParam {DateTime} [sinceDateTime] Return all changed cage information after this datetime
 * @apiParam {Number} [numberPerPage] Number of Records per Page
 * @apiParam {Number} [pageNo] Page No.
 * 
 * @apiUse ResponseFormat
 * @apiUse CageResp
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1.2/cage 
 */

