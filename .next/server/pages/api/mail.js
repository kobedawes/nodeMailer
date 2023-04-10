"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/mail";
exports.ids = ["pages/api/mail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./config/nodemailer.js":
/*!******************************!*\
  !*** ./config/nodemailer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mailOptions\": () => (/* binding */ mailOptions),\n/* harmony export */   \"transporter\": () => (/* binding */ transporter)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst email = process.env.EMAIL;\nconst pass = process.env.EMAIL_PASS;\n// create reusable transporter object using the default SMTP transport\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    host: \"smtp.ethereal.email\",\n    port: 587,\n    auth: {\n        user: email,\n        pass: pass\n    }\n});\nconst mailOptions = {\n    from: email\n} // //send mail with defined transport object\n // let info = await transporter.sendMail({\n //   from: '\"Fred Foo 👻\" <foo@example.com>', // sender address\n //   to: \"bar@example.com, baz@example.com\", // list of receivers\n //   subject: \"Hello ✔\", // Subject line\n //   text: \"Hello world?\", // plain text body\n //   html: \"<b>Hello world?</b>\", // html body\n // });\n // console.log(\"Message sent: %s\", info.messageId);\n // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>\n // // Preview only available when sending through an Ethereal account\n // console.log(\"Preview URL: %s\", nodemailer.getTestMessageUrl(info));\n // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbm9kZW1haWxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBRXBDLE1BQU1DLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztBQUMvQixNQUFNQyxPQUFPSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7QUFFakMsc0VBQXNFO0FBQ2pFLE1BQU1DLGNBQWNQLGlFQUEwQixDQUFDO0lBQ2xEUyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtRQUNGQyxNQUFNWDtRQUNOSSxNQUFNQTtJQUNWO0FBQ0osR0FBRztBQUVJLE1BQU1RLGNBQWE7SUFDdEJDLE1BQU1iO0FBQ1YsRUFJQSw0Q0FBNEM7Q0FDNUMsMENBQTBDO0NBQzFDLCtEQUErRDtDQUMvRCxpRUFBaUU7Q0FDakUsd0NBQXdDO0NBQ3hDLDZDQUE2QztDQUM3Qyw4Q0FBOEM7Q0FDOUMsTUFBTTtDQUVOLG1EQUFtRDtDQUNuRCxzRUFBc0U7Q0FFdEUscUVBQXFFO0NBQ3JFLHNFQUFzRTtDQUN0RSxvRUFBb0U7Q0FsQm5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnL25vZGVtYWlsZXIuanM/NTMyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5jb25zdCBlbWFpbCA9IHByb2Nlc3MuZW52LkVNQUlMO1xuY29uc3QgcGFzcyA9IHByb2Nlc3MuZW52LkVNQUlMX1BBU1M7XG5cbiAgLy8gY3JlYXRlIHJldXNhYmxlIHRyYW5zcG9ydGVyIG9iamVjdCB1c2luZyB0aGUgZGVmYXVsdCBTTVRQIHRyYW5zcG9ydFxuZXhwb3J0IGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIGhvc3Q6ICdzbXRwLmV0aGVyZWFsLmVtYWlsJyxcbiAgICBwb3J0OiA1ODcsXG4gICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBlbWFpbCxcbiAgICAgICAgcGFzczogcGFzcyxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBtYWlsT3B0aW9ucz0ge1xuICAgIGZyb206IGVtYWlsLFxufVxuXG5cblxuLy8gLy9zZW5kIG1haWwgd2l0aCBkZWZpbmVkIHRyYW5zcG9ydCBvYmplY3Rcbi8vIGxldCBpbmZvID0gYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xuLy8gICBmcm9tOiAnXCJGcmVkIEZvbyDwn5G7XCIgPGZvb0BleGFtcGxlLmNvbT4nLCAvLyBzZW5kZXIgYWRkcmVzc1xuLy8gICB0bzogXCJiYXJAZXhhbXBsZS5jb20sIGJhekBleGFtcGxlLmNvbVwiLCAvLyBsaXN0IG9mIHJlY2VpdmVyc1xuLy8gICBzdWJqZWN0OiBcIkhlbGxvIOKclFwiLCAvLyBTdWJqZWN0IGxpbmVcbi8vICAgdGV4dDogXCJIZWxsbyB3b3JsZD9cIiwgLy8gcGxhaW4gdGV4dCBib2R5XG4vLyAgIGh0bWw6IFwiPGI+SGVsbG8gd29ybGQ/PC9iPlwiLCAvLyBodG1sIGJvZHlcbi8vIH0pO1xuXG4vLyBjb25zb2xlLmxvZyhcIk1lc3NhZ2Ugc2VudDogJXNcIiwgaW5mby5tZXNzYWdlSWQpO1xuLy8gLy8gTWVzc2FnZSBzZW50OiA8YjY1OGY4Y2EtNjI5Ni1jY2Y0LTgzMDYtODdkNTdhMGI0MzIxQGV4YW1wbGUuY29tPlxuXG4vLyAvLyBQcmV2aWV3IG9ubHkgYXZhaWxhYmxlIHdoZW4gc2VuZGluZyB0aHJvdWdoIGFuIEV0aGVyZWFsIGFjY291bnRcbi8vIGNvbnNvbGUubG9nKFwiUHJldmlldyBVUkw6ICVzXCIsIG5vZGVtYWlsZXIuZ2V0VGVzdE1lc3NhZ2VVcmwoaW5mbykpO1xuLy8gLy8gUHJldmlldyBVUkw6IGh0dHBzOi8vZXRoZXJlYWwuZW1haWwvbWVzc2FnZS9XYVFLTWdLZGR4UURvb3UuLi4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIkVNQUlMIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0IiwiYXV0aCIsInVzZXIiLCJtYWlsT3B0aW9ucyIsImZyb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/nodemailer.js\n");

/***/ }),

/***/ "(api)/./pages/api/mail.js":
/*!***************************!*\
  !*** ./pages/api/mail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mailHandler)\n/* harmony export */ });\n/* harmony import */ var _config_nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/nodemailer */ \"(api)/./config/nodemailer.js\");\n\nasync function mailHandler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        try {\n            for (const student of data){\n                await _config_nodemailer__WEBPACK_IMPORTED_MODULE_0__.transporter.sendMail({\n                    ..._config_nodemailer__WEBPACK_IMPORTED_MODULE_0__.mailOptions,\n                    to: student.email,\n                    subject: \"Rocket Roster Sign up\",\n                    text: `Hello ${student.fullName}, \\n Please sign up for Rocket Rosters with your unique code.`,\n                    html: \"<h1>Rocket Roster Sign up</h1>\"\n                });\n            }\n            return res.status(200).json({\n                success: true\n            });\n        } catch (error) {\n            console.log(error);\n            return res.status(400).json({\n                message: error.message\n            });\n        }\n    }\n    return res.status(400).json({\n        message: \"bad request\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRTtBQUVwRCxlQUFlRSxZQUFZQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNoRCxJQUFHRCxJQUFJRSxNQUFNLEtBQUssUUFBTztRQUNyQixNQUFNQyxPQUFPSCxJQUFJSSxJQUFJO1FBQ3JCLElBQUk7WUFDQSxLQUFJLE1BQU1DLFdBQVdGLEtBQUs7Z0JBQ3RCLE1BQU1MLG9FQUFvQixDQUFDO29CQUN2QixHQUFHRCwyREFBVztvQkFDZFUsSUFBSUYsUUFBUUcsS0FBSztvQkFDakJDLFNBQVM7b0JBQ1RDLE1BQU0sQ0FBQyxNQUFNLEVBQUVMLFFBQVFNLFFBQVEsQ0FBQyw2REFBNkQsQ0FBQztvQkFDOUZDLE1BQU07Z0JBQ1Y7WUFDSjtZQUNBLE9BQU9YLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLFNBQVMsSUFBSTtZQUFBO1FBQzlDLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osT0FBT2YsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBQ0ssU0FBU0gsTUFBTUcsT0FBTztZQUFBO1FBQ3ZEO0lBQ0osQ0FBQztJQUNELE9BQU9sQixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUNLLFNBQVM7SUFBYTtBQUN2RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21haWwuanM/N2QxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWlsT3B0aW9ucywgdHJhbnNwb3J0ZXIgfSBmcm9tIFwiLi4vLi4vY29uZmlnL25vZGVtYWlsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFpbEhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBpZihyZXEubWV0aG9kID09PSBcIlBPU1RcIil7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvcihjb25zdCBzdHVkZW50IG9mIGRhdGEpe1xuICAgICAgICAgICAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubWFpbE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBzdHVkZW50LmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBcIlJvY2tldCBSb3N0ZXIgU2lnbiB1cFwiLCAvLyBTdWJqZWN0IGxpbmVcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYEhlbGxvICR7c3R1ZGVudC5mdWxsTmFtZX0sIFxcbiBQbGVhc2Ugc2lnbiB1cCBmb3IgUm9ja2V0IFJvc3RlcnMgd2l0aCB5b3VyIHVuaXF1ZSBjb2RlLmAsICAvLyBwbGFpbiB0ZXh0IGJvZHlcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogXCI8aDE+Um9ja2V0IFJvc3RlciBTaWduIHVwPC9oMT5cIixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOiB0cnVlfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IGVycm9yLm1lc3NhZ2V9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IFwiYmFkIHJlcXVlc3RcIn0pO1xufSJdLCJuYW1lcyI6WyJtYWlsT3B0aW9ucyIsInRyYW5zcG9ydGVyIiwibWFpbEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInN0dWRlbnQiLCJzZW5kTWFpbCIsInRvIiwiZW1haWwiLCJzdWJqZWN0IiwidGV4dCIsImZ1bGxOYW1lIiwiaHRtbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mail.js"));
module.exports = __webpack_exports__;

})();