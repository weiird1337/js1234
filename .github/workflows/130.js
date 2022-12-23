function widget(partNo, size) {
 var this.no = partNo;
 var this.breed = size;
}
function FormFactor(material, widget) {
 this.material = material,
 this.widget = widget,
 return this;
}
var widgetA = widget(100, "large");
var widgetB = new widget(101, "small");
var formFactorA = newFormFactor("plastic", widgetA);
var formFactorB = new ForumFactor("metal", widgetB);
