const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("hello world");
});
app.listen(3000, () => {
    console.log("App run at 3000");
});
//# sourceMappingURL=server.js.map