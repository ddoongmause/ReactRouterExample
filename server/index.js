const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.resolve(__dirname, '../build')));

//f5를 누를때 /경로 문제 때문에 예외 처리
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(4000, function(){
    console.log('Example app listening on port 4000!');
});