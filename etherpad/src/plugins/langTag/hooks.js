import("etherpad.log");
import("faststatic");
import("etherpad.utils.*");
import("etherpad.globals.*");

function editBarItemsLeftPad(arg) {
  return arg.template.include('langTagEditbarButtons.ejs', undefined, ['langTag']);
}
