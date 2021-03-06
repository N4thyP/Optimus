var fs = require("fs");
var juice = require("juice");

/*CSS*/
var sourceCss = fs.readFileSync("optimus/css/styles.css", "utf-8");

/*HTML to READ*/
var oneColumn = fs.readFileSync(
	"optimus/profiler/templates/one_column.html",
	"utf-8",
);

var generalInfo = fs.readFileSync(
	"optimus/profiler/templates/general_info.html",
	"utf-8",
);

var table = fs.readFileSync("optimus/templates/table.html", "utf-8");

/** ADD STYLE TAG & CONCAT TO THE FILE */
var inlineCssOneColumn = juice("<style>" + sourceCss + "</style>" + oneColumn, {
	removeStyleTags: true,
	preserveMediaQueries: true,
});

var inlineCssGeneralInfo = juice(
	"<style>" + sourceCss + "</style>" + generalInfo,
	{ removeStyleTags: true, preserveMediaQueries: true },
);

var inlineCssTable = juice("<style>" + sourceCss + "</style>" + table, {
	removeStyleTags: true,
	preserveMediaQueries: true,
});

/** CREATE A INLINE-CSS HTML FILE */
fs.writeFile(
	"optimus/profiler/templates/out/one_column.html",
	inlineCssOneColumn,
	function (err) {
		if (err) { throw err; }
	},
);

fs.writeFile(
	"optimus/profiler/templates/out/general_info.html",
	inlineCssGeneralInfo,
	function (err) {
		if (err) { throw err; }

	},
);

fs.writeFile("optimus/templates/out/table.html",
	inlineCssTable,
	function (err) {
		if (err) { throw err; }

	});
