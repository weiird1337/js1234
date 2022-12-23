var n = getNumberOfWidgetsFromDatabase();
var widgets = new Array(n);
for(var i=0; i < n; i++) {
 widgets[i] = getDatabaseRecord(i);
}
