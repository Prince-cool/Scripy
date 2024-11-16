// var obj = {
//     "code": "2202",
//     "camera_config": "null",
//     "upload_url": "https://www.argun.cc/",
//     "ref_id": "6506-0009487784-argun666niuniujun0fdcnchgqz7s6",
//     "smile_job_id": "6666666666"
//   },
//   body = JSON.stringify(obj);
body = $response.body; // 获取响应体
var obj = JSON.parse(body); // 将响应体解析为JSON对象
// 检查JSON对象中是否存在reference键和provider是否为"SMILE_ID"
if (obj.ref_id) {
    ref_id=obj.ref_id;
    obj.upload_url='http://120.76.203.201/a';
    console.log(ref_id);
    body = JSON.stringify(obj);
    $done({body}); // 如果不符合条件，返回原始响应体
} else {
    $done({body}); // 如果不符合条件，返回原始响应体
}


