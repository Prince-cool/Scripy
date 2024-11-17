// var obj = {
//     "code": "2202",
//     "camera_config": "null",
//     "upload_url": "https://www.argun.cc/",
//     "ref_id": "6506-0009487784-argun666niuniujun0fdcnchgqz7s6",
//     "smile_job_id": "6666666666"
//   },
//   body = JSON.stringify(obj);
var body = $response.body; // 获取响应体
var obj = JSON.parse(body); // 将响应体解析为JSON对象
console.log('hook到了');
// 检查JSON对象中是否存在reference键和provider是否为"SMILE_ID"
if (obj.ref_id) {
    ref_id=obj.ref_id;
    var obj2 = {
    "code": "2202",
    "camera_config": "null",
    "upload_url": 'http://120.76.203.201/a',
    "ref_id": ref_id,
    "smile_job_id": "6666666666"
    },
    console.log('拿到验证参数:')
    console.log(ref_id);
    $task.fetch({
        url: 'http://120.76.203.201/api?ref_id=${ref_id}',
        method: "GET"
    }).then(response => {
        console.log(response.body);
    }, error => {
        console.log('false');
    });
    body2 = JSON.stringify(obj2);
    $done({
          "body": body2,
          "status": 200
        });
} else {
    $done({body}); // 如果不符合条件，返回原始响应体
}


